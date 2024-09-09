import React, { useState } from 'react'

export const LoginPage: React.FC = () => {

	const [email, setEmail] = useState<String | null>(null);
	const [password, setPassword] = useState<String | null>(null);

  	return (
    <div>LoginPage :D</div>
  	)
}

export default LoginPage