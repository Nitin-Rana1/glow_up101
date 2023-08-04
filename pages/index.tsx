import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import TipOfDay from "../components/TipOfDay";
import HomePage from "../components/HomePage";

export default function Home() {
  const [skipTip, setskipTip] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Glow Up 101</title>
        <meta name="description" content="Gamify Glow Up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {skipTip ? <HomePage /> : <TipOfDay skip={() => setskipTip(true)} />}
    </div>
  );
}
