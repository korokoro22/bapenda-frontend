import { Routes, Route } from "react-router-dom";
import Home from "../views/home";

import SuratMasukIndex from "../views/suratMasuk/suratMasukIndex";
import SuratMasukCreate from "../views/suratMasuk/suratMasukCreate";
import SuratMasukEdit from "../views/suratMasuk/suratMasukEdit";

function RoutesIndex() {
    return(
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/surat-masuk" element={<SuratMasukIndex />}  />
            <Route path="/surat-masuk-tambah" element={<SuratMasukCreate />}  />
            <Route path="/surat-masuk-edit" element={<SuratMasukEdit />}  />

        </Routes>
    )
}

export default RoutesIndex