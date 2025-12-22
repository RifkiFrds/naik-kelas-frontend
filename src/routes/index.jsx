import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/view/MainLayout";
import HomeView from "../features/home/views/HomeView";
import AboutView from '../features/about/views/AboutView';
import PublicServiceView from '../features/public-services/views/PublicServiceView';
import BusinessServiceView from "../features/business-services/views/BusinessServiceView";
import PartnershipView from '../features/partnership/views/PartnershipView';
import CarrersView from '../features/carrers/views/CarrersView';
import ScrollToTop from '../utils/ScrollToTop';
import EventView from '../features/events/views/EventView';
import ArticleView from '../features/article/views/ArticleView';
import ArticleDetailView from "../features/article/views/ArticleDetailView";
import ContactView from '../features/contact/views/ContactView';
import FaqView from '../features/faq/views/FaqView';

export default function index() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Rute yang sudah ada */}
          <Route path="/" element={<HomeView />} />
          <Route path="/layanan-bisnis" element={<BusinessServiceView />} />
          <Route path="/tentang" element={<AboutView />} />
          <Route path="/kemitraan" element={<PartnershipView />} />
          <Route path="/layanan-umum" element={<PublicServiceView />} />
          <Route path='/events' element={<EventView />} />
          <Route path="/artikel" element={<ArticleView />} />
          <Route path="/artikel/:slug" element={<ArticleDetailView />} />
          <Route path="/karir" element={<CarrersView />} />
          <Route path="/kontak" element={<ContactView />} />
          <Route path="/faq" element={<FaqView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};