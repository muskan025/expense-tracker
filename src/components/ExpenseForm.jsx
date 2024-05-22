import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

/* eslint-disable react/prop-types */
const ExpenseForm = ({
  expense,
  setExpense,
  setExpenses,
  editingrowId,
  setEditingrowId,
}) => {
  const [errors, setErrors] = useState({});

  const options = ["Grocery", "Clothes", "Education", "Bill"];

  function handleChange(e) {
    const { name, value } = e.target;

    setExpense((prev) => ({ ...prev, [name]: value }));
    setErrors({}); //empty errors[] when user starts filling info after submitting empty form
  }

  const validateConfig = {
    title: [
      { required: true, message: "Please enter a title" },
      { minLength: 2, message: "Title should be atleast 2 characters long" },
    ],
    category: [{ required: true, message: "Please enter a category" }],
    amount: [
      { required: true, message: "Please enter an amount" },
      { pattern: /^[1-9]\d*(\.\d+)?$/, message: "Please enter a valid amount" },
    ],
  };

  function validate(formData) {
    let errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validateConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value) || value<1 ) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    if (editingrowId) {
      setExpenses((prev) =>
        prev.map((prevExpense) => {
          if (prevExpense.id === editingrowId) {
            return { ...expense, id: editingrowId };
          }
          return prevExpense;
        })
      );
      setEditingrowId("");
    } else {
      setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    }

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        error={errors.title}
        onChange={handleChange}
      />

      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        error={errors.category}
        onChange={handleChange}
        options={options}
        defaultOption="Select Category"
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        error={errors.amount}
        onChange={handleChange}
      />
      <button className="add-btn">{editingrowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpenseForm;
