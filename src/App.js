import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import RequireAuth from "./Helpers/RequireAuth";
import BrowseRooms from "./Pages/BrowseRooms";
import GetMyRooms from "./Pages/GetMyRooms";
function App() {
  // let Rooms = [
  //   {
  //     id: "1",
  //     room_name: "Room1",
  //     description: "room1 room1 room1 room1 room1 room1 room1 room1 ",
  //     ReservedTimes: {}, // mapping for each if its reserved or not datetime
  //   },
  //   {
  //     id: "2",
  //     room_name: "Room2",
  //     description: "room2 room2 room2 room2 room2 room2 room2 room2 ",
  //     ReservedTimes: {},
  //   },
  //   {
  //     id: "3",
  //     room_name: "Room3",
  //     description: "room3 room3 room3 room3 room3 room3 room3 room3 ",
  //     ReservedTimes: {},
  //   },
  //   {
  //     id: "4",
  //     room_name: "Room4",
  //     description: "room4 room4 room4 room4 room4 room4 room4 room4 ",
  //     ReservedTimes: {},
  //   },
  // ];
  // let Users = [
  //   {
  //     id: "1",
  //     f_name: "Ahmad",
  //     l_name: "Saleh",
  //     email: "ahmadmfsaleh@gmail.com",
  //     password: "Ahmad123",
  //     ReservedRooms: [], // contains id for reserved roomand time
  //   },
  //   {
  //     id: "2",
  //     f_name: "John",
  //     l_name: "ccc",
  //     email: "john@gmail.com",
  //     password: "john123",
  //     ReservedRooms: [], // contains id for reserved roomand time
  //   },
  // ];

  // localStorage.setItem("rooms", JSON.stringify(Rooms));
  // localStorage.setItem("users", JSON.stringify(Users));

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/BrowseRooms" element={<BrowseRooms />} />
          <Route path="/getMyRooms" element={<GetMyRooms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
