import { AppProps, type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Layout from "./components/Layout";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={session}>
      {getLayout(
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
