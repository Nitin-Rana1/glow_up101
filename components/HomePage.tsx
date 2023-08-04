import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProfilePage from "./ProfilePage";
import TaskPage from "./TaskPage";

export default function HomePage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [tabno, setTabno] = useState(0);
  return (
    <main>
      <h2>HomePage</h2>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Task" onClick={() => setTabno(0)} />
            <Tab label="Profile" onClick={() => setTabno(1)} />
          </Tabs>
        </Box>
        {tabno == 0 && <TaskPage />}
        {tabno == 1 && <ProfilePage />}
      </Box>
    </main>
  );
}
