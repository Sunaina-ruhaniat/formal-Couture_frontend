import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
	const { token } = useParams();
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handlePasswordChange = useCallback((e) => {
		// validation for password
    e.preventDefault()
		if (password !== confirmPassword) {
			toast.error('password and confirm password are not same');
			return;
		}
		axios
			.post('http://localhost:8000/api/auth/reset-password/' + token, {
				password,
			})
			.then((res) => {
				toast.success('Password has been reset');
				navigate('/login');
			})
			.catch(() => {
				toast.error('Failed to update password please try again');
			});
	}, []);
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
				RESET YOUR PASSWORD
			</Typography>
			<p
				style={{
					fontSize: '.8125rem',
					lineHeight: '1.125rem',
					margin: '13px 0',
				}}
			>
				Enter your new password and confirm password.
			</p>
			<form onSubmit={handlePasswordChange} style={{ width: '100%' }}>
				<TextField
					fullWidth
					margin="normal"
					type="password"
					label="Password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					sx={{
						input: { color: '#000' },
					}}
				></TextField>
				<TextField
					fullWidth
					type="password"
					margin="normal"
					label="Confirm Password"
					onChange={(e) => setConfirmPassword(e.target.value)}
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
export default ResetPassword;
