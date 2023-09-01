import React, { useState, useEffect } from "react";
import getUsers from "../Helpers/getUsers";
import useMainContext from "../Hooks/useMainContext";
import getRooms from "../Helpers/getRooms";
import Redirect from "../Helpers/Redirect";
import { useNavigate } from "react-router-dom";
import ShowSlots from "../components/ShowSlots";
function GetMyRooms() {
  const navigate = useNavigate();
  let { User } = useMainContext();
  let [CurrUser, SetCurrUser] = useState(getUsers()[User]);
  let [SelectRoom, setSelectRoom] = useState(-1);
  let [ParamsToEdit, setParamsToEdit] = useState([]);

  function handleDeleteSlot(RoomId, TimeSlot) {
    let Rooms = getRooms();
    for (let Idx in Rooms) {
      if (Rooms[Idx].id == RoomId) {
        delete Rooms[Idx].ReservedTimes[String(TimeSlot)];
        break;
      }
    }
    let Users = getUsers();
    for (let Idx in Users[User].ReservedRooms) {
      console.log(Users[User].ReservedRooms[Idx]);
      if (
        Users[User].ReservedRooms[Idx].roomId == RoomId &&
        String(TimeSlot) == String(TimeSlot)
      ) {
        Users[User].ReservedRooms.splice(Idx, 1);
        break;
      }
    }
    SetCurrUser(Users[User]);
    localStorage.setItem("users", JSON.stringify(Users));
    localStorage.setItem("rooms", JSON.stringify(Rooms));
    // console.log(Users);
    // console.log(Rooms);
  }

  function handleChangeTime(RoomId, TimeSlot) {
    handleDeleteSlot(RoomId, TimeSlot);
    setSelectRoom(RoomId);
  }

  return (
    CurrUser && (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">RoomId</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {CurrUser.ReservedRooms.map((Item, Idx) => {
              return (
                <tr key={Idx}>
                  <td>{Item.roomId}</td>
                  <td>{Item.SlotTime.split("_")[0]}</td>
                  <td>{Item.SlotTime.split("_")[1]}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() =>
                        handleChangeTime(Item.roomId, Item.SlotTime)
                      }
                    >
                      Change
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handleDeleteSlot(Item.roomId, Item.SlotTime)
                      }
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {SelectRoom != -1 && (
          <ShowSlots
            roomId={SelectRoom}
            HideRoom={setSelectRoom}
            ShowClose={false}
          />
        )}
      </div>
    )
  );
}

export default GetMyRooms;
