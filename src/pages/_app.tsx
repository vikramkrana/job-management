import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

import Loader from "@/atoms/loader";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {isSSR ? (
        <Loader />
      ) : (
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
};

export default MyApp;
