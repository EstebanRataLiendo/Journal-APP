import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid2 container direction='row' justifyContent='space-between' alignItems='center' sx= {{mb: 1}} >
        <Grid2 item='true'>
            <Typography fontSize= {39} fontWeight='light'> 21 de octubre, 2024 </Typography>
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
                label="Título"
                sx= {{ border:'none', mb: 1}}
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Qué pasó hoy?"
                label="Título"
                minRows={ 5 }
            />
        </Grid2>

        <ImageGallery />

    </Grid2>
  )
}
