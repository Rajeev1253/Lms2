import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import Card from "@mui/material/Card";
import * as React from "react";
import { styled } from "@mui/material/styles";

import { Stack, TextField } from "@mui/material";

const AdminDashboard = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
          >
            
       
          </Card>
        </Stack>
      </Stack>
    </>
  );
};

export default AdminDashboard;
