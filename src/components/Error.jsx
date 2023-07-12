import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div style={{ padding: "20px" }}>
      <h1>{error.message}</h1>
    </div>
  );
};
export default Error;
