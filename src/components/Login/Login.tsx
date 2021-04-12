import { Card, CardContent, CardActions, Typography, TextField, Button } from '@material-ui/core'

export default function Login() {
    return(
        <Card>
            <CardContent>
                <Typography variant="h4">Log-in</Typography>

                <TextField id="standard-basic" margin="normal" fullWidth label="E-mail" />
                <TextField id="standard-basic" margin="normal" fullWidth type="password" label="Password" />
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary" size="small">Log-in</Button>
                <Button variant="outlined" color="secondary" size="small">Sign-up</Button>
            </CardActions>
        </Card>
    );
}