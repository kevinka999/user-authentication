import React, { useState } from 'react';
import { GetServerSideProps } from 'next'
import { Login, Signup } from '../components';

export const getServerSideProps: GetServerSideProps = async ({req}) => {
	const userAuthToken = req.cookies.authToken
  
	if (userAuthToken) {
    return {
			redirect: {
				permanent: false,
				destination: '/',
			}
		}
	}

  return {props: {}}
}

export default function Authentication() {
  const [needSignup, setNeedSignup] = useState(false);

  return (
    <React.Fragment>
      {needSignup 
        ? <Signup changeToLogin={() => setNeedSignup(false)} />
        : <Login changeToSignup={() => setNeedSignup(true)} />
      }
    </React.Fragment>
  );
}
