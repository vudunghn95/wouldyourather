import NavBar from "features/navbar/NavBar";
import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "features/home/Home";
import NewQuestion from "features/newquestion/NewQuestion";
import Login from "features/login/Login";
import Leader from "features/leader/Leader";
import PrivateOutlet from "components/PrivateOutlet";
import PollDetail from "features/polldetail/PollDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="App-Body">
          <Routes>
            <Route path="/add" element={<PrivateOutlet />}>
              <Route path="" element={<NewQuestion />} />
            </Route>
            <Route path="/leaderboard" element={<PrivateOutlet />}>
              <Route path="" element={<Leader />} />
            </Route>
            <Route path="/questions/:question_id" element={<PrivateOutlet />}>
              <Route path="" element={<PollDetail />} />
            </Route>
            <Route path="/" element={<PrivateOutlet />}>
              <Route path="" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
