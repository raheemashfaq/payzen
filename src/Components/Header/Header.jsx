import React from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import "./Header.css"; // Ensure this file has styles for hover effects

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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Payment Methods", path: "/payment-methods" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contact" },
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
        <NavLink
          key={index}
          to={item.path}
          className="menu-link"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "green" : "black",
            fontWeight: isActive ? "bold" : "normal",
            display: "block",
            padding: "10px 20px",
          })}
          onClick={handleMobileMenuClose}
        >
          <MenuItem>{item.name}</MenuItem>
        </NavLink>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: "#fff", padding: "10px 0" }}>
        <Toolbar>
          {/* Logo */}
          <Link to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <img
                src="/Assets/coin.png"
                alt="Logo"
                style={{ width: "40px", height: "40px" }}
              />
              <img
                src="/Assets/plogo.png"
                alt="logo"
                style={{ height: "30px" }}
              />
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="menu-link"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "green" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  padding: "10px 15px",
                  transition: "color 0.3s ease-in-out",
                })}
              >
                {item.name}
              </NavLink>
            ))}
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "black",
                marginLeft: 2,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Register Now
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "20px",
                color: "white",
                marginLeft: 2,
              }}
            >
              Sign In
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
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
