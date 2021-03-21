import React from 'react'
import { VscSourceControl } from "react-icons/vsc";
import { AiOutlineMonitor } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai"

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome/>,
    cName: "nav-text"
  },
  {
    title: "Monitoring",
    path: "/monitoring",
    icon: <AiOutlineMonitor/>,
    cName: "nav-text"
  },
  {
    title: "System info",
    path: "/systeminfo",
    icon: <VscSourceControl/>,
    cName: "nav-text"
  }
]