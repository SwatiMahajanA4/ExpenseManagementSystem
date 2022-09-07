import React from "react";
import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseLogs from "./ExpenseLogs";

function MainPage() {
  const [allLogs, setAllLogs] = useState(
    JSON.parse(localStorage.getItem("newLog"))
  );
  const updateLogs = function () {
    setAllLogs(JSON.parse(localStorage.getItem("newLog")));
  };
  // const logged = localStorage.getItem("isLoggedIn");

  // if (!logged) {
  //   return <Navigate to="/" replace />;
  // } else {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="btn btn-outline-light custom-button nav-button"
          type="submit"
        >
          Log Out
        </button>
      </nav>
      <div className="mainpage-section-container">
        <section className="expense-input-section">
          <h2>Expense Inputs</h2>
          <ExpenseForm updateLogs={updateLogs} />
        </section>
        <section>
          <h2>Logs</h2>
          <ExpenseLogs allLogs={allLogs} />
        </section>
      </div>
    </>
  );
  // }
}

export default MainPage;
