import styles from "./styles.module.css";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/";
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div style={{ height: "91vh", width: "99.9vw" }}>
				<PrettyChatWindow
					projectId='d32c7841-897d-4cf5-8a3b-671b1798d127'
					username='adam' // adam
					secret='pass123' // pass1234
					style={{ height: "100vh" }}
				/>
			</div>
		</div>
	);
};

export default Main;
