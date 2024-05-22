import {useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import expenseData from '../expenseData';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {

  const [expense, setExpense] = useLocalStorage('expense',{
    title: "",
    category: "",
    amount: "",
  });

  const [expenses,setExpenses] = useLocalStorage('expenses',expenseData)
  const [editingrowId,setEditingrowId]=useLocalStorage('editingrowId','')
 

 
  return (
    <main>
      <h1>Track Your Expense</h1>
       <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingrowId={editingrowId}
        setEditingrowId={setEditingrowId}/>
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense}  setEditingrowId={setEditingrowId}/>
      </div>
    </main>
  );
};

export default App;
