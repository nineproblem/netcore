import "./register.css";

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
                    <input placeholder="User Name"  className="loginInput" />
                    <input placeholder="Password" type="email" className="loginInput" />
                    <input placeholder="Password Again"  className="loginInput" />
                    <button className="loginButton">SIGN UP</button>
                    <button className="loginRegisterButton">Login into your account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
