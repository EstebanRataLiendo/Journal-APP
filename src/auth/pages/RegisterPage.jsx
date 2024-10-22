import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink  } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return(
    <AuthLayout title="Register">
      <form>
        <Grid2 container>
          <Grid2 size={{ sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              id="nombreCompleto"
              name="nombreCompleto"
              variant="outlined"

            />
          </Grid2>
          <Grid2 size={{ sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              placeholder="correo@google.com"
              type="email"
              variant="outlined"
            />
            </Grid2>
          <Grid2 size={{ sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              name="password"
              placeholder="password"
              type="password"
              variant="outlined"
            />
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <Button variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12}}>
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
