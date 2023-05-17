import styles from "./styles.module.css";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { Link } from "react-router-dom";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/";
	};
	const username = localStorage.getItem("username");
	const secret = localStorage.getItem("secret");
	// alert(secret);
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>connect</h1>
				<Link to={"/mail"}>
					<h1>Mail</h1>
				</Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<div style={{ height: "91vh", width: "99.9vw" }}>
				<PrettyChatWindow
					projectId='eb286613-1a01-48d0-8f1b-a8f07329b150'
					username={username}
        			secret={secret}
					style={{ height: "100vh" }}
				/>
				
			</div>
		</div>
	);
};

export default Main;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Main({email}) {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/fetch/${email}`);
//         setUser(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchUser();
//   }, [email]);

  

//   return (
//     <div>
//       <h1>User Details</h1>
//       <p>Username: {user.username}</p>
//       <p>Email: {user.email}</p>
//       <p>First Name: {user.first_name}</p>
//       <p>Last Name: {user.last_name}</p>
//       <p>Secret: {user.secret}</p>
//     </div>
//   );
// }

// export default Main;