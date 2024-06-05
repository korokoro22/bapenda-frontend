import { Link } from "react-router-dom";
import logo from "../../public/assets/Logo.png"

export default function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
      }

    return(
        <nav className="bg-[#BD2B2B] flex justify-between px-10 py-4">
            <div>
                <Link className="flex items-center">
                    <img src={logo} alt="" className="w-16"/>
                    <div className="">
                        <p className="font-inter text-white font-bold">BAPENDA</p>
                        <p className="text-white font-bold">SULAWESI SELATAN</p>
                    </div>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex gap-6">
                    <li><Link to="/home" className="text-white">Home</Link></li>
                    <li><Link to="/surat-masuk" className="text-white">Surat Masuk</Link></li>
                    <li><Link to="/surat-keluar" className="text-white">Surat Keluar</Link></li>
                    <li><Link to="/arsippergub" className="text-white">Arsip Pergub</Link></li>
                    <li><button className="text-white" onClick={handleLogout}>Keluar</button></li>
                </ul>
            </div>
        </nav>
    )
}