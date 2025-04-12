import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUsername(user.displayName || "Unknown User");
      setEmail(user.email || "No Email");
      setPhotoURL(user.photoURL || null);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="sidebar">
      <div className={`box ${isOpen ? 'open' : ''}`}>
        <div className="head">
          <button
            className="close-btn"
            onClick={toggleSidebar}
            style={{
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              color: 'rgb(32, 52, 64)',
              backgroundColor: 'rgb(221, 223, 224)'
            }}
          >
            <FaArrowLeft size={20} />
          </button>
          <p style={{ margin: '0' }}>Your Profile</p>
        </div>

        <div className="content">
          {photoURL ? (
            <img
              src={photoURL}
              alt="Profile"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 10,
              }}
              onClick={toggleSidebar}
            />
          ) : (
            <FaUserCircle
              size={80}
              className="profile-icon"
              onClick={toggleSidebar}
              style={{ color: 'rgb(32, 52, 64)', marginBottom: 10 }}
            />
          )}
          <p style={{ margin: '0', }}>{username}</p>
        </div>

        <hr
          style={{
            alignSelf: 'center',
            width: '98%',
            marginTop: '40px',
            marginBottom: '40px',
            borderTop: '2px solid rgba(32, 52, 64, 0.35)'
          }}
        />

        <div className="email">
            <p
              style={{
                margin: '0',
                fontSize: '20px',
                fontFamily: 'Roboto',
                color: 'rgb(32, 52, 64)',
                fontWeight: '350'
              }}
            >
            Email:
            </p>
            <p style={{
                margin: '0',
                fontSize: '20px',
                fontFamily: 'Roboto',
                color: 'rgb(32, 52, 64)',
                fontWeight: '350'
            }}>
            {email}
            </p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {isOpen && <div className="box-backdrop" onClick={toggleSidebar}></div>}
    </div>
  );
}

export default Sidebar;
