import styles from "./styles.module.css";
import { PrettyChatWindow } from "react-chat-engine-pretty";

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
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<div style={{ height: "91vh", width: "99.9vw" }}>
				<PrettyChatWindow
					projectId='7a00d300-542c-4ee0-a768-a02dab5e2a12'
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