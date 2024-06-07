import { useEffect, useState } from "react";
import Api from "../api";
import suratmasuk from "../../public/assets/suratmasuk.png";
import suratkeluar from "../../public/assets/suratkeluar.png";
import arsip from "../../public/assets/arsip.png";
import keluar from "../../public/assets/logout.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [suratMasuk, setSuratMasuk] = useState([]);

  const fetchDataSuratMasuk = async () => {
    //fetch data from API with Axios
    // await Api.get('/surat-masuk')
    await Api.get(`/surat-masuk?query=${query}`).then((response) => {
      //assign response data to state "posts"
      setSuratMasuk(response.data.data);
    });
  };

  useEffect(() => {
    //call method "fetchDataPosts"
    fetchDataSuratMasuk();
  }, []);

  return (
    <>
      <div>
        <div>
          <div class="w-6/7 py-1 flex flex-col items-center my-4 border-b-2 mx-auto">
            <h1 class="font-inter font-bold text-newBlack">
              ADMINISTRASI PERSURATAN
            </h1>
            <h1 class="font-inter font-bold text-newBlack">BAPENDA</h1>
          </div>
          <div class="w-5/6 mx-auto md:grid grid-cols-2 gap-2 mb-6">
            <div class="m-1 bg-gray-100 flex items-center justify-center border-solid border-2 rounded hover:bg-gray-200">
              <Link
                to="surat-masuk"
                class="py-1.5 space-y-1 w-full flex flex-col text-center"
              >
                <img src={suratmasuk} alt="" class="size-10 mx-auto" />
                <p class="font-inter text-biruMuda">SURAT MASUK</p>
              </Link>
            </div>

            <div class="m-1 bg-gray-100 flex items-center justify-center border-solid border-2 rounded hover:bg-gray-200">
              <a
                href="surat-keluar"
                class="py-1.5 space-y-1 w-full flex flex-col text-center"
              >
                <img src={suratkeluar} alt="" class="size-10 mx-auto" />
                <p class="font-inter text-biruMuda">SURAT KELUAR</p>
              </a>
            </div>

            <div class="m-1 bg-gray-100 flex items-center justify-center border-solid border-2 rounded hover:bg-gray-200">
              <a
                href="arsip-pergub"
                class="py-1.5 space-y-1 w-full flex flex-col text-center"
              >
                <img src={arsip} alt="" class="size-10 mx-auto" />
                <p class="font-inter text-biruMuda">ARSIP</p>
              </a>
            </div>

            <div class="m-1 bg-gray-100 flex items-center justify-center border-solid border-2 rounded hover:bg-gray-200">
              <a
                href="/logout"
                class="py-1.5 space-y-1 w-full flex flex-col text-center"
              >
                <img src={keluar} alt="" class="size-10 mx-auto" />
                <p class="font-inter text-biruMuda">KELUAR</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
