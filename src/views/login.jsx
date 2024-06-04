import axios from "axios"
import { useState } from "react"
import {redirect, useNavigate} from "react-router-dom"


export default function login() {

    const [login, setLogin] = useState({})

    const [formInput, setFormInput] = useState({
        'email': '',
        'password':''
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormInput(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const getToken = async () => {
        const data = new FormData()
        data.append('email', formInput.email)
        data.append('password', formInput.password)

        await axios.post("http://127.0.0.1/kp2/api-web-bapenda/public/api/login", data, {headers:{"Content-Type":"multipart/form-data"}})
            .then(response => {
                if (response.status === 200) {
                    const token = response.data.token
                    localStorage.setItem('token', token)

                    navigate("/home")
                }
            }).catch(err => console.log(err))
    }

    return(
        <>
            <div className="h-screen bg-red-700 relative flex justify-center items-center">
                <div className="bg-blue-900 absolute h-1/3 w-11/12 rounded-lg"></div>
                <div className="z-10 h-2/3 w-11/12 flex justify-evenly">
                <div className="bg-white h-full w-5/12 px-10 py-14 rounded-lg">
                    <p className="font-inter text-5xl font-bold">LOGIN</p>
                    <div className=" mt-14 grid gap-y-14">
                        <div className="">
                            <input className="border-b-2 border-black h-12 w-full focus:outline-none text-lg" type="text" placeholder="masukkan username" name="email" onChange={handleChange} value={formInput.email} />
                        </div>
                        <div>
                            <input className="border-b-2 border-black h-12 w-full focus:outline-none text-lg" type="password" placeholder="masukkan password" name="password" onChange={handleChange} value={formInput.password} />
                        </div>
                        <div className="flex">
                            <button className="bg-green-600 font-inter px-10 py-3 text-lg text-white rounded-xl" type="" onClick={getToken} >Masuk</button>
                        </div>
                    </div>
                </div>
                <div className=" h-full  w-5/12  flex items-center ">
                    <img src="assets/bapendalogo.png" alt="" className="w-44" />
                    <img src="assets/logobapenda2.png" alt="" />
                </div>
            </div>
            </div>
        </>
    //     <div className="w-full h-screen bg-merahNavbar relative flex justify-center items-center">
    //         <div className="bg-biruFooter absolute h-1/3 w-11/12"></div>
            // <div className="z-10 h-2/3 w-11/12 flex justify-evenly">
            //     <div className="bg-white h-full w-5/12 px-10 py-14 rounded-lg">
            //         <p className="font-inter text-5xl font-bold">LOGIN</p>
            //         <div className=" mt-14 grid gap-y-14">
            //             <div className="">
            //                 <input className="border-b-2 border-black h-12 w-full focus:outline-none text-lg" type="text" placeholder="masukkan username" name="email" onChange={handleChange} value={formInput.email} />
            //             </div>
            //             <div>
            //                 <input className="border-b-2 border-black h-12 w-full focus:outline-none text-lg" type="password" placeholder="masukkan password" name="password" onChange={handleChange} value={formInput.password} />
            //             </div>
            //             <div className="flex">
            //                 <button className="bg-greenButton font-inter px-10 py-3 text-lg text-black rounded-xl" type="" onClick={getToken} >Masuk</button>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="bg-green-400 h-full  w-5/12  "></div>
            // </div>
    //     </div>
    )
}