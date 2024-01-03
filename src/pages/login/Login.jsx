import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Net Core</h3>
                <span className="loginDesc">Hello everyone</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="email" className="loginInput" />
                    <input placeholder="Password"  className="loginInput" />
                    <button className="loginButton">LOGIN</button>
                    <span className="loginForget">Forget Password?</span>
                    <button className="loginRegisterButton">Create A New Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
