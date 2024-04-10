import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase.config';
import { findUserById } from '@/services/user';

export const authOptions = {
  pages: {
    signIn: '/auth/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || '',
          (credentials as any).password || ''
        );
        const userData = await findUserById(userCredential.user.uid);
        if (userCredential.user) {
          const user = { ...userCredential.user, role: userData[0]?.role, fullname: userData[0]?.fullname };

          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ user, token }: any) {
      if (user) {
        token.role = user.role;
        token.fullname = user.fullname;
        token.uid = user.uid;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.uid = token.uid;
        session.user.name = token.fullname;
        session.user.email = token.email;
        session.user.role = token.role;
      }

      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development'
};

export default NextAuth(authOptions);
