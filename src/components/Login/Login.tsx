import { useState, useContext } from 'react';
import { Card, CardContent, CardActions, Typography, TextField, Button } from '@material-ui/core'

import { UserContext } from '../../contexts/UserContext';
import { UserLoginData } from '../../contexts/UserContext';

interface LoginProps {
    changeToSignup: () => void;
}

export default function Login({changeToSignup}: LoginProps) {
    const { loginUser } = useContext(UserContext);

    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    const handleLogin = () => {
        if (userEmail && userPassword) {
            const userLoginInformation: UserLoginData = {
                email: userEmail, 
                password: userPassword
            };

            loginUser(userLoginInformation);
        }
        else {
            alert('Please provide user information to Log-in')
        }
    }

    return(
        <Card>
            <CardContent>
                <Typography variant="h4">Log-in</Typography>
                <TextField 
                    margin="normal" 
                    label="E-mail" 
                    fullWidth 
                    onChange={e => setUserEmail(e.target.value)} 
                />
                <TextField 
                    margin="normal" 
                    label="Password" 
                    type="password" 
                    fullWidth 
                    onChange={e => setUserPassword(e.target.value)}
                />
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="small" 
                    onClick={handleLogin}
                >
                    Log-in
                </Button>

                <Button  
                    color="default" 
                    size="small"
                    onClick={changeToSignup}
                >
                    Create a new account
                </Button>
            </CardActions>
        </Card>
    );
}