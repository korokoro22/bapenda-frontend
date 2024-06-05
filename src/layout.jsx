import { Outlet } from 'react-router-dom'
import Navbar from './component/navbar'

export default function Layout() {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}