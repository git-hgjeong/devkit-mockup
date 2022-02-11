import {Link} from "react-router-dom";
import styles from "./Login.module.css";

function Login() {

  const goMain = () => {
    console.log("move to main.");
    window.location.href = '/devkit-mockup/main';
  };

  return (
    <div className={styles.form_container}>
      
      <form>
      <h3>login now</h3>
      <input type="email" name="email" required placeholder="enter your email"/>
      <input type="password" name="password" required placeholder="enter your password"/>
      <input type="button" name="submit" value="login now" className={styles.form_btn} onClick={goMain}/>
      <p>don't have an account? <a href="#">register now</a></p>
      </form>

    </div>
  );
  }
  
  export default Login;
  