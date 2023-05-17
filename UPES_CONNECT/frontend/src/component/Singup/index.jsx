import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import PasswordStrengthBar from 'react-password-strength-bar';
const Signup = () => {
	const [data, setData] = useState({
		username:"",
		secret: "",
		email: "",
		first_name: "",
		last_name: "",
	});
	
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(data);
		
		var config = {
			method: 'post',
			url: 'https://api.chatengine.io/users/',
			headers: {
				'PRIVATE-KEY': 'c17ccb89-b186-4a3d-9901-b380c69013e4'
			},
			data : data
		};
		
		axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});

		//
		alert(`Submitted form with name ${data.username} and email ${data.email}`);
		try {
			const url = "http://13.233.38.130:5001/api/users";
			const { data: res } = await axios.post(url, data);
			
			navigate("/login");
			

			
			console.log(res.message);
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
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="User Name"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="First Name"
							name="first_name"
							onChange={handleChange}
							value={data.first_name}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="last_name"
							onChange={handleChange}
							value={data.last_name}
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

						<PasswordStrengthBar
							password={data.secret}
							minLength={5}
							onChangeScore={(score, feedback) => {
								console.log(score, feedback);
							}}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
