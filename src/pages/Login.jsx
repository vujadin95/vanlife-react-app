import {
  Link,
  useLoaderData,
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../utils";
import { redirect } from "../../mutationOfRedirect";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const getForm = await request.formData();
  const email = getForm.get("email");
  const password = getForm.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectedTo") || "/host";
  try {
    // eslint-disable-next-line no-unused-vars
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(pathname);
  } catch (error) {
    return error.message;
  }
}

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <section className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {errorMessage && <h2 className="red">{errorMessage}</h2>}
      <Form className="form-container" method="post" replace>
        <input name="email" placeholder="Email address" type="text" />
        <input name="password" type={"password"} placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Loging In..." : "Log In"}
        </button>
      </Form>
      <p>
        Don’t have an account? <Link to={"/"}>Create one now</Link>
      </p>
    </section>
  );
};
export default Login;
