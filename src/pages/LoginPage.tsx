import React, { useState } from 'react'

export const LoginPage: React.FC = () => {

	const [userID, setUserID] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const loginUser = () => {
		console.log(userID, password);
	}

  	return (
    <div>
		<h1>Provide your Login Info Here:</h1>
		<form action="">
			<div>
				<label>User ID</label>
				<input
					type="text"
					value={userID}
					onChange={(e) => setUserID(e.target.value)}
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