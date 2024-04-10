import { useContext, createContext, useEffect, useState } from 'react';
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '@/config/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { findUserById } from '@/services/user';

interface IUser {
  error: string;
  currentUser?: {} | null; // Use the appropriate type for currentUser
  signUp: (email: string, password: string, fullname: string, role: string) => void; // Define the signUp function signature
}

const userContext = createContext<IUser | null>(null);

export const useAuth = () => {
  return useContext(userContext);
};

const AuthContext = ({ children }: any) => {
  const [error, setError] = useState('');
  const [currentUser, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        console.log('logout');
      }
    });
  }, [currentUser]);
  const signUp = async (email: string, password: string, fullname: string, role: string) => {
    setError('');
    createUserWithEmailAndPassword(auth, email, password)
      .then(async result => {
        try {
          const docRef = await addDoc(collection(db, 'users'), {
            fullname,
            email,
            role,
            userId: `${result.user.uid}`
          });
          // const ref = doc(db, 'userCredentials', result.user.uid);
          // const docRef = await setDoc(ref, { fullname });
          console.log('Document written with ID: ', docRef.id);
          return result.user.uid;
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          setInterval(() => {
            setError('');
          }, 5000);
          setError('email already in use try another email');
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            setError('');
          }, 5000);
          setError('Password Must be 6 charecter');
        } else {
          setError(err.message);
        }
      });
  };
  const value = {
    signUp,
    error,
    currentUser
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default AuthContext;
