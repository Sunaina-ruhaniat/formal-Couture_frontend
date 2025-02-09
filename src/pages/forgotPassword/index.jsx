import { Box, Button, Input, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post('http://localhost:8000/api/auth/forgot-password', { email })
			.then((res) => {
				toast.success('Reset Password link has been sent to your email!!');
			})
			.catch((err) => {
				if (err.response.status === 404) {
					toast.error(err.response.data.message);
				}
			});
	};
	const handleInputChange = (e) => {
		const { value } = e.target;
		setEmail(value);
	};
	return (
		<Box
			style={{
				maxWidth: '400px',
				margin: 'auto',
				padding: '2rem 1rem 5rem',
			}}
		>
			<Typography
				variant="h5"
				gutterBottom
				color="#000"
				fontWeight="semibold"
				letterSpacing={1}
				mb={2}
				sx={{
					textTransform: 'uppercase',
					textAlign: 'left',
					width: '100%',
				}}
			>
				FORGOTTEN YOUR PASSWORD
			</Typography>
			<p
				style={{
					fontSize: '.8125rem',
					lineHeight: '1.125rem',
					margin: '13px 0',
				}}
			>
				Enter your email and we will send you a link to reset your password.
			</p>
			<form onSubmit={handleSubmit} style={{ width: '100%' }}>
				<TextField
					fullWidth
					margin="normal"
					label="E-mail"
					onChange={handleInputChange}
					sx={{
						input: { color: '#000' },
					}}
				></TextField>
				<Button
					fullWidth
					variant="contained"
					sx={{
						bgcolor: '#000',
						color: 'white',
						fontSize: '18px',
						textTransform: 'capitalize',
						mt: 2,
						'&:hover': { bgcolor: '#333' },
						borderRadius: '0px',
						height: 50,
					}}
					type="submit"
				>
					Send
				</Button>
			</form>
		</Box>
	);
};
export default ForgotPassword;
