//import useState dan useEffect
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

//import api
import Api from "../../api";

//import Link
import { Link } from "react-router-dom";
import axios from "axios";

export default function suratMasukIndex() {
  const [suratMasuk, setSuratMasuk] = useState([]);

  //pagination
  const [pageNumber, setPageNumber] = useState(0)
  const itemsPerPage = 2

  const [query, setQuery] = useState('')

  //define method
  const fetchDataSuratMasuk = async () => {
    //fetch data from API with Axios
    // await Api.get('/surat-masuk')
    await Api.get(`/surat-masuk?query=${query}`)
      .then((response) => {
        //assign response data to state "posts"
        setSuratMasuk(response.data.data);
      })
  };

  //pagination
  const getSuratMasukPerPage = () => {
    const startIndex = pageNumber * itemsPerPage;
    return suratMasuk.slice(startIndex, startIndex + itemsPerPage);
  };

  const pageCount = Math.ceil(suratMasuk.length / itemsPerPage);

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }


  //run hook useEffect
  useEffect(() => {
    //call method "fetchDataPosts"
    fetchDataSuratMasuk();
  }, []);

  const deleteDataSuratMasuk = async (id) => {
    await Api.delete(
      `http://127.0.0.1/kp2/api-web-bapenda/public/api/surat-masuk/${id}`
    ).then((response) => {
      setSuratMasuk(response.data.data);
    });
  };

  const handleSearch = (event) => {
    fetchDataSuratMasuk();
  }





  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="ml-14 mt-6 ">
          <Link
            to="/surat-masuk-tambah"
            className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-700 font-inter"
          >
            TAMBAH DATA
          </Link>
        </div>
        <div className="ml-14 mt-6">
          <button className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-700 font-inter" onClick={handleLogout}>logout</button>
        </div>

        <div>
          <div className="w-11/12 mx-auto mt-4">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                  type="text"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid px-2 py-2 text-zinc-900 font-inter focus:outline-zinc-600"
                  placeholder="Silahkan cari surat yang anda inginkan (Berdasarkan: NOMOR-SURAT, TANGGAL-SURAT, PERIHAL, KEPADA, ISI-RINGKAS)"
                  name="search"
                  value={query} onChange={ (event) => setQuery(event.target.value)}  />

              <button
                  className="relative z-[2] rounded-r px-6 py-2 text-xs font-medium uppercase bg-blue-500 text-white hover:bg-blue-700 font-inter"
                  type="" onClick={handleSearch}
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
                  PENGIRIM
                </th>
                <th scope="col" className="px-6 py-3">
                  TANGGAL DITERIMA
                </th>
                <th scope="col" className="px-6 py-3">
                  TANGGAL DITERUSKAN
                </th>
                <th scope="col" className="px-6 py-3">
                  PERIHAL
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
              {/* {suratMasuk &&
                suratMasuk.map((suratMasuk, index) => ( */}
                {getSuratMasukPerPage().map((suratMasuk, index) => (
                  <tr key={index}>
                    <td scope="row" className="px-6 py-4">
                      {/* {{$masuk->nosurat}} */ suratMasuk.nosurat}
                    </td>
                    <td className="px-6 py-4">
                      {/* {{$masuk->tglsurat}} */ suratMasuk.tglsurat}
                    </td>
                    <td className="px-6 py-4">
                      {/* {{$masuk->perihal}} */ suratMasuk.perihal}
                    </td>
                    <td className="px-6 py-4">
                      {/* {{$masuk->pengirim}} */ suratMasuk.pengirim}
                    </td>
                    <td className="px-6 py-4">
                      {/* {{$masuk->tglterima}} */ suratMasuk.tglterima}
                    </td>
                    <td className="px-6 py-4">
                      {/* {{$masuk->tglteruskan}} */ suratMasuk.tglteruskan}
                    </td>
                    <td className="px-6 py-4">
                      {/* {{$masuk->isiringkas}} */ suratMasuk.isiringkas}
                    </td>
                    <td className="px-4 py-4">
                      {/* {{$masuk->namafile}} */}
                      <Link
                        to={`http://127.0.0.1:8000/storage/${suratMasuk.namafile}`}
                        target="_blank"
                      >
                        {suratMasuk.namafile}
                      </Link>
                    </td>
                    <td className="px-4 py-4">
                      <Link
                        to=""
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded"
                      >
                        Edit
                      </Link>
                      <br />
                      <button
                        type="submit"
                        className=" bg-red-500 hover:bg-red-700 text-white font-bold my-4 py-2 px-3 rounded"
                        onClick={() => deleteDataSuratMasuk(suratMasuk.id)}
                      >
                        HAPUS
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* <div className="flex justify-end mt-5"> */}
        <ReactPaginate
          previousLabel={<span className="border p-2 rounded-md hover:bg-gray-300">Sebelumnya</span>}
          nextLabel={<span className="border p-2 rounded-md hover:bg-gray-300">Setelah</span>}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(data) => setPageNumber(data.selected)}
          containerClassName={'flex items-center justify-center'}
          activeClassName='bg-red-500 text-white'
          // pageLinkClassName={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-1'}
          // previousLinkClassName={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-1'}
          // nextLinkClassName={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-1'}
          // breakLinkClassName={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-1'}
          pageClassName="w-10 h-10 block border hover:bg-l flex items-center justify-center mx-1 rounded-md hover:bg-gray-300"
          disabledClassName={'opacity-50 cursor-not-allowed'}
        />
        {/* </div> */}
      </div>
    </div>
  );
}
