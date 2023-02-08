import { AppBar,Toolbar,Typography } from "@mui/material";


const NavBar = () => {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">My App</Typography>
            <Typography style={{ marginLeft: "auto" }}>John Doe</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  
  export default NavBar;