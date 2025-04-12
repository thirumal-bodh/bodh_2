import React,{  useEffect,useState } from "react";
import { FaUserCircle } from 'react-icons/fa';
import MyCourse from "../component/thumbslider";
import Sidebar from "../component/sidebar";
import { auth } from "../firebase";

function Home(){

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <div className="home">
        <div className="heading">
            <p style={{ margin: 0 }}>BODH</p>
            <div className="navbar">
                <input type="text" placeholder="Search..." className="search" />
                {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              style={{ width: 50, height: 50, borderRadius: '50%', cursor: 'pointer' }}
              onClick={toggleSidebar}
            />
          ) : (
            <FaUserCircle size={50} className="profile-icon" onClick={toggleSidebar} />
          )}
            </div>   
        </div>
        <p style={{margin:'10px',marginTop:'50px',fontSize:'40px',fontFamily:'Roboto',color:'rgb(32, 52, 64)'}}>My Courses</p>
        <MyCourse/>
        <hr style={{ alignSelf:'center',width:'98%', marginTop: '40px', marginBottom:'40px', borderTop: '2px solid rgba(32, 52, 64, 0.35)' }} />            
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
      </div>
            
  );
};

export default Home;
