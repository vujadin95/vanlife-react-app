import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
const Login = () => {
  const message = useLoaderData();
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
      {message && <h2 className="red">{message}</h2>}
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
