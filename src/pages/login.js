import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setError("");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <div className="heading">
        <p style={{ margin: 0 }}>BODH</p>
      </div>

      <div className="box">
        <form className="form" onSubmit={handleLogin}>
          <p style={{ margin: "10px", fontSize: "40px" }}>Login</p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          {error && <p style={{ color: "red", margin: "10px" }}>{error}</p>}

          <p style={{ margin: "10px" }}>----- Or Login with -----</p>

          <div
            onClick={handleGoogleLogin}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid rgb(145, 147, 148)",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
              margin: "10px",
            }}
          >
            <FcGoogle size={30} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
