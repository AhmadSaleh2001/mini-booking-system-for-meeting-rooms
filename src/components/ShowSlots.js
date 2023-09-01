import React, { useEffect, useState, useContext } from "react";
import useMainContext from "../Hooks/useMainContext";

import Redirect from "../Helpers/Redirect";
import { useNavigate } from "react-router-dom";
import getRooms from "../Helpers/getRooms";
import getUsers from "../Helpers/getUsers";

// show available slots upto 7 days after current day
/* for each room, available times to reserve was from 8 to 19 in 24 format */

function ShowSlots({ roomId, HideRoom, ShowClose }) {
  const navigate = useNavigate();
  let { User } = useMainContext();
  let [Days, setDays] = useState([]);
  let [Times, setTimes] = useState([]);
  let [RoomIdx, setRoomIdx] = useState(-1);
  let Rooms = getRooms();

  let handleCloseModal = () => {
    HideRoom(-1);
  };
  //   console.log(Rooms);
  let Users = getUsers();
  useEffect(() => {
    for (let Idx in Rooms) {
      if (Rooms[Idx].id == roomId) {
        setRoomIdx(Idx);
        break;
      }
    }
    let Curr = new Date();
    let Ans = [];
    for (let i = 1; i < 7; i++) {
      let NewDate = new Date();
      NewDate.setDate(Curr.getDate() + i);
      Ans.push(NewDate);
    }
    setDays(Ans);

    Ans = [];
    for (let i = 8; i <= 18; i++) {
      let MinAns1 = (i < 10 ? "0" : "") + i + ":" + "00";
      let MinAns2 = (i < 10 ? "0" : "") + i + ":" + "30";
      let MinAns3 = (i + 1 < 10 ? "0" : "") + (i + 1) + ":" + "00";
      Ans.push(MinAns1 + "-" + MinAns2);
      Ans.push(MinAns2 + "-" + MinAns3);
    }
    setTimes(Ans);
  }, []);

  function HandleSettingSlot(SlotTime) {
    if (Rooms[RoomIdx].ReservedTimes[SlotTime]) return;

    Rooms[RoomIdx].ReservedTimes[SlotTime] = true;
    Users[User].ReservedRooms.push({
      roomId,
      SlotTime,
    });

    localStorage.setItem("users", JSON.stringify(Users));
    localStorage.setItem("rooms", JSON.stringify(Rooms));

    Redirect("success", "Room Booked Successfully !", "", () => {
      navigate("/");
    });
  }

  return (
    <div className="Modal">
      {ShowClose && (
        <div className="btn btn-danger CloseBtn" onClick={handleCloseModal}>
          Close
        </div>
      )}

      {RoomIdx != -1 &&
        Days.map((Item, Idx) => {
          let StrDay =
            Item.getDate() +
            "/" +
            (Item.getMonth() + 1) +
            "/" +
            Item.getFullYear();
          return (
            <div className="Day" key={Idx}>
              <h6>{StrDay}</h6>
              {Times.map((Item, Idx) => {
                return (
                  <button
                    className="btn btn-outline-info text-black text-sm"
                    key={Days.length + Idx}
                    disabled={Rooms[RoomIdx].ReservedTimes[StrDay + "_" + Item]}
                    onClick={() => HandleSettingSlot(StrDay + "_" + Item)}
                  >
                    {Item}
                  </button>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default ShowSlots;
