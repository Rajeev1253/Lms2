import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import Card from "@mui/material/Card";
import * as React from "react";

import { Stack } from "@mui/material";

const AdminDashboard = () => {
  return (
    <>
      <TopBar />
      <Stack className="dashboardMain" flexDirection={"row"}>
        <Stack width={"15%"}>
          <SideBar />
        </Stack>

        <Stack
          flexGrow={"1"}
          bgcolor={"#F8FAFB"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              height: "96%",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Card>
        </Stack>
      </Stack>
    </>
  );
};

export default AdminDashboard;
