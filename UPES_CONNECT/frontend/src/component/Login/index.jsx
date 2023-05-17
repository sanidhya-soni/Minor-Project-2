import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
//import Main from '../Main';
// import React, { createContext } from 'react';
// export const MyContext = createContext();
const Login = () => {
	const [data, setData] = useState({ email: "", secret: "", username: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	
	//alert(`hi${data.username} having ${data.secret}`);
	//const email = data.email;
	const handleSubmit = async (e) => {
		e.preventDefault();

		// <Main username={username} secret={secret} />
		try {
			const url = "http://13.233.38.130:5002/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			localStorage.setItem("username", data.username);
			localStorage.setItem("secret", data.secret);
			window.location = "/welcome";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="username"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="secret"
							onChange={handleChange}
							value={data.secret}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>

				</div>
			</div>
		</div>
	);
};

export default Login;