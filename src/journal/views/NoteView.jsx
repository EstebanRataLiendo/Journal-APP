import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SaveOutlined } from "@mui/icons-material"

import { Button, Grid2, TextField, Typography } from "@mui/material"

import { useForm } from "../../hooks/useForm"
import { ImageGallery } from "../components"
import { setActiveNote } from "../../store/journalStore/journalSlice"

export const NoteView = () => {

    const dispatch= useDispatch()

    const { active:note } = useSelector(state => state.journal)

    const { body, title, date, onInputChange, formState} = useForm( note)

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

  return (
    <Grid2 
    className='animate__animated animate__fadeIn animate__faster'
    
    container direction='row' justifyContent='space-between' alignItems='center' sx= {{mb: 1}} >
        <Grid2 item='true'>
            <Typography fontSize= {39} fontWeight='light'> {dateString} </Typography>
        </Grid2>
        <Grid2 item='true'>
            <Button color="primary" sx={{ padding: 2}} >
                <SaveOutlined sx= {{ fonstSize: 30, mr:1 }} />
                Guardar
            </Button>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un Título"
                label="Title"
                sx= {{ border:'none', mb: 1}}
                name= 'title'
                value= { title }
                onChange={ onInputChange }
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Qué pasó hoy?"
                label="Título"
                minRows={ 5 }
                name= 'body'
                value= { body }
                onChange={ onInputChange }
            />
        </Grid2>

        <ImageGallery />

    </Grid2>
  )
}
