import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Grid2, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks"

export const Navbar = ({drawerWidth}) => {

    const dispatch= useDispatch()

    const onLogout = ()=>{
        dispatch( startLogout())
    }

  return (
    <AppBar
    
        position='fixed'
        sx={{
            width: { sm:`calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
        }}
    >
        <Toolbar >
            <IconButton
                color='inherit'
                edge= 'start'
                sx= {{ mr: 2, display: {sm: 'none'} }}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid2 container direction='row' alignItems='center' justify="space-between">
                <Typography variant='h6' noWrap component='div'  >JournalApp</Typography>

            </Grid2>
            <Grid2 sx={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                <IconButton
                    // style={{  right: '-80%'}}
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid2>       
        </Toolbar>
    </AppBar>
  )
}
