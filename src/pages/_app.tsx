import { Grid } from '@material-ui/core';
import { UserProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }) {
  return(
    <UserProvider>
      <Grid container direction="column" justify="center" alignItems="center">
        <Component {...pageProps} />
      </Grid>
    </UserProvider>
  ) 
} 

export default MyApp