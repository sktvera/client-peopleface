
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from './Assets/Img/Logo.png'


import "./Assets/styles.css"







  
  const theme = createTheme();
  
  


const LoginBody = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    return(
        <div>
           

           <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
        className='img'
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
                <div className='LogoPF'>
                <img src={Logo} alt="Logo People Face" />
                </div>
          
         
            <Typography component="h1" variant="h5">
            Iniciar sesión
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                
                fullWidth
                id="email"
                label="Correo electronico o nombre de usuario "
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button className='ButtonLogin'
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesión
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className='hyperlink' to="/RecoverAccount" variant="body2">
                    Olvido su contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link className='hyperlink' to="/Register" variant="body2">
                  <p>No estas registrado? Registrarse!!</p>
                  </Link>
                </Grid>
              </Grid>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

        </div>
    )

}

export default LoginBody










