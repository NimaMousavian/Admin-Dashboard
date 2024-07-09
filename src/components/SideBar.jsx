import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReportIcon from "@mui/icons-material/Report";
// import { Link } from "@mui/material";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const sideBarItems1 = [
  { text: "Home", link: "/", icon: <HomeIcon /> },
  { text: "Analytics", link: "/analytics", icon: <TimelineIcon /> },
  { text: "Sales", link: "/sales", icon: <TrendingUpIcon /> },
];
const sideBarItems2 = [
  { text: "Users", link: "/users", icon: <PeopleAltIcon /> },
  { text: "New User", link: "/newuser", icon: <PersonAddAlt1Icon /> },
  { text: "Products", link: "/products", icon: <InventoryIcon /> },
  { text: "Transactions", link: "/transactions", icon: <AttachMoneyIcon /> },
  { text: "Reports", link: "/reports", icon: <BarChartIcon /> },
];
const sideBarItems3 = [
  { text: "Mail", link: "/mail", icon: <MailIcon /> },
  { text: "Feedback", link: "feedback", icon: <DynamicFeedIcon /> },
  { text: "Messages", link: "messages", icon: <DynamicFeedIcon /> },
];
const sideBarItems4 = [
  { text: "Manage", link: "/manage", icon: <ManageAccountsIcon /> },
  { text: "Report", link: "report", icon: <ReportIcon /> },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideBar({ open, setOpen, children }) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const newElement = React.cloneElement(children, {
    open,
    setOpen,
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarItems1.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link to={item.link} className="link">
                <ListItemButton>
                  <ListItemIcon style={{ color: "#7b3efb" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {sideBarItems2.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link to={item.link} className="link">
                <ListItemButton>
                  <ListItemIcon style={{ color: "#7b3efb" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {sideBarItems3.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link to={item.link} className="link">
                <ListItemButton>
                  <ListItemIcon style={{ color: "#7b3efb" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {sideBarItems4.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link to={item.link} className="link">
                <ListItemButton>
                  <ListItemIcon style={{ color: "#7b3efb" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>{newElement}</Main>
    </Box>
  );
}
