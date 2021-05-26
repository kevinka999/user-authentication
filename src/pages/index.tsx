import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import axios, { AxiosRequestConfig } from 'axios';
import cookie from 'cookie';

import { UserContext, UserData } from '../contexts/UserContext';
import { Main } from '../components/';

export const getServerSideProps: GetServerSideProps = async ({req}) => {
	const config : AxiosRequestConfig = { 
		headers: {
			cookie: cookie.serialize('authToken', req.cookies.authToken)
		}
	}

	let userData;

	await axios.get('http://localhost:3000/api/user', config)
		.then(({data}) => userData = data)
		.catch((response) => console.log(response));
	
	if (userData) {
		return { props: userData }
	}
	else {
		return {
			redirect: {
				permanent: false,
				destination: '/authentication',
			}
		}
	}
}

export default function Index(props: UserData) {
	const { updateUserInformation } = useContext(UserContext);
	
	useEffect(() => {
		updateUserInformation(props.name, props.email);
	}, [props]);

	return <Main />
}
