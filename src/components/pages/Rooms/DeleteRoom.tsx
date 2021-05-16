import React, { useState, useEffect } from "react";
import DeleteButton from "../../UI/Modal/DeleteButton";
import Footer from "../../UI/Modal/Footer";
import Header from "../../UI/Modal/Header";
import InputLabel from "../../UI/Modal/InputLabel";
import Modal from "../../UI/Modal/Modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  collection: any;
  room: any;
}

const DeleteRoom: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  collection,
  room,
}) => {
  const deleteFn = () => {
    collection
      .doc(room["key"])
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error:any) => {
        console.error("Error removing document: ", error);
      });
      onClose()
  };

  return isOpen ? (
    <Modal>
      <Header title="Deletion" closeModal={onClose} />
      <div className="flex flex-col px-6 py-5 bg-gray-50">
        <InputLabel>
          Are you sure you want to delete {room["description"]}?
        </InputLabel>
      </div>
      <Footer closeModal={onClose}>
        <DeleteButton onClick={deleteFn}>Delete</DeleteButton>
      </Footer>
    </Modal>
  ) : null;
};

export default DeleteRoom;
