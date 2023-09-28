import { useState, useEffect } from "react";
import { UserRegister } from "../API/Userregister";


export default function Register({ setToken }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    TabTitle("OneShop | Register");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== verifyPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const data = await UserRegister(email, username, password);
      setResult(data);

      const token = Object.values(result)[0];
      localStorage.setItem("token", JSON.stringify(token));
      setToken(token);

      console.table(result);
    } catch (error) {
      console.log(error);
      console.log({ username, password });
    }
    setUsername("");
    setPassword("");
    setVerifyPassword("");
    setEmail("");
  };

  return (
    <div className="Auth-container">
      <div className="auth-form">
        <form method="post" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label>
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            />
          </label>
          <label>
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              type="text"
              placeholder="Username"
              id="username"
              name="username"
            />
          </label>
          <label>
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </label>
          <label>
            Confirm Password
            <input
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              required
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </label>
          <button type="submit">Sign up</button>
          <p>Already have an account? </p> <a href="/login">Login</a>
        </form>
      </div>
    </div>
  );
}