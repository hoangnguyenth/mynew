import React from 'react'
import axios from 'axios'
import {Button, Input, Box} from '@mui/material'
import { useForm } from 'react-hook-form'
import {useValue} from '../Context'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const [dt, setDt] = useValue()
    const navigate = useNavigate();
      return (
        <form onSubmit={handleSubmit(async (data) => {
            const r = await axios.post("https://nodejs-fake-api.herokuapp.com/login",data)
            await setDt(r.data)
            navigate("/")
            })}>
            <Box sx={{display:"flex", flexDirection:"column"}}>
                <Input type='username' placeholder='Username' {...register('username', { required: true })} />
                {errors.username && <p>Username is required.</p>}

                <Input type='password' placeholder='Password' {...register('pass', { required: true })} />
                {errors.pass && <p>Password is required.</p>}

                <Button type="submit" variant='contained'>Login</Button>
            </Box>
        </form>
      );
}

export default Login
