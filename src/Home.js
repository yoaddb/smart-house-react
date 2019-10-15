import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const onRoomClicked = r => {
    props.setRoom(r);
  };

  return (
    <div>
      {props.rooms.map(r => {
        return (
          <Link to="/room">
            <div
              className="room"
              onClick={() => onRoomClicked(r)}
              style={{ backgroundColor: r.bg }}
            >
              {r.name}
            </div>
          </Link>
        );
      })}
      <div className="addRoom">
        <Link to="/addroom">
          <button className="btn btn-primary">Add Room</button>
        </Link>
      </div>
    </div>
  );
}
