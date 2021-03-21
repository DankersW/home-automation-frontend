import React from 'react'
import { FaSimCard, FaRegHandPointer } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai"

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome/>,
    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaRegHandPointer/>,
    cName: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaSimCard/>,
    cName: "nav-text"
  }
]