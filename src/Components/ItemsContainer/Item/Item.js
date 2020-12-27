import React from "react";
import "./Item.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const Item = ({ itemName, deleteItem, editItem }) => {
  return (
    <article className="item">
      <p>{itemName}</p>
      <div className="icons">
        <button className="icons-- edit" onClick={editItem}>
          <FaEdit />
        </button>
        <button className="icons-- delete" onClick={deleteItem}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default Item;
