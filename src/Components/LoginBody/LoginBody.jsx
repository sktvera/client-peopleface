
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from './Assets/Img/Logo.png'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

import "./Assets/styles.css"

const LoginBody = () => {

  const navigate = useNavigate()
  const [formLogin, setFormLogin ] = useState({})

  const handleFormLogin = (event) => {
    const value = event.target.value
    setFormLogin({...formLogin,
    [event.target.name]:value
  })
}
  const [formDataLogin, setFormDataLogin ] = useState([])
  const hanldeRunLogin =  ()=>{
    setFormDataLogin(formLogin)
  }
 

  const [saveData, setSaveData ] = useState([])
  useEffect(()=> {
   const hanldeSubmitForm = async ()=>{
     const url = "http://localhost:3000/api/auth/login";
     const result = await axios.post(url,
       {
        "email":formDataLogin.email,
        "password":formDataLogin.password
     });
       setSaveData(result.data)}
    hanldeSubmitForm()
    const handleNavigate = () =>{
     if(saveData.length !== 0){
       navigate(`/HomePage/?user=:${saveData.token}`,{replace:true,state:{logged:saveData.token ,userId:saveData.user}})}
      }
    handleNavigate()
    });


    return(
          <div>
          <Grid container component="main" sx={{ height: '100vh' }}>
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
                      <   img src={Logo} alt="Logo People Face" />
                      </div>
                      <Typography component="h1" variant="h5">
                          Iniciar sesión
                      </Typography>
                      <Box component="form"   sx={{ mt: 1 }}>
                          <TextField
                          margin="normal"
                          onChange={handleFormLogin}
                          fullWidth
                          id="email"
                          label="Correo electronico o nombre de usuario "
                          name="email"
                          autoComplete="email"
                          autoFocus
                          />
                          <TextField
                          margin="normal"
                          onChange={handleFormLogin}
                          fullWidth
                          name="password"
                          label="Contraseña"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          />
                          <Button 
                          onClick={hanldeRunLogin}
                          className='ButtonLogin'
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
          </div>
    )

}

export default LoginBody










