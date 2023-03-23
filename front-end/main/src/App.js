import './App.css';
import styles from "./styles.module.css";

function App() {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location="http://localhost:3000";
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>UpesConnect</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
}

export default App;
