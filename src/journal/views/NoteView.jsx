import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from "../../hooks/useForm"
import { ImageGallery } from "../components"
import { setActiveNote } from "../../store/journalStore/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journalStore/thunksJournal"

export const NoteView = () => {

    const dispatch= useDispatch()

    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal)

    const { body, title, date, onInputChange, formState} = useForm( note)

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if(messageSaved.length>0){
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch( startSaveNote())
    }

    const onFileInputChange = ({target}) => {
        if( target.files === 0)return;
        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

  return (
    <Grid2 
    className='animate__animated animate__fadeIn animate__faster'
    
    container direction='row' 
    justifyContent='space-between' 
    alignItems='center' 
    sx= {{mb: 1}} >
        <Grid2 item='true'>
            <Typography fontSize= {39} fontWeight='light'> {dateString} </Typography>
        </Grid2>
        <Grid2 item='true'>
            <input 
                type="file" 
                multiple 
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{display:'none'}}

            />
            <IconButton 
                color='primary' 
                disabled={isSaving}
                onClick={()=>fileInputRef.current.click()}
            >
                <UploadOutlined/>
            </IconButton>
            <Button 
            disabled={ isSaving }
            onClick={ onSaveNote }
            color="primary" 
            sx={{ padding: 2}} 
            >
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
        <Grid2 container justifyContent='end'>
            <Button
                onClick={onDelete}
                sx={{mt: 2}}
                color='error'
                
            >
                <DeleteOutline />
                Borrar
            </Button>
        </Grid2>
        </Grid2>

        <ImageGallery 
            images={ note.imageUrls}
        />

    </Grid2>
  )
}

