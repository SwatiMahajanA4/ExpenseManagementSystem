import React, { useEffect } from "react";
import { useState } from "react";

function ExpenseForm(props) {
  const [categoryList, setCategoryList] = useState(["food", "fuel", "rent"]);
  const logs = JSON.parse(localStorage.getItem("newLog"));

  let [
    customCategory,
    customCategoryRow,
    expenseDate,
    expenseCategory,
    expenseAmount,
    categorySelector,
  ] = ["", "", "", "", "", ""];

  useEffect(() => {
    customCategory = document.getElementById("expense-custom-category");
    customCategoryRow = document.querySelector(".custom-category-row");
    expenseDate = document.getElementById("expense-date");
    expenseCategory = document.getElementById("expense-category");
    expenseAmount = document.getElementById("expense-amount");
    categorySelector = document.querySelector(".category-selector");
    customCategory.value = "";
  }, [categoryList]);

  const handleExpenseOption = function (event) {
    // console.log(document.querySelector(".custom-category-input"));
    if (event.target.value === "custom") {
      categorySelector.classList.add("custom-hidden");
      customCategoryRow.classList.remove("custom-hidden");
      return;
    }
    customCategoryRow?.classList.add("custom-hidden");
    categorySelector.classList.remove("custom-hidden");
    // console.log(event.target.value);
  };

  const handleCustomCategory = function (event) {
    event.preventDefault();
    if (customCategory.value === "") return;
    console.log(customCategory.value);
    // Add Custom Category to the Categories List
    setCategoryList((prevList) => [
      ...prevList,
      customCategory.value.toLowerCase(),
    ]);
    // Show the Category Selector back as it was
    customCategoryRow.classList.add("custom-hidden");
    categorySelector.classList.remove("custom-hidden");
    setTimeout(() => {
      expenseCategory.selectedIndex = `${categoryList.length + 2}`;
    }, 0);
    console.log(categoryList.length + 2);
    // return ();
  };

  console.log("after adding outside func", categoryList);

  const submitExpense = function (event) {
    event.preventDefault();
    if (
      expenseDate.value === "" ||
      expenseCategory.value === ("default" || "") ||
      expenseAmount.value === ""
    ) {
      alert("Enter valid data..");
      return;
    }
    logs.unshift({
      date: expenseDate.value,
      category: expenseCategory.value,
      amount: expenseAmount.value,
    });

    localStorage.setItem("newLog", JSON.stringify(logs));
    props.updateLogs();
    // console.log("local", JSON.parse(localStorage.getItem("newLog")));
    // console.log(event.target);
    console.log(expenseDate.value);
    console.log(expenseCategory.value);
    console.log(expenseAmount.value);
  };

  return (
    <form action="submit">
      <table className="expense-form-table">
        <tbody>
          <tr>
            <td>
              <label htmlFor="expense-date">Date:</label>
            </td>
            <td>
              <input type="date" id="expense-date" />
            </td>
          </tr>
          <tr className="category-selector">
            <td>
              <label htmlFor="expense-category">Category:</label>
            </td>
            <td>
              <select
                name="expense-category"
                defaultValue={"default"}
                id="expense-category"
                onChange={handleExpenseOption}
              >
                <option value="default" hidden disabled>
                  Select an Option
                </option>
                <option value="custom">Custom</option>
                {categoryList.map((element) => (
                  <option value={element}>
                    {element[0].toUpperCase() + element.slice(1)}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button className=" btn nouse-hidden">Add</button>
            </td>
          </tr>
          <tr className="custom-category-row custom-hidden">
            <td>
              <label htmlFor="expense-category">Category:</label>
            </td>
            <td>
              <input type="text" id="expense-custom-category" />
            </td>
            <td>
              <button
                className=" btn btn-outline-light custom-button custom-category-button"
                onClick={handleCustomCategory}
              >
                Add
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="expense-amount">Amount:</label>
            </td>
            <td>
              <input type="text" id="expense-amount" />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="btn btn-outline-light custom-button submit-button"
        onClick={submitExpense}
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
