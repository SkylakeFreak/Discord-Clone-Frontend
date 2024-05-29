"use client";
import Image from "next/image";
import Front from "../components/Front"
import Mainpane from "@/pages/Account";
import { useEffect, useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loggedin from "@/pages/Loggedin";
import Account from "@/pages/Account";
export default function Home() {
  
  return (
    <main className="">
       <Front/>

    </main>
  );
}
