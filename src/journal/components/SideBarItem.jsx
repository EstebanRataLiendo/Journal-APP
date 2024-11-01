import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { setActiveNote } from "../../store/journalStore/journalSlice"

export const SideBarItem = ({title= '', body, id, date, imageUrls = []}) => {

    const dispatch = useDispatch()

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

    const newTitle = useMemo (() => {
        return title.length > 17 ? title.substring(0,10)+ '...' : title;
    }, [title] )
  return (
    <ListItem disablePadding >
        <ListItemButton onClick={onClickNote}>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid2 container padding={1}>
                <ListItemText primary={newTitle} />
            </Grid2>
            <Grid2>
                <ListItemText secondary={ body } />
            </Grid2>
        </ListItemButton>
    </ListItem> 
  )
}
