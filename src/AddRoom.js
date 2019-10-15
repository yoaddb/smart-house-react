import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRoom(props) {
  const [room, setRoom] = useState({
    name: "",
    type: "",
    bg: "",
    items: []
  });

  const onSelectChanged = el => {
    setRoom({
      name: room.name,
      type: el.target.value,
      bg: room.bg,
      items: room.items
    });
  };

  const onInputNameChanged = el => {
    setRoom({
      name: el.target.value,
      type: room.type,
      bg: room.bg,
      items: room.items
    });
  };

  const onInputBgChanged = el => {
    setRoom({
      name: room.name,
      type: room.type,
      bg: el.target.value,
      items: room.items
    });
  };

  const onCreateClicked = () => {
    if (room.name.length === 0 || room.type === "") {
      alert("ERROR");
      return;
    }
    props.addRoom(room);
  };

  return (
    <div>
      <select onChange={onSelectChanged}>
        <option selected disabled value="Choose a type">
          Choose a type
        </option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Kitchen">Kitchen</option>
      </select>
      <br />
      <input
        type="text"
        maxLength="5"
        onChange={onInputNameChanged}
        placeholder="Enter a name"
      />
      <br />
      <input
        type="text"
        onChange={onInputBgChanged}
        placeholder="Enter a color"
      />
      <br />
      <Link to="/">
        <button className="btn btn-primary" onClick={() => onCreateClicked()}>
          Create
        </button>
      </Link>
    </div>
  );
}
