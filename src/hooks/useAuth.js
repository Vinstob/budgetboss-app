import { useState, useEffect, useContext, createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebaseConfig';

// Crear contexto de autenticación
export const AuthContext = createContext({});

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userPreferences, setUserPreferences] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Monitorear cambios en autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      try {
        if (authUser) {
          setUser(authUser);
          // Obtener preferencias del usuario
          const docRef = doc(db, 'users', authUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserPreferences(docSnap.data());
          } else {
            // Crear documento del usuario si no existe
            const defaultPreferences = {
              currency: 'PYG',
              language: 'es',
              plan: 'free',
              createdAt: new Date(),
              theme: 'light'
            };
            await setDoc(docRef, defaultPreferences);
            setUserPreferences(defaultPreferences);
          }
        } else {
          setUser(null);
          setUserPreferences(null);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Registro
  const register = async (email, password, displayName) => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });

      // Crear documento de preferencias
      const defaultPreferences = {
        currency: 'PYG',
        language: 'es',
        plan: 'free',
        createdAt: new Date(),
        theme: 'light'
      };
      await setDoc(doc(db, 'users', userCredential.user.uid), defaultPreferences);

      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Iniciar sesión
  const login = async (email, password) => {
    try {
      setError(null);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Cerrar sesión
  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      setUser(null);
      setUserPreferences(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Actualizar preferencias
  const updateUserPreferences = async (preferences) => {
    try {
      if (user) {
        await setDoc(
          doc(db, 'users', user.uid),
          { ...userPreferences, ...preferences },
          { merge: true }
        );
        setUserPreferences(prev => ({ ...prev, ...preferences }));
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    user,
    userPreferences,
    loading,
    error,
    register,
    login,
    logout,
    updateUserPreferences
  };
};
