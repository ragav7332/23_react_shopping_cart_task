import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Navbar({cart}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <div id="navbar">
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <InputLabel id="demo-simple-select-label">Shop</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem>All Products</MenuItem>
            <MenuItem>Popular Items</MenuItem>
            <MenuItem>New Arrivals</MenuItem>
          </Select>
        </div>
        <div>
        <Button style={{color: "white"}}>
          <ShoppingCartIcon />
          Cart ({cart})</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}