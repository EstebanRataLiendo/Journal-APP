import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink  } from "react-router-dom"
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from "../layout/AuthLayout"

import { useForm } from "../../hooks/useForm"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"


  const formData = {
      email: 'esteban.cba92@gmail.com',
      password:'123456'
  }
  

export const LoginPage = () => {

  const {status, errorMessage } = useSelector( state => state.auth)

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData)

  const isAuthenticating= useMemo(() => status === 'checking', [status] )

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword({email, password}) );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch( startGoogleSignIn() );

  }

  return(
    <AuthLayout title="Login">
      <form 
      className='animate__animated animate__fadeIn animate__faster'
      
      onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              placeholder="correo@google.com"
              type="email"
              variant="outlined"
              name="email"
              value={email}
              onChange={ onInputChange }
            />
            </Grid2>
          <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              name="password"
              placeholder="password"
              type="password"
              variant="outlined"
              value={password}
              onChange={ onInputChange }
            />
          </Grid2>

          <Grid2 
            container 
            display={!!errorMessage ? '':'none'} 
            sx={{mt:1}} 
          >
            <Grid2 xs={12}  >
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid2>
          </Grid2>


          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }} size={{ sm: 12, md: 12, lg: 12 }}>
            <Grid2 xs={ 12 } size={{ sm: 6, md: 6, lg: 6 }}>
              <Button disabled={ isAuthenticating } type="submit" variant="contained" fullWidth>
                Login
              </Button>
          </Grid2>

            <Grid2 xs={ 12 } size={{ sm: 6, md: 6, lg: 6 }}>
              <Button disabled={ isAuthenticating } variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="end" size={12}>
            <Link color="inherit" component={RouterLink} to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid2>
        </Grid2>
      </form>

    </AuthLayout>
  )
}
