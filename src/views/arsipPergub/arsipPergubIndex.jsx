import { useEffect, useState } from "react";
import Api from "../../api";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import DeleteModal from "../../component/deleteModal";

export default function arsipPergubIndex() {
  const [arsipPergub, setArsipPergub] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;

  const [query, setQuery] = useState("");

  const fetchDataArsipPergub = async () => {
    await Api.get("/arsip-gubernur")
      .then((response) => {
        console.log("berhasil dapatkan data arsip gubernur", response);
        setArsipPergub(response.data.data);
      })
      .catch((err) => console.error(err));
  };

  const getArsipPergubPerPage = () => {
    const startIndex = pageNumber * itemsPerPage;
    return arsipPergub.slice(startIndex, startIndex + itemsPerPage);
  };

  useEffect(() => {
    fetchDataArsipPergub();
    console.log(arsipPergub);
  }, []);

  useEffect(() => {
    if (arsipPergub.length > 0) {
      setPageCount(Math.ceil(arsipPergub.length / itemsPerPage));
    }
  }, [arsipPergub]);

  const handleSearch = (event) => {
    fetchDataArsipPergub();
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="ml-14 mt-6 ">
            <Link
              to="/arsippergub-tambah"
              className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-700 font-inter"
            >
              TAMBAH DATA
            </Link>
          </div>

          <div>
            <div className="w-11/12 mx-auto mt-4">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="text"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid px-2 py-2 text-zinc-900 font-inter focus:outline-zinc-600"
                  placeholder="Silahkan cari surat yang anda inginkan (Berdasarkan: NOMOR-SURAT, TANGGAL-SURAT, PERIHAL, KEPADA, ISI-RINGKAS)"
                  name="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />

                <button
                  className="relative z-[2] rounded-r px-6 py-2 text-xs font-medium uppercase bg-blue-500 text-white hover:bg-blue-700 font-inter"
                  type=""
                  onClick={handleSearch}
                >
                  PENCARIAN
                </button>
              </div>
            </div>
          </div>

          <div className="w-11/12 mx-auto my-7 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-inter">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    NOMOR SURAT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TANGGAL SURAT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PERIHAL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ISI RINGKAS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    BERKAS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    AKSI
                  </th>
                </tr>
              </thead>
              <tbody className="font-inter">
                {/* {   arsipPergub && (
                                    arsipPergub.map((arsipPergub, index) => ( */}
                {/* {getArsipPergubPerPage().map((arsipPergub, index) => ( */}
                {arsipPergub &&
                  arsipPergub.map((arsipPergub, index) => (
                    <tr key={index}>
                      <td scope="row" className="px-6 py-4">
                        {/* {{$masuk->nosurat}} */ arsipPergub.nosurat}
                      </td>
                      <td className="px-6 py-4">
                        {/* {{$masuk->tglsurat}} */ arsipPergub.tglsurat}
                      </td>
                      <td className="px-6 py-4">
                        {/* {{$masuk->perihal}} */ arsipPergub.perihal}
                      </td>
                      <td className="px-6 py-4">
                        {/* {{$masuk->isiringkas}} */ arsipPergub.isiringkas}
                      </td>
                      <td className="px-4 py-4">
                        {/* {{$masuk->namafile}} */}
                        <Link
                          to={`http://127.0.0.1:8000/storage/${arsipPergub.namafile}`}
                          target="_blank"
                        >
                          {arsipPergub.namafile}
                        </Link>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col gap-2 items-center justify-between">
                          <Link
                            to={`/arsippergub/${arsipPergub.id}`}
                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded"
                          >
                            Edit
                          </Link>
                          <DeleteModal id={arsipPergub.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className=" mb-5">
            {pageCount > 0 && (
              <ReactPaginate
                previousLabel={
                  <span className="border p-2 rounded-md hover:bg-gray-300">
                    Sebelumnya
                  </span>
                }
                nextLabel={
                  <span className="border p-2 rounded-md hover:bg-gray-300">
                    Setelah
                  </span>
                }
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(data) => setPageNumber(data.selected)}
                containerClassName={"flex items-center justify-center"}
                activeClassName="bg-red-500 text-white"
                // pageLinkClassName={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-1'}
                // previousLinkClassName={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-1'}
                // nextLinkClassName={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-1'}
                // breakLinkClassName={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-1'}
                pageClassName="w-10 h-10 block border hover:bg-l flex items-center justify-center mx-1 rounded-md hover:bg-gray-300"
                disabledClassName={"opacity-50 cursor-not-allowed"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
