import { Card, CardContent, CardActions, Typography, TextField, Button } from '@material-ui/core'

export default function Main() {
    return(
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom={true}>Hello User</Typography>
                <Typography variant="body1">Your data is complete safe here. So don't worry and enjoy.</Typography>

                <hr/>

                <Typography variant="caption">
                    This app was developed by <a href="https://github.com/kevinka999/">Kevin Katzer</a>.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="secondary" size="small">Log-off</Button>
            </CardActions>
        </Card>
    );
}