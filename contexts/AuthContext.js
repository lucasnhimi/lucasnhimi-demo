import { useState, createContext, useEffect } from 'react';
import Router from 'next/router';
import firebase from '@/lib/firebase';
import { createUser } from '@/lib/db';
import cookie from 'js-cookie';

const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setSession = (session) => {
    if (session) {
      cookie.set('lucasnhimi-auth', session, {
        expires: 1,
      });
    } else {
      cookie.remove('lucasnhimi-auth');
    }
  };

  const handleUser = async (currentUser) => {
    if (currentUser) {
      const formatedUser = await formatUser(currentUser);
      const { token, ...userWithoutToken } = formatedUser;

      createUser(formatedUser.uid, userWithoutToken);
      setUser(formatedUser);
      setSession(true);

      return formatedUser;
    }
    setUser(false);
    setSession(false);
    return false;
  };

  const signinWithGitHub = async () => {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider());
      handleUser(response.user);
    } finally {
      setLoading(false);
    }
  };

  const signinWithGoogle = async () => {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      handleUser(response.user);
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      setLoading(true);
      Router.push('/');
      await firebase.auth().signOut();
      handleUser(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signinWithGitHub,
        signinWithGoogle,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
