import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hader from "./componets/Hader";
import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask";
import Login from "./componets/Login";
import Footer from "./componets/Footer";
import About from "./componets/About";
import { useSelector } from "react-redux";


function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  const login = useSelector((state) => state.Islogin);
  return (
    <Router>
      <div className="container">
        <Hader
          title="Task Tracker"
          onAdd={() => setshowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {login ? showAddTask && <AddTask /> : showAddTask && <Login />}
                <Tasks />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;