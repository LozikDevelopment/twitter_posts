import { HomeRounded, Twitter } from "@mui/icons-material"
import { SideBar, SideBarBox } from "../../styled"

export const Sidebar = () => {
  return (
    <SideBar>
      <Twitter/>

      <SideBarBox>
        <HomeRounded />

        <h3>Home</h3>
      </SideBarBox>
    </SideBar>
  );
};