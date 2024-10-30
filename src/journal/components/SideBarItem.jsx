import { TurnedInNot } from "@mui/icons-material"
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journalStore/journalSlice"
import { useMemo } from "react"

export const SideBarItem = ({title= '', body, id, date, imageUrls = []}) => {

    const dispatch = useDispatch()

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

    const newTitle = useMemo (() => {
        return title.length > 17 ? title.substring(0,17)+ '...' : title;
    }, [title] )
  return (
    <ListItem disablePadding >
        <ListItemButton onClick={onClickNote}>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid2 container>
                <ListItemText primary={newTitle} />
                <ListItemText secundary={ body } />
            </Grid2>
        </ListItemButton>
    </ListItem> 
  )
}
