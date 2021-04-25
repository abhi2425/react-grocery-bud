import React from "react";
import "./Item.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const Item = ({ itemName, deleteItem, editItem }) => {
  return (
    <article className="item">
      <p>{itemName}</p>
      <div className="icons">
        <i className="icons-- edit" onClick={editItem}>
          <FaEdit />
        </i>
        <i className="icons-- delete" onClick={deleteItem}>
          <FaTrash />
        </i>
      </div>
    </article>
  );
};

export default Item;
