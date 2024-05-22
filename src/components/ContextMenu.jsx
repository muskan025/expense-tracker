/* eslint-disable react/prop-types */

const ContextMenu = ({
  menuPosition,
  rowId,
  setExpenses,
  expenses,
  setExpense,
  setMenuPosition,
  setEditingrowId
}) => {
  if (!menuPosition.left) return;

  function handleDelete() {
    setExpenses((prev) => prev.filter((expense) => expense.id !== rowId));
    setMenuPosition({});
  }

  function handleEdit() {
    setEditingrowId(rowId)
    const  {title,category,amount} = expenses.find((expense)=>expense.id===rowId)
    setExpense({title,category,amount})
    setMenuPosition({});
    }

  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div onClick={handleEdit}>Edit</div>
      <div onClick={handleDelete}>Delete</div>
    </div>
  );
};

export default ContextMenu;
