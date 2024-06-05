import { Routes, Route } from "react-router-dom";
import Home from "../views/home";

import SuratMasukIndex from "../views/suratMasuk/suratMasukIndex";
import SuratMasukCreate from "../views/suratMasuk/suratMasukCreate";
import SuratMasukEdit from "../views/suratMasuk/suratMasukEdit";

import SuratKeluarCreate from "../views/suratKeluar/suratKeluarCreate";
import SuratKeluarIndex from "../views/suratKeluar/suratKeluarIndex";
import SuratKeluarEdit from "../views/suratKeluar/suratKeluarEdit";

import ArsipPergubIndex from "../views/arsipPergub/arsipPergubIndex";
import ArsipPergubCreate from "../views/arsipPergub/arsipPergubCreate";
import ArsipPergubEdit from "../views/arsipPergub/arsipPergubEdit";

import Login from "../views/login";
import Layout from "../layout";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/surat-masuk" element={<SuratMasukIndex />} />
        <Route path="/surat-masuk-tambah" element={<SuratMasukCreate />} />
        <Route path="/surat-masuk/:id" element={<SuratMasukEdit />} />

        <Route path="/surat-keluar-tambah" element={<SuratKeluarCreate />} />
        <Route path="/surat-keluar" element={<SuratKeluarIndex />} />
        <Route path="/surat-keluar/:id" element={<SuratKeluarEdit />} />

        <Route path="/arsippergub" element={<ArsipPergubIndex />} />
        <Route path="/arsippergub-tambah" element={<ArsipPergubCreate />} />
        <Route path="/arsippergub/:id" element={<ArsipPergubEdit />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RoutesIndex;
