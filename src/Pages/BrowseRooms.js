import React, { useState } from "react";
import ShowSlots from "../components/ShowSlots";
import getRooms from "../Helpers/getRooms";

function BrowseRooms() {
  let [SelectRoom, setSelectRoom] = useState(-1);
  let Rooms = getRooms();
  function handleShowingTimes(Id) {
    setSelectRoom(Id);
  }
  return (
    <div className="container">
      <div className="SearchBody">
        <input type="text" className="Search form-control" />
      </div>
      <div className="RoomsBody">
        {Rooms.map((Item, Idx) => {
          return (
            <div className="card col-md-5 mb-3 ms-2" key={Idx}>
              <div className="card-body">
                <h5 className="card-title">{Item.room_name}</h5>
                <p className="card-text">{Item.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowingTimes(Item.id)}
                >
                  Show Available Times
                </button>
              </div>
            </div>
          );
        })}
        {SelectRoom != -1 && (
          <ShowSlots
            roomId={SelectRoom}
            HideRoom={setSelectRoom}
            ShowClose={true}
          />
        )}
      </div>
    </div>
  );
}

export default BrowseRooms;
