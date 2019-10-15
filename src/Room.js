import React, { useState } from "react";

export default function Room(props) {
  const room = props.room;

  const [isExtraPageHidden, setExtraPageHidden] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ val: "", bg: "red" });

  const onShowItemsClicked = () => {
    setExtraPageHidden(true);
  };

  const onSelectChanged = el => {
    setSelectedItem({ val: el.target.value, bg: "red" });
  };

  const onAddItemClicked = () => {
    if (selectedItem.val === "") {
      alert("ERROR");
      setExtraPageHidden(false);
      return;
    }
    props.addItemToRoom(selectedItem, room);
  };

  const toggleItemOnOff = i => {
    props.toggleItem(i, room);
  };

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div>Name of Room: {room.name}</div>
          <div>Type of Room: {room.type}</div>
        </div>
        <div className="col-6">
          {room.items.map(i => {
            return (
              <div
                className="item"
                onClick={() => toggleItemOnOff(i)}
                style={{ backgroundColor: i.bg }}
              >
                {i.val}
              </div>
            );
          })}
        </div>
      </div>
      {!isExtraPageHidden ? (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => onShowItemsClicked()}
          >
            Show Items
          </button>
        </div>
      ) : (
        <div>
          <select onChange={onSelectChanged}>
            <option selected disabled value="Choose an item">
              Choose an item
            </option>
            <option value="Air Conditioner">Air Conditioner</option>
            <option value="Boiler">Boiler</option>
            <option value="Stereo">Stereo</option>
            <option value="Lamp">Lamp</option>
          </select>
          <br />
          <button
            className="btn btn-primary"
            onClick={() => onAddItemClicked()}
          >
            Add Item
          </button>
        </div>
      )}
    </div>
  );
}
