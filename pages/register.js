import { useState } from "react";
import fetch from "isomorphic-unfetch";

const Register = ({ apiUrl }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // console.log(response);
        setIsSuccess(!isSuccess);
        setEmail("");
        setPassword("");
      } else {
        console.log(response);
        console.log("Registration failed.");
      }
    } catch (error) {
      console.error("There is an error!");
      throw new Error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <p>This is the register page.</p>

      {isSuccess && <p>Congratulations! You account has been created.</p>}

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

Register.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const apiUrl = process.browser
    ? `${protocol}://${window.location.host}/api/user/register`
    : `${protocol}://${req.headers.host}/api/user/register`;

  return { apiUrl };
};

export default Register;
