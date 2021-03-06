import React, { useState } from "react";
import "./Basket.css";
import Alert from "../Alert/Alert";
import ItemContainer from "../ItemsContainer/ItemContainer";
import { getItemsFromLocalStorage } from "../../utils/localStorage";

const Basket = () => {
  const [itemName, setItemName] = useState("");
  const [groceryItems, setGroceryItems] = useState(() => getItemsFromLocalStorage("groceryItems"));
  const [alert, setAlert] = useState({
    showAlert: false,
    msg: "",
    type: "",
  });
  const [editingMode, setEditingMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const submitHandler = (event) => {
    if (!(itemName.length < 3) && !editingMode) {
      setGroceryItems([...groceryItems, { itemName }])
      localStorage.setItem('groceryItems', JSON.stringify([...groceryItems, { itemName }]))
      setAlert({
        showAlert: true,
        type: "success",
        msg: "Item Added Successfully!",
      });
      setItemName("");
    } else if (!(itemName.length < 3) && editingMode) {
      const editedItem = groceryItems.map((item, index) => {
        if (index === editId) {
          return { itemName: itemName };
        }
        return item;
      });
      setGroceryItems(editedItem); //editedItem will be any array coz of map() method
      localStorage.setItem('groceryItems', JSON.stringify(editedItem))
      setAlert({
        showAlert: true,
        msg: "Value Changed!",
        type: "success",
      });
      setItemName("");
      setEditingMode(false);
    } else {
      setAlert({
        showAlert: true,
        type: "danger",
        msg: "Too Short Name!",
      });
    }
    event.preventDefault();
  };

  const clearAllItemHandler = () => {
    setGroceryItems([]);
    localStorage.clear()
    setAlert({
      showAlert: true,
      type: "danger",
      msg: "All Items Cleared!",
    });
  };

  const deleteItemHandler = (id) => {
    const updatedGroceryItems = groceryItems.filter((_, index) => index !== id);
    setGroceryItems(updatedGroceryItems);
    localStorage.setItem('groceryItems', JSON.stringify(updatedGroceryItems))
    setAlert({
      showAlert: true,
      type: "danger",
      msg: `${groceryItems[id].itemName} removed From List`,
    });
  };

  const editItemHandler = (id) => {
    setEditingMode(true);
    setAlert({
      showAlert: true,
      msg: "Editing Mode Enabled",
      type: "success",
    });
    groceryItems.map((item, itemIndex) => {
      if (id === itemIndex) {
        setItemName(item.itemName);
        setEditId(itemIndex);
      }
    });
  };

  const removeAlert = () => {
    setAlert({
      showAlert: "false",
    });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {alert.showAlert ? (
        <Alert
          message={alert.msg}
          className={alert.type}
          removeAlert={removeAlert}
        />
      ) : null}
      <form className="groceryForm" onSubmit={(e) => submitHandler(e)}>
        <input
          type="input"
          className="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="e.g. eggs"
        />
        <input
          type="submit"
          value={editingMode ? "Edit" : "Submit"}
          className="submit"
        ></input>
      </form>
      {groceryItems.length ? (
        <ItemContainer
          items={groceryItems}
          clearAll={clearAllItemHandler}
          deleteItem={deleteItemHandler}
          editItem={editItemHandler}
          editingMode={editingMode}
        />
      ) : null}
    </div>
  );
};

export default Basket;
