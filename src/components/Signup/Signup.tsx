import { useContext, useState } from 'react';
import { Card, CardContent, CardActions, Typography, TextField, Button } from '@material-ui/core'

import { UserContext } from '../../contexts/UserContext';
import { UserSignupData } from '../../contexts/UserContext';

interface SignupProps {
    changeToLogin: () => void;
}

export default function Signup({changeToLogin}: SignupProps) {
    const { signupUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if (name && email && password){
            const userSignupInformation : UserSignupData = {
                name: name,
                email: email,
                password: password
            }
    
            signupUser(userSignupInformation);
        }
        else {
            alert('Please provide user information to sign up')
        }

    }

    return(
        <Card>
            <CardContent>
                <Typography variant="h4">Sign-up</Typography>

                <TextField 
                    margin="normal" 
                    label="Full name" 
                    fullWidth
                    onChange={e => setName(e.target.value)}
                />
                <TextField 
                    margin="normal" 
                    label="E-mail" 
                    fullWidth
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField 
                    margin="normal" 
                    type="password" 
                    label="Password" 
                    fullWidth
                    onChange={e => setPassword(e.target.value)}
                />
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="small"
                    onClick={handleSignup}
                >
                    Sign-up
                </Button>

                <Button 
                    variant="contained" 
                    color="default" 
                    size="small"
                    onClick={changeToLogin}
                >
                    Back
                </Button>
            </CardActions>
        </Card>
    );
}