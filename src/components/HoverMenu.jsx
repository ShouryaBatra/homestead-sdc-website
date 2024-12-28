import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";

export default function HoverMenu({ parent, items = [], currentPathName }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  function isParentActive() {
    // if path name of current path name includes the parent.path, parent should be true
    return currentPathName?.includes(parent.path);
  }

  function isCurrentItemActive(path) {
    // if path name of current path name is the exact same as this item, path should be true
    return currentPathName === path;
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseEnter={handleMouseEnter}
        sx={{
          color: "black",
          fontWeight: isParentActive() ? "bold" : "normal",
        }}
      >
        {parent?.title} ↓
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          onMouseLeave: handleMouseLeave, // Close menu when mouse leaves it
        }}
      >
        {items.map(({ title, path }) => {
          const isActive = isCurrentItemActive(path);
          return (
            <MenuItem
              onClick={() => handleNavigation(path)}
              sx={{ fontWeight: isActive ? "bold" : "normal" }}
            >
              {title}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
