import React from 'react'
import Navbar from "../log/Navbar"


export default function Layout(props) {
  return (
    <>
        <Navbar/>
        {props.children}
    </>
  )
}
