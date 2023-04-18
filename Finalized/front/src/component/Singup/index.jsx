import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import PasswordStrengthBar from 'react-password-strength-bar';

const AuthPage = (props) => {

	const [data, setData] = useState({
		userName:"",
		secret: "",
		email: "",
		firstName: "",
		lastName: "",
		
		
	});

	const [username, setUsername] = useState();
	const [secret, setSecret] = useState();
	const [email, setEmail] = useState();
	const [first_name, setFirstName] = useState();
	const [last_name, setLastName] = useState();
  
	const onSignup = (e) => {
	  e.preventDefault();
	  axios
		.post("http://localhost:3001/signup", {
		  username,
		  secret,
		  email,
		  first_name,
		  last_name,
		})
		.then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
		.catch((e) => console.log(JSON.stringify(e.response.data)));
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
					<form className={styles.form_container} onSubmit={AuthPage}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="User Name"
							name="userName"
							onChange={(e) => setUsername(e.target.value)}
							value={data.userName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={(e) => setFirstName(e.target.value)}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={(e) => setLastName(e.target.value)}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							value={data.email}
							required
							className={styles.input}
						/>

						<input
							type="secret"
							placeholder="Password"
							name="secret"
							onChange={(e) => setSecret(e.target.value)}
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
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
