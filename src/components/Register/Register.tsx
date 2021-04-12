import { Card, CardContent, CardActions, Typography, TextField, Button } from '@material-ui/core'

export default function Register() {
    return(
        <Card>
            <CardContent>
                <Typography variant="h4">Sign-up</Typography>

                <TextField id="standard-basic" margin="normal" fullWidth label="Full name" />
                <TextField id="standard-basic" margin="normal" fullWidth label="E-mail" />
                <TextField id="standard-basic" margin="normal" fullWidth type="password" label="Password" />
                <TextField id="standard-basic" margin="normal" fullWidth type="password" label="Confirm your password" />
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary" size="small">Sign-up</Button>
                <Button variant="outlined" color="secondary" size="small">Back</Button>
            </CardActions>
        </Card>
    );
}