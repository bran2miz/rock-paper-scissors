import { AppBar, Toolbar, Typography } from "@mui/material"


const Header = () => {
  return (
    <AppBar color="success" position="static" style={{padding: "8px"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rock 🪨 Paper 📝 Scissors ✂️
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header