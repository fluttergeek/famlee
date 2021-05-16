import React, { FC, useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import Message from "../../UI/Message";
// import { setSuccess } from "../../../store/actions/authActions";
// import { RootState } from "../../../store";
import AddRoom from "./AddRoom";
import SearchInput from "../../UI/SearchInput";
import { firestore } from "../../..";
import Row from "../../UI/Rooms/Row";

const Rooms: FC = () => {
  // const { user, success } = useSelector((state: RootState) => state.auth);
  const [isAddRoomOpen, setAddRoomModalState] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [rooms, setRooms] = useState<any[]>([]);
  const [room, setRoom] = useState({}); // For MODAL

  // Opens and closes the Modal to add Room
  const toggleAddRoom = (key: string = "") => {
    key == "" ? setRoom({}) : setRoom(rooms.find((r) => r.key == key));
    setAddRoomModalState(!isAddRoomOpen);
  };
  // const dispatch = useDispatch();
  const pension: string = window.localStorage.getItem("pension")!;
  const roomCollection = firestore
    .collection(pension)
    .doc(pension)
    .collection("rooms");

  useEffect(() => {
    const unsubscribe = roomCollection.onSnapshot((querySnapshot) => {
      const getRoomsFromFirestore: any = [];
      querySnapshot.docs.forEach((doc) => {
        getRoomsFromFirestore.push({ ...doc.data(), key: doc.id });
      });
      getRoomsFromFirestore.sort((a: any, b: any) => {
        return a.number - b.number;
      });
      setRooms(getRoomsFromFirestore);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <AddRoom
          room={room}
          isOpen={isAddRoomOpen}
          onClose={() => toggleAddRoom()}
          collection={roomCollection} // Collection Reference Firestore
        />
        <div className="w-full lg:w-5/6">
          {/* UPPER TOOLS */}
          <div className="mb-4 flex justify-between items-center">
            {/* SEARCH */}
            <SearchInput
              value={searchText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchText(e.currentTarget.value)
              }
              placeholder="Search room number"
              type="search"
            />
            {/* ADD ROOM */}
            <div className="shadow rounded-lg flex relative">
              <button
                className="rounded-lg inline-flex items-center bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4"
                onClick={() => toggleAddRoom()}
              >
                <span className="hidden md:block">Add New Room</span>
              </button>
            </div>
          </div>
          {/* TABLE */}
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Room #</th>
                  <th className="py-3 px-6 text-left">Description</th>
                  <th className="py-3 px-6 text-center">Price</th>
                  <th className="py-3 px-6 text-center">Occupancy</th>
                  <th className="py-3 px-6 text-center">People</th>
                  <th className="py-3 px-6 text-center">Capacity</th>
                  <th className="py-3 px-6 text-center">Price</th>
                  <th className="py-3 px-6 text-center">Duration</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {rooms.map((r, index) => (
                  <Row
                    key={index}
                    room={r.number}
                    description={r.description}
                    duration={r.duration}
                    occupancy={r.occupied}
                    people={r.people}
                    price={r.price}
                    guestID={r.guestID}
                    capacity={r.capacity}
                    index={index}
                    onEdit={() => toggleAddRoom(r.key)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
