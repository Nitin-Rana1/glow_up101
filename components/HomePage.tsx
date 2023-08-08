import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProfilePage from "./ProfilePage";
import TaskPage from "./TaskPage";
import TipOfDay from "./TipOfDay";
import Image from "next/image";
export default function HomePage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [tabno, setTabno] = useState(0);
  return (
    <main>
      {/* <h2>🅶 🅻🅾🆆 🆄🅿 101</h2> */}
      <Box display="flex" justifyContent="left" alignItems="center">
        <div
          style={{
            width: "70vw",
            height: "16.12vw",
            position: "relative",
            marginTop: "2vh",
          }}
        >
          <Image
            src="/profilePics/head3.png"
            alt="profile pic"
            fill
            objectFit="fill"
          />
        </div>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Tips" onClick={() => setTabno(0)} />
            <Tab label="Task" onClick={() => setTabno(1)} />
            <Tab label="Profile" onClick={() => setTabno(2)} />
          </Tabs>
        </Box>
        {tabno == 0 && <TipOfDay />}
        {tabno == 1 && <TaskPage />}
        {tabno == 2 && <ProfilePage />}
      </Box>
    </main>
  );
}
