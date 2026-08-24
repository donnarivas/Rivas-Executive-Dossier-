import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  initializeFirestore,
  getFirestore, 
  setLogLevel,
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  type Firestore 
} from 'firebase/firestore';
import { getAuth, signInAnonymously, type Auth } from 'firebase/auth';
import firebaseConfigData from '../../firebase-applet-config.json';

// Set log level to prevent non-critical WebChannel connection warning noise in sandboxed iframes
try {
  setLogLevel('error');
} catch {
  // Ignore if already configured
}

const firebaseConfig = {
  apiKey: firebaseConfigData.apiKey,
  authDomain: firebaseConfigData.authDomain,
  projectId: firebaseConfigData.projectId,
  storageBucket: firebaseConfigData.storageBucket,
  messagingSenderId: firebaseConfigData.messagingSenderId,
  appId: firebaseConfigData.appId,
  measurementId: firebaseConfigData.measurementId || undefined
};

// Initialize Firebase App
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const customDatabaseId = firebaseConfigData.firestoreDatabaseId && firebaseConfigData.firestoreDatabaseId !== '(default)'
  ? firebaseConfigData.firestoreDatabaseId
  : undefined;

// Initialize Firestore with forced long polling for uninterrupted connectivity across sandboxed proxy environments
let firestoreInstance: Firestore;
try {
  firestoreInstance = customDatabaseId 
    ? initializeFirestore(app, { experimentalForceLongPolling: true }, customDatabaseId)
    : initializeFirestore(app, { experimentalForceLongPolling: true });
} catch {
  firestoreInstance = customDatabaseId
    ? getFirestore(app, customDatabaseId)
    : getFirestore(app);
}

export const db: Firestore = firestoreInstance;

// Initialize Firebase Auth
export const auth: Auth = getAuth(app);

// Authenticate anonymously in the background for secure persistent operations
signInAnonymously(auth).catch((err) => {
  console.warn('Firebase anonymous authentication notice:', err);
});

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.warn('Firestore Operation Error Notice:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Re-export common Firestore utilities
export { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp 
};
