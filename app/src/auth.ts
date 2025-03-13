import type { NextAuthConfig } from 'next-auth';
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from './lib/prisma';

const config = {
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);