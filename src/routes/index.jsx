import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/view/MainLayout";
import HomeView from "../features/home/views/HomeView";
import BusinessServiceView from '../features/business-services/views/BusinessServiceView';

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/bussinesservice" element={<BusinessServiceView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

