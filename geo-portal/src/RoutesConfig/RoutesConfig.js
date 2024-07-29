
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Entry from "../Pages/Entry/Entry";
import Registration from '../Pages/Registration/Register1'

export default function RoutesConfig() {
  return (
    <Routes>
        <Route path='/'  element={<Entry/>} />
        <Route path='SignUP'  element={<Registration/>} />

    </Routes>
  )
}
