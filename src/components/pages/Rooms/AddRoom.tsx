import React, { useState, useEffect } from "react";
import Footer from "../../UI/Modal/Footer";
import Header from "../../UI/Modal/Header";
import Input from "../../UI/Modal/Input";
import InputLabel from "../../UI/Modal/InputLabel";
import Modal from "../../UI/Modal/Modal";
import OkSaveButton from "../../UI/Modal/OkSaveButton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  collection: any;
  room: any;
}

const AddRoom: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  collection,
  room,
}) => {
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDesc] = useState("");

  useEffect(() => {
    // Necessary because cannot initialize in useState
    // when room prop loads a bit later

    if (isOpen) {
      setNumber(room["number"]?.toString() ?? "");
      setPrice(room["price"]?.toString() ?? "");
      setCapacity(room["capacity"]?.toString() ?? "");
      setDesc(room["description"]?.toString() ?? "");
    }
  }, [isOpen]);

  const save = () => {
    if ("key" in room) {
      collection
        .doc(room["key"])
        .update({
          number: parseInt(number),
          price: parseFloat(price),
          description: description,
          capacity: parseInt(capacity),
        })
        .then(() => {
          console.log("Updated");
          onClose();
        });
    } else {
      collection
        .add({
          number: parseInt(number),
          price: parseFloat(price),
          description: description,
          capacity: 5,
          duration: 0,
          guestID: "",
          people: 0,
          occupied: false,
        })
        .then((docRef: any) => {
          console.log("Document written with ID: ", docRef.id);
          onClose();
        });
    }
  };

  return isOpen ? (
    <Modal>
      <Header
        title={"key" in room ? "Edit Room" : "Add a room"}
        closeModal={onClose}
      />
      <div className="flex flex-col px-6 py-5 bg-gray-50">
        <InputLabel>Description</InputLabel>
        <textarea
          name="description"
          placeholder="Type message..."
          className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
          id="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDesc(e.currentTarget.value)
          }
        ></textarea>
        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
          <div className="w-full sm:w-1/3">
            <InputLabel>Number</InputLabel>
            <Input
              type="text"
              name="number"
              id="number"
              placeholder="0"
              value={number}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNumber(e.currentTarget.value)
              }
            />
          </div>
          <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
            <InputLabel>Price</InputLabel>
            <Input
              type="text"
              name="price"
              id="price"
              placeholder="0"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrice(e.currentTarget.value)
              }
            />
          </div>
          <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
            <InputLabel>Capacity</InputLabel>
            <Input
              type="text"
              name="capacity"
              id="capacity"
              placeholder="0"
              value={capacity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCapacity(e.currentTarget.value)
              }
            />
          </div>
        </div>
      </div>
      <Footer closeModal={onClose}>
        <OkSaveButton onClick={save}>Save</OkSaveButton>
      </Footer>
    </Modal>
  ) : null;
};

export default AddRoom;
