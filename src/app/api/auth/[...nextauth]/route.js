import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: "c814bb686057a64246cb",
      clientSecret: "4efe14d9a67a69970a4bbfcdcb70a70de97f994f",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
