import React from "react";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ProtectedPage from "./ProtectedPage";

class App extends React.Component {
  isLoggedIn = localStorage.getItem("isLoggedIn");

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/mainPage"
            element={
              <ProtectedPage isLoggedIn={this.isLoggedIn}>
                <MainPage />
              </ProtectedPage>
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
