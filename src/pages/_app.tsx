import { Grid } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  return(
      <Grid container direction="column" justify="center" alignItems="center">
        <Component {...pageProps} />
      </Grid>
  ) 
} 

export default MyApp