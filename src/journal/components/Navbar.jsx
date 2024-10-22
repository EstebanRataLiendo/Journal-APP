import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Grid2, IconButton, Stack, Toolbar, Typography } from "@mui/material"

export const Navbar = ({drawerWidth}) => {
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
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid2>       
        </Toolbar>
    </AppBar>
  )
}
