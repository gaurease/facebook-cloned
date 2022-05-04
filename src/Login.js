import React from 'react'
import './Login.css'
import {auth,provider} from './firebase'
import Button from '@mui/material/Button'
import { useStateValue } from './StateProvider'
import { actionType } from './reducer'
function Login() {
    const [state,dispatch]=useStateValue()
    const signin=()=>{
        console.log('signing in....')
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result)
            dispatch(
                {
                    type:actionType.SET_USER,
                    user:result.user
                }
            )
        }).catch(error=>{alert(error.message)})
    }
  return (
    <div className='login'>
        <div className='login__logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"></img>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"></img>
        </div>
        <Button type="submit" onClick={signin}>Sign In</Button>
    </div>
  )
}

export default Login