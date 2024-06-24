"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {" "}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SessionProvider>{children}</SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
};
export default Layout;
