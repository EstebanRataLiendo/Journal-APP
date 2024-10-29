import { Google } from "@mui/icons-material"
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink  } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"


const formData = {
    email: '',
    password:'',
    displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@') , 'El correo debe contener @'],
  password: [(value) => value.length >= 6 , 'La contraseña debe tener más de 6 caracteres'],
  displayName: [(value) => value.length >= 1 , 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector(state => state.auth)
  const ischeckingAuthentication = useMemo(() => status === 'checking', [status])

  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)

    if(!isFormValid) return
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return(
    <AuthLayout title="Register">
      <form 
      onSubmit={onSubmit} 
      className='animate__animated animate__fadeIn animate__faster'>
        <Grid2 container>
          <Grid2 size={{ sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth 
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error= {!!displayNameValid && formSubmitted}
              helperText={displayNameValid}

            />
          </Grid2>
          <Grid2 size={{ sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error= {!!emailValid && formSubmitted}
              helperText={emailValid}
            />
            </Grid2>
          <Grid2 size={{ sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error= {!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid2 xs={12}  display={!!errorMessage ? '':'none'}>
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid2>

            <Grid2 size={{ xs: 12}}>
              <Button 
                disabled= {ischeckingAuthentication}
                type='submit'  
                variant="contained" 
                fullWidth
              >
                Create Account
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="end" size={12}>
            <Typography sx={{mr: 1}}>Already have an account?</Typography>
            <Link color="inherit" component={RouterLink} to="/auth/login">
              Enter
            </Link>
          </Grid2>
        </Grid2>
      </form>

    </AuthLayout>
  )
}
