import React from "react";
import Item from "./Item/Item";

const ItemContainer = ({ items, clearAll, deleteItem, editItem }) => {
  const item = items.map((item, itemIndex) => {
    return (
      <Item
        itemName={item.itemName}
        key={itemIndex}
        deleteItem={() => deleteItem(itemIndex)}
        editItem={() => editItem(itemIndex)}
      />
    );
  });
  return (
    <section>
      {item}
      <button onClick={clearAll}>clear items</button>
    </section>
  );
};

export default ItemContainer;
