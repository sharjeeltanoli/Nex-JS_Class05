
import { Component } from "react"
const Header = () => {
  return (
<header className="flex bg-red-100 justify-between max-w-screen-xl mx-auto py-5 px-4">
        <h1 className="font-bold">
        LOGO!!!
        </h1>
        <ul className="flex space-x-8">
        <li className="bg-orange-500">Home</li>
        <li className="bg-orange-500">Contact</li>
        </ul>

    </header>
  )
}

export default Header