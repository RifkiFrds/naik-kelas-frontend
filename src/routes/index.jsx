import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/view/MainLayout";
import HomeView from "../features/home/views/HomeView";
import AboutView from '../features/about/views/AboutView';
import PublicServiceView from '../features/public-services/views/PublicServiceView';
import BusinessServiceView from "../features/business-services/views/BusinessServiceView";
import PartnershipView from '../features/partnership/views/PartnershipView';
import CarrersView from '../features/carrers/views/CarrersView';

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Rute yang sudah ada */}
          <Route path="/" element={<HomeView />} />
          <Route path="/bussinesservice" element={<BusinessServiceView />} />
          <Route path="/tentang" element={<AboutView />} />
          <Route path="/kemitraan" element={<PartnershipView />} />
          <Route path="/layanan-umum" element={<PublicServiceView />} />
          <Route path="/karir" element={<CarrersView />} />
          <Route path="/kontak" element={<CarrersView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};