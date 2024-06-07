import { useState } from "react";
import Api from "../api";
import trash from "../../public/assets/delete.png";

export default function DeleteModal({ id }) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const deleteDataArsipPergub = async (id) => {
    await Api.delete(
      `http://127.0.0.1/kp/bapenda-backend/public/api/arsip-gubernur/${id}`
    ).then((response) => {
      console.log(response.data);
      window.location = "/arsippergub";
    });
  };

  return (
    <>
      <button
        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
        onClick={handleShowModal}
      >
        HAPUS
      </button>
      {showModal && (
        <div className="absolute h-screen w-screen z-[999] bg-black/50 top-0 left-0 flex justify-center pt-20">
          <div className=" bg-white h-fit px-8 py-5 rounded-xl">
            <div className=" mb-12 flex flex-col justify-center items-center border-b-2 pb-8 border-zinc-300">
              <img src={trash} alt="" className=" w-16 mb-4" />
              <p className=" text-xl text-black w-4/5 text-center">
                Apakah kamu ingin menghapus data ini?
              </p>
            </div>
            <div className="flex justify-center gap-16 text-lg">
              <button
                className=" bg-gray-500 rounded-lg border-sol px-4 py-2 text-white"
                onClick={handleShowModal}
              >
                BATALKAN
              </button>
              <button
                className=" bg-red-600 rounded-lg border-sol px-4 py-2 text-white"
                onClick={() => deleteDataArsipPergub(id)}
              >
                HAPUS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
