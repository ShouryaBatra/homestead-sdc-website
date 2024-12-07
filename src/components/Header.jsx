import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import routesObj from "../constants/routes";
import colors from "../theme/colors";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const location = useLocation();

  const navItems = Object.values(routesObj);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Homestead Speech & Debate
      </Typography>
      <Divider />
      <List>
        {navItems?.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                backgroundColor:
                  location.pathname === item.path ? "#1976d2" : "transparent",
                color: location.pathname === item.path ? "#fff" : "inherit",
              }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const MobileHeader = () => {
    return (
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    );
  };

  const WebHeader = () => {
    return (
      <Box
        sx={{
          direction: "row",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          // backgroundColor: "red",
          // display: { xs: "none", sm: "inline" },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            color: "#000",
            // backgroundColor: "yellow",
            // flexGrow: 0,
            // flexShrink: 1,
            // display: { xs: "block", sm: "block" },
          }}
        >
          Homestead Speech & Debate
        </Typography>
        <Box
          sx={{
            display: "flex",
            // backgroundColor: "green",
            // flexGrow: 1,
            // display: { xs: "none", sm: "inline" }
          }}
        >
          {navItems.map((item) => (
            <Link to={`${item.path}`} key={item.path}>
              <Button
                sx={{
                  color: "#000",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                }}
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </Box>
      </Box>
    );
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: colors.darkenedRed }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "white" }}>
          {/* <MobileHeader /> */}
          <WebHeader />
        </Toolbar>
      </AppBar>
      {/* <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav> */}
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
