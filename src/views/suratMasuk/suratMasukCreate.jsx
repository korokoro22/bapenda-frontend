import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import Api from "../../api";
import axios from "axios";

export default function suratMasukCreate() {

    const [suratMasukInput, setSuratMasukInput] = useState ({
        'nosurat': '',
        'tglsurat': '',
        'perihal': '',
        'isiringkas': '',
        'pengirim': '',
        'tglterima': '',
        'tglteruskan': '',
    });

    const [namaFile, setNamaFile] = useState(null)

    const handleChange = (event) => {
        const {name, value} = event.target
        setSuratMasukInput(prevState => ({
            ...prevState,
            [name]:value
        }))

    }

    useEffect( () => {
        console.log(suratMasukInput)
        console.log(namaFile)
    }, [suratMasukInput, namaFile])

    const handleSubmit = async () => {
        const data = new FormData()
        data.append('nosurat', suratMasukInput.nosurat)
        data.append('tglsurat', suratMasukInput.tglsurat)
        data.append('perihal', suratMasukInput.perihal)
        data.append('isiringkas', suratMasukInput.isiringkas)
        data.append('pengirim', suratMasukInput.pengirim)
        data.append('tglterima', suratMasukInput.tglterima)
        data.append('tglteruskan', suratMasukInput.tglteruskan)
        data.append('namafile', namaFile)

        await Api.post("http://127.0.0.1/kp/bapenda-backend/public/api/surat-masuk", data, {headers: {"Content-Type": "multipart/form-data"}})
            .then(response => {
                if(response.status === 200) {
                    window.location = "/surat-masuk"
                }
            })
    }


    return (
                <div className="flex flex-col min-h-screen">
                    <div className="flex-grow">
                        <div className="w-11/12 mx-auto my-10 py-4 shadow-md sm:rounded-lg">
                            <div className=" mt-4 w-11/12 mx-auto border-b border-black">
                                <p className="font-inter font-bold ml-7">PENAMBAHAN SURAT MASUK</p>
                            </div>
                            <div className="mt-8 w-9/12 mx-auto">
                                <div  className="mx-auto">
                                    <div className="mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Nomor Surat
                                        <input type="text" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="nosurat" value={suratMasukInput.nosurat} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Tanggal Surat
                                        <input type="date" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="tglsurat" value={suratMasukInput.tglsurat} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Perihal
                                        <input type="text" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="perihal" value={suratMasukInput.perihal} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Ringkasan
                                        <textarea className="border-2 border-gray-300 rounded px-3 py-2 w-full resize-none" name="isiringkas" value={suratMasukInput.isiringkas} onChange={handleChange}/>
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Pengirim
                                        <input type="text" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="pengirim" value={suratMasukInput.pengirim} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Tanggal Diterima
                                        <input type="date" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="tglterima" value={suratMasukInput.tglterima} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Tanggal Diteruskan
                                        <input type="date" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="tglteruskan" value={suratMasukInput.tglteruskan} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Nama File
                                        <input type="file" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="namafile" onChange={(event) => {
                                            setNamaFile(event.target.files[0])
                                        }} />
                                        </label>
                                    </div>
                                    <div className="my-8 w-full ">
                                        <button type="" onClick={handleSubmit}  className="p-2 rounded-md text-white bg-green-500 mr-2 hover:bg-green-700 font-inter">SIMPAN</button>
                                        <Link to="/surat-masuk" className="p-2 rounded-md bg-gray-400 hover:bg-gray-600 text-white font-inter">KEMBALI</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
    )
}