import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import AddRoom from "./AddRoom";
import Room from "./Room";

export default function App() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({});

  const addRoom = room => {
    setRooms([...rooms, room]);
  };

  const setRoom = room => {
    setSelectedRoom(room);
  };

  const addItemToRoom = (item, room) => {
    setRooms([
      ...rooms.map(r => {
        if (r === room) {
          if (
            (r.items.some(i => i.val === "Stereo") && item.val === "Stereo") ||
            (r.type !== "Bathroom" && item.val === "Boiler") ||
            r.items.length === 5
          ) {
            alert("ERROR");
          } else {
            r.items = [...r.items, item];
          }
        }
        return r;
      })
    ]);
  };

  const toggleItem = (item, room) => {
    setRooms([
      ...rooms.map(r => {
        if (r === room) {
          r.items = [
            ...r.items.map(i => {
              if (i === item) {
                i.bg = i.bg === "red" ? "green" : "red";
              }
              return i;
            })
          ];
        }
        return r;
      })
    ]);
  };

  return (
    <div className="App">
      <h2>Smart House</h2>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home rooms={rooms} setRoom={setRoom} />}
          ></Route>
          <Route
            exact
            path="/addroom"
            component={() => <AddRoom addRoom={addRoom} />}
          ></Route>
          <Route
            exact
            path="/room"
            component={() => (
              <Room
                room={selectedRoom}
                addItemToRoom={addItemToRoom}
                toggleItem={toggleItem}
              />
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
