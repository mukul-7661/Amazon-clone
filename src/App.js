import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //it is only going to run onces
    auth.onAuthStateChanged((authUser) => {
      console.log("the User is >>>>>>", authUser);
      if (authUser) {
        //The User just Logged In/Or the User was Logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/payment"
          element={
            <div>
              <Payment />
            </div>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <div>
              <Header /> <Login />
            </div>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <div>
              <Header /> <Checkout />
            </div>
          }
        ></Route>
        <Route
          path="/"
          element={
            <div>
              <Header /> <Home />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
