import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export default function Header() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuItems = [
    "Home",
    "About",
    "Pricing",
    "Payment Methods",
    "FAQs",
    "Contact Us",
  ];

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          sx={{ cursor: "pointer", "&:hover": { color: "green" } }}
        >
          <p>{item}</p>
        </MenuItem>
      ))}
      <MenuItem>
        <Button
          variant="outlined"
          sx={{ borderRadius: "30px", padding: "12px 24px" }}
        >
          Register Now
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "30px", padding: "12px 24px", marginLeft: 1 }}
        >
          Sign In
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: "#fff" }}>
        <Toolbar>
          <img
            src="/Assets/coin.png"
            alt="Logo"
            style={{ width: "30px", height: "30px" }}
          />
          <img src="/Assets/plogo.png" alt="Logo" style={{ height: "30px" }} />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" }, color: "black" }}>
            {menuItems.map((item, index) => (
              <Toolbar
                key={index}
                sx={{
                  cursor: "pointer",
                  transition: "color 0.1s ease",
                  "&:hover": { color: "green" },
                }}
              >
                {item}
              </Toolbar>
            ))}
            <Toolbar>
              <Button
                variant="outlined"
                sx={{ borderRadius: "20px", color: "black" }}
              >
                Register Now
              </Button>
            </Toolbar>
            <Toolbar>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "20px", color: "white" }}
              >
                Sign In
              </Button>
            </Toolbar>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="gray"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
