import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile with username
      await updateProfile(userCredential.user, {
        displayName: username
      });

      setError("");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      setError("");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <div className="heading">
        <p style={{ margin: 0 }}>BODH</p>
      </div>

      <div className="box">
        <form className="form" onSubmit={handleSignup}>
          <p style={{ margin: "10px", fontSize: "40px" }}>Signup</p>

          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Signup</button>

          {error && <p style={{ color: "red", margin: "10px" }}>{error}</p>}

          <p style={{ margin: "10px" }}>----- Or Signup with -----</p>

          <div
            onClick={handleGoogleSignup}
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

export default Signup;
