/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import useAxios from "./service/useAxios";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Employee from "./pages/Employee";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import Activity from "./components/Activity";
import Score from "./components/Score";
import Progress from "./components/Progress";
import DevSkill from "./components/Devskill";
import Teams from "./components/Teams";
import TopEmployees from "./components/TopEmployees";
import TopSkills from "./components/TopSkills";
import UpcomingCourse from "./components/UpcomingCourse";
import { setData } from "./features/dataSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { axiosPublic } = useAxios();
  const getData = async () => {
    try {
      const fetcedData = await axiosPublic();

      dispatch(setData(fetcedData.data.data));
    } catch (error) {
      console.log("Data fetched error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Activity />} />
          <Route path="activity" element={<Activity />} />
          <Route path="score" element={<Score />} />
          <Route path="progress" element={<Progress />} />
          <Route path="devskill" element={<DevSkill />} />
          <Route path="teams" element={<Teams />} />
          <Route path="topemployee" element={<TopEmployees />} />
          <Route path="topskill" element={<TopSkills />} />
          <Route path="upcoming" element={<UpcomingCourse />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
