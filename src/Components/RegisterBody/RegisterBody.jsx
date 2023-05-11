import React, {useEffect ,useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate} from 'react-router-dom'
import Logo from './Assets/Img/Logo.png'
import axios from 'axios'

import "./Assets/styles.css"

const RegisterBody = () => {

  const navigate = useNavigate()
  const [formRegister, setFormRegister ] = useState({})

  const handleFormRegister = (event) => {
    const value = event.target.value
    setFormRegister({...formRegister,
    [event.target.name]:value
  })
}

const [formDataRegister, setFormDataRegister ] = useState([])

const hanldeRunRegister =  ()=>{
  setFormDataRegister(formRegister)
}

const [saveData, setSaveData ] = useState([])

   useEffect(()=> {
    const hanldeSubmitForm = async ()=>{
      const url = "http://localhost:3000/api/auth/register";
      const result = await axios.post(url,
        {
         "firstName":formDataRegister.firstName,
         "lastName":formDataRegister.lastName,
         "email":formDataRegister.email,
         "password":formDataRegister.password
      });
        setSaveData(result.data)
     }
     hanldeSubmitForm()
     const handleNavigate = () =>{
      if(saveData.length !== 0){
        navigate(`/Login`,{state:{formDataRegister}})}
     }
     handleNavigate()
     });

    return(
          <div className='BodyRegister'>
              <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                  sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  }}
                  >
                      <div className='LogoPF'>
                          <img src={Logo} alt="Logo People Face" />
                      </div>
                      <Typography component="h1" variant="h5">
                          Registrarse
                      </Typography>
                      <Box component="form" noValidate  sx={{ mt: 3 }}>
                          <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                    <TextField
                                    onChange={handleFormRegister}
                                    autoComplete="given-name"
                                    name="firstName"
                                    fullWidth
                                    label="Nombre"
                                    autoFocus
                                    />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <TextField
                                  onChange={handleFormRegister}
                                  name="lastName"
                                  fullWidth
                                  label="Apellido"
                                  autoComplete="family-name"
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  <TextField
                                  onChange={handleFormRegister}
                                  name="email"
                                  fullWidth
                                  label="Correo electronico"
                                  autoComplete="email"
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  <TextField
                                  onChange={handleFormRegister}
                                  name="password"
                                  fullWidth
                                  label="Constraseña"
                                  type="password"
                                  autoComplete="new-password"
                                  />
                              </Grid>
                          </Grid>
                          <Button
                          onClick={hanldeRunRegister}
                          fullWidth
                          variant="outlined"
                          sx={{ mt: 3, mb: 2 }}
                          >
                              Registrarse
                          </Button>
                          <Grid container justifyContent="flex-end">
                              <Grid item>
                                  <Link className='hyperlink' to="/Login" variant="body2">
                                      Ya estas registrado? Inicia sesion!!
                                  </Link>
                              </Grid>
                          </Grid>
                      </Box>
                  </Box>
              </Container>
          </div>
    )

}

export default RegisterBody






