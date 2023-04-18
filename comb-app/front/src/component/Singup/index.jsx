import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import PasswordStrengthBar from 'react-password-strength-bar';

const Signup = () => {
	const [data, setData] = useState({
		userName:"",
		secret: "",
		email: "",
		firstName: "",
		lastName: "",
		
		
	});
	//
	// var data = '{
	// 	"username": "bob_baker",
	// 	"secret": "secret-123-jBj02",
	// 	"email": "b_baker@mail.com",
	// 	"first_name": "Bob",
	// 	"last_name": "Baker",
	// 	"custom_json": {"fav_game": "Candy Crush", "high_score": 2002}
	// }';
	
	
	
	// axios(config)
	// .then(function (response) {
	// 	console.log(JSON.stringify(response.data));
	// })
	// .catch(function (error) {
	// 	console.log(error);
	// });
	// //
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5001/api/users";
			const { data: res } = await axios.post(url, data);
			console.log(data+"iii");
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
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="User Name"
							name="userName"
							onChange={handleChange}
							value={data.userName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
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
							type="secret"
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
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
