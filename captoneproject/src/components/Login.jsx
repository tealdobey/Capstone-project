import { useState } from "react";

import { userLogin } from "../API/Userlogin";


export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useNavigate();
  const handleLogin  = async (e) => {
    e.preventDefault();

  TabTitle("OneShop | Login");



    try {
      const data = await userLogin(username, password);
      setData(data);
      setLoading(false);

      const token = Object.values(data)[0];

      localStorage.setItem("handle_token", JSON.stringify(token));
      setToken(token);



      console.table(data);

    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };




  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  
  const root = () => {
    if (data) {
      location('/');

    }
  }



  return (
    <div className="Auth-container">
      <div className="auth-form">
        <form method="post" onSubmit={handleLogin }>
          <h2>Sign in</h2>
          <label>
            
            <input
              value={username}
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username *"
            />
          </label>
          <label>
            
            <input
              value={password}
              type="password"
              id="password"

              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              maxLength={8}
              minLength={6}
            />
          </label>
          <button disabled={loading} type="submit" onClick={() => root }> Login </button>
          <p> Dont have an account? </p> <button onClick={() => location('/Register')}> Sign Up</button>

        </form>
      </div>
    </div>
  );
}