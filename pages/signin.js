import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Cookies, useCookies } from "react-cookie";
import Router from "next/router";

const cookies = new Cookies();

const Signin = ({ apiUrl }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (cookies.get("token")) {
      setToken(cookies.get("token"));
    }

    console.log(token);
  }, [token]);

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
        body: JSON.stringify({ email: email, password: password })
      });

      if (response.ok) {
        const token = await response.text();

        // Save token in cookie / local storage and state
        cookies.set("token", token);
        setToken(token);
        Router.push("/");
      } else {
        console.log(response);
        console.log("Login failed.");
        Router.push("/signin");
      }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
      throw new Error(error);
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <p>This is where you log in.</p>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />
        <input type="submit" value="Log me in" />
      </form>
    </div>
  );
};

Signin.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const apiUrl = process.browser
    ? `${protocol}://${window.location.host}/api/user/login`
    : `${protocol}://${req.headers.host}/api/user/login`;

  return { apiUrl };
};

export default Signin;
