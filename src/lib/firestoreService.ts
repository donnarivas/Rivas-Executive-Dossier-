import { 
  db, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  handleFirestoreError,
  OperationType
} from './firebase';
import type { EndorsementItem } from '../components/FacultyEndorsementsSection';
import type { EmbeddedDocument } from '../components/PhotoEmbedGallery';

const ENDORSEMENTS_COLLECTION = 'endorsements';
const CUSTOM_DOCS_COLLECTION = 'custom_documents';
const APPLICATION_ACTIVITY_COLLECTION = 'application_activity';

export interface ApplicationActivity {
  id?: string;
  activityType: 'perspective_switch' | 'document_view' | 'contact_action' | 'navigation' | 'endorsement_view' | 'metric_interaction' | 'application_progress';
  action: string;
  sectionId?: string;
  sectionName?: string;
  details?: string;
  metadata?: Record<string, unknown>;
  timestamp: string;
  createdAt?: string;
}

/**
 * Save candidate application progress or user interactions into the 'application_activity' collection.
 */
export async function saveApplicationActivity(activity: Omit<ApplicationActivity, 'timestamp'> & { timestamp?: string }): Promise<boolean> {
  const activityId = activity.id || `act_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const nowIso = new Date().toISOString();
  
  const payload: ApplicationActivity = {
    ...activity,
    id: activityId,
    timestamp: activity.timestamp || nowIso,
    createdAt: activity.createdAt || nowIso
  };

  try {
    const docRef = doc(db, APPLICATION_ACTIVITY_COLLECTION, activityId);
    const sanitized = JSON.parse(JSON.stringify(payload));
    await setDoc(docRef, sanitized, { merge: true });
    return true;
  } catch (err) {
    console.warn('Firestore save application activity warning:', err);
    try {
      handleFirestoreError(err, OperationType.WRITE, APPLICATION_ACTIVITY_COLLECTION);
    } catch {
      // Graceful fallback to avoid blocking user interaction in the UI
    }
    return false;
  }
}

/**
 * Real-time listener for candidate application activities from Firestore
 */
export function subscribeToApplicationActivity(
  onData: (activities: ApplicationActivity[]) => void,
  onError?: (err: Error) => void
) {
  try {
    const colRef = collection(db, APPLICATION_ACTIVITY_COLLECTION);
    return onSnapshot(
      colRef,
      (snapshot) => {
        const activities: ApplicationActivity[] = [];
        snapshot.forEach((d) => {
          activities.push({ ...(d.data() as ApplicationActivity), id: d.id });
        });
        // Sort descending by timestamp
        activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        onData(activities);
      },
      (err) => {
        console.warn('Firestore application activity subscription notice:', err.message);
        if (onError) onError(err);
      }
    );
  } catch (err) {
    console.warn('Firestore application activity fallback:', err);
    return () => {};
  }
}

/**
 * Fetch all candidate application activities
 */
export async function getApplicationActivities(): Promise<ApplicationActivity[]> {
  try {
    const colRef = collection(db, APPLICATION_ACTIVITY_COLLECTION);
    const snapshot = await getDocs(colRef);
    const activities: ApplicationActivity[] = [];
    snapshot.forEach((d) => {
      activities.push({ ...(d.data() as ApplicationActivity), id: d.id });
    });
    activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    return activities;
  } catch (err) {
    console.warn('Firestore get application activities warning:', err);
    return [];
  }
}

/**
 * Real-time listener for endorsements in Firestore
 */
export function subscribeToEndorsements(
  onData: (items: EndorsementItem[]) => void,
  onError?: (err: Error) => void
) {
  try {
    const colRef = collection(db, ENDORSEMENTS_COLLECTION);
    return onSnapshot(
      colRef,
      (snapshot) => {
        const items: EndorsementItem[] = [];
        snapshot.forEach((d) => {
          items.push({ ...(d.data() as EndorsementItem), id: d.id });
        });
        onData(items);
      },
      (err) => {
        console.warn('Firestore endorsements subscription notice:', err.message);
        if (onError) onError(err);
      }
    );
  } catch (err) {
    console.warn('Firestore initialization fallback:', err);
    return () => {};
  }
}

/**
 * Save / update an endorsement document in Firestore with immutability & cloud integrity flags
 */
export async function saveEndorsementToFirestore(item: EndorsementItem): Promise<boolean> {
  try {
    const docRef = doc(db, ENDORSEMENTS_COLLECTION, item.id);
    // Sanitize item to prevent undefined fields
    const sanitized = JSON.parse(JSON.stringify(item));
    await setDoc(docRef, {
      ...sanitized,
      isReadOnly: true,
      isImmutable: true,
      storageProvider: 'cloud_firestore',
      integrityVerified: true,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (err) {
    console.warn('Firestore save endorsement error:', err);
    return false;
  }
}

/**
 * Delete an endorsement document from Firestore
 */
export async function deleteEndorsementFromFirestore(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, ENDORSEMENTS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.warn('Firestore delete endorsement error:', err);
    return false;
  }
}

/**
 * Real-time listener for custom credential documents in Firestore (Section 07)
 */
export function subscribeToCustomDocs(
  onData: (items: EmbeddedDocument[]) => void,
  onError?: (err: Error) => void
) {
  try {
    const colRef = collection(db, CUSTOM_DOCS_COLLECTION);
    return onSnapshot(
      colRef,
      (snapshot) => {
        const items: EmbeddedDocument[] = [];
        snapshot.forEach((d) => {
          const data = d.data() as EmbeddedDocument;
          // Exclude any legacy recommendation letters that might have been uploaded
          if ((data.category as string) !== 'Letters of Recommendation') {
            items.push({ ...data, id: d.id });
          }
        });
        onData(items);
      },
      (err) => {
        console.warn('Firestore custom documents subscription notice:', err.message);
        if (onError) onError(err);
      }
    );
  } catch (err) {
    console.warn('Firestore custom docs fallback:', err);
    return () => {};
  }
}

/**
 * Save / update a custom credential document in Firestore (Section 07) with cloud persistence and immutability flags
 */
export async function saveCustomDocToFirestore(item: EmbeddedDocument): Promise<boolean> {
  try {
    const docRef = doc(db, CUSTOM_DOCS_COLLECTION, item.id);
    const sanitized = JSON.parse(JSON.stringify(item));
    await setDoc(docRef, {
      ...sanitized,
      isReadOnly: true,
      isImmutable: true,
      storageProvider: 'cloud_firestore',
      integrityVerified: true,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (err) {
    console.warn('Firestore save custom doc error:', err);
    return false;
  }
}

/**
 * Delete a custom credential document from Firestore (Section 07)
 */
export async function deleteCustomDocFromFirestore(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, CUSTOM_DOCS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.warn('Firestore delete custom doc error:', err);
    return false;
  }
}
