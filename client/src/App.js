import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }

    // Set initial theme based on the time of day
    updateThemeBasedOnTime();
  }, []);

  useEffect(() => {
    // Update theme every minute to handle midnight transition
    const intervalId = setInterval(updateThemeBasedOnTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  const updateThemeBasedOnTime = () => {
    const currentHour = new Date().getHours();

    // You can customize the time ranges and themes as needed
    if (currentHour >= 6 && currentHour < 18) {
      setTheme("light"); // Daytime theme
    } else {
      setTheme("dark"); // Nighttime theme
    }
  };

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;
