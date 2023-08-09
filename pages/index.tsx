import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import TipOfDay from "../components/TipOfDay";
import HomePage from "../components/HomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, deepPurple, deepOrange } from "@mui/material/colors";

// Define your custom golden colors
const goldenColors = {
  light: amber[400],
  main: amber[600],
  dark: amber[800],
};

// Create traditional light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: goldenColors,
    secondary: deepPurple,
    error: deepOrange,
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: goldenColors,
    secondary: deepPurple,
    error: deepOrange,
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between light and dark modes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className={styles.container}>
        <Head>
          <title>Glow Up 101</title>
          <meta name="description" content="Gamify Glow Up" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomePage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </ThemeProvider>
  );
}
