import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  function handleSumbit(e) {
    e.preventDefault();
    console.log(loginUserData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <section className="login-container">
      <h1>Sign in to your account</h1>
      <form className="form-container" onSubmit={handleSumbit}>
        <input
          onChange={handleChange}
          value={loginUserData.email}
          name="email"
          placeholder="Email address"
          type="text"
        />
        <input
          onChange={handleChange}
          value={loginUserData.password}
          name="password"
          placeholder="Password"
          type="text"
        />
        <button>Sign In</button>
      </form>
      <p>
        Don’t have an account? <Link to={"/"}>Create one now</Link>
      </p>
    </section>
  );
};
export default Login;
