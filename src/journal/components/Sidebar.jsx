import { TurnedIn, TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'


export const Sidebar = ({drawerWidth}) => {

    const {displayName} = useSelector(state =>state.auth)

  return (
    <Box 
    component='nav'
    sx= {{width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
    >
        <Drawer
            variant= 'permanent' //temporary si queremos ocultarlo
            open
            sx= {{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text =>(
                        <ListItem key={text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid2 container>
                                    <ListItemText primary={text} />
                                    <ListItemText secundary={'El profe usa Grid para el ejercicio, pero esta deprecated. Intente usar Grid2 que es el que sugiere la documentación pero el icono de logout no esta quedando al final de la barra como en el caso del profe'} />
                                </Grid2>
                            </ListItemButton>

                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
