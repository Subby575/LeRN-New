"use client";
import React from "react";
import { HeroParallax } from "@/app/_Components/Hero-Parallax";
// import { NavbarDemo } from "@/app/Components/Navbar";
import Logo from '@/public/translogo.png';
import Image from "next/image";
import Nav from "./_Components/Navbar";
const products = [
  {
    title: "Market Understanding",
    thumbnail:
      "/market.jpg",
  },
  {
    title: "Innovative Vision",
    thumbnail:
      "/idea.jpg",
  },
  {
    title: "Business Plan",
    thumbnail:
      "/plan.jpg",
  },
  {
    title: "Capital Funding",
    thumbnail:
      "/capital.jpg",
  },
  {
    title: "Work Ethic",
    thumbnail:
      "/ethics.jpg",
  },
  {
    title: "Risk Management",
    thumbnail:
      "/risk.jpg",
  },
  {
    title: "Time Management",
    thumbnail:
      "/time.jpg",
  },
  {
    title: "Networking Skills",
    thumbnail:
      "/network.jpg",
  },
  {
    title: "Team Leadership",
    thumbnail:
      "/lead.jpg",
  },
];
const page = () => {
  return (
    <>
    <Nav/>
    <HeroParallax products={products} />
    </>
  )
}

export default page



