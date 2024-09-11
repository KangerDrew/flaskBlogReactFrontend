import React, { useState } from 'react'
import httpClient from '../httpClient';


export const LoginPage: React.FC = () => {

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const loginUser = async () => {
		console.log(username, password);

		const formData = new URLSearchParams();
		formData.append("username", username);
		formData.append("password", password);

		try{
			const resp = await httpClient.post("http://127.0.0.1:5000/login", formData, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			});

			console.log(resp.data);
			window.location.href = "/"

		} catch (error) {
			alert("Failed to Login!!!")
			console.error("Failed to login:", error);
		}
			
	}

  	return (
    <div>
		<h1>Provide your Login Info Here:</h1>
		<form action="">
			<div>
				<label>User ID</label>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
		<button type="button" onClick={() => loginUser()}>Submit</button>
		</form>
	</div>
  	)
}

export default LoginPage