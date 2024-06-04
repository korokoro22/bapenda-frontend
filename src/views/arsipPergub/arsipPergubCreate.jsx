import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function arsipPergubCreate() {

    const [arsipPergubInput, setArsipPergubInput] = useState({
        'nosurat': '',
        'tglsurat': '',
        'perihal': '',
        'isiringkas': '',
    })

    const [namaFile, setNamaFile] = useState(null)

    const handleChange = (event) => {
        const {name, value} = event.target
        setArsipPergubInput(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    useEffect( () => {
        console.log(arsipPergubInput)
        console.log(namaFile)
    }, [arsipPergubInput, namaFile])


    const handleSubmit = async () => {
        const data = new FormData()
        data.append('nosurat', arsipPergubInput.nosurat)
        data.append('tglsurat', arsipPergubInput.tglsurat)
        data.append('perihal', arsipPergubInput.perihal)
        data.append('isiringkas', arsipPergubInput.isiringkas)
        data.append('namafile', namaFile)

        await axios.post("http://127.0.0.1/kp2/api-web-bapenda/public/api/arsip-gubernur", data, {headers: {"Content-Type": "multipart/form-data"}})
            .then(response => {
                console.log(response)
                if(response.status === 200) {
                    window.location = "/arsippergub"
                }
            }).catch(err => console.log(err))
    }

    return(
        <div className="flex flex-col min-h-screen">
                    <div className="flex-grow">
                        <div className="w-11/12 mx-auto my-10 py-4 shadow-md sm:rounded-lg">
                            <div className=" mt-4 w-11/12 mx-auto border-b border-black">
                                <p className="font-inter font-bold ml-7">PENAMBAHAN ARSIP GUBERNUR</p>
                            </div>
                            <div className="mt-8 w-9/12 mx-auto">
                                <div  className="mx-auto">
                                    <div className="mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Nomor Surat
                                        <input type="text" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="nosurat" value={arsipPergubInput.nosurat} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Tanggal Surat
                                        <input type="date" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="tglsurat" value={arsipPergubInput.tglsurat} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Perihal
                                        <input type="text" className="border-2 border-gray-300 rounded px-3 py-2 w-full" name="perihal" value={arsipPergubInput.perihal} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className=" mt-5 w-full">
                                        <label className="block mb-2 text-lg font-semibold font-inter">Ringkasan
                                        <textarea className="border-2 border-gray-300 rounded px-3 py-2 w-full resize-none" name="isiringkas" value={arsipPergubInput.isiringkas} onChange={handleChange}/>
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
                                        <Link to="/arsip-gubernur" className="p-2 rounded-md bg-gray-400 hover:bg-gray-600 text-white font-inter">KEMBALI</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}