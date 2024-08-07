// 'use client'
// import { HiMenuAlt2, HiOutlineChevronUp } from "react-icons/hi";
// import { useState, useEffect, useContext } from "react"
// import TokenContext from "../context/TokenContext";
// // import NavbarItem from "./NavbarItem"
// // import MobileNavbarItem from "./MobileNavbarItem"
// import '../styles/Navbar.css'
// import Link from "next/link";

// export default function Navbar({links}) {
    
//     const [isOpen, setIsOpen] = useState(false)
//     const {token} = useContext(TokenContext)

//     function handleNavbarOpen() {
//         setIsOpen(!isOpen)
//     }

//     function handleResize () {
//         setIsOpen(false)
//     }

//     // closing the navbar when resize the screen
//     useEffect(() => {
//         window.addEventListener('resize', handleResize)
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, [])

//     return (
//         <header className="p-3 px-md-4 text-white bg-indigo fixed-top  border-secondary-subtle border-bottom">
//             <div id="navbar" className="d-flex align-items-center justify-content-between">
                
//                 {/* logo */}
//                 <div className=""><strong>Abogada Magdiele</strong></div>

//                 {/* nav links */}
//                 <nav className="col-7 d-none d-md-flex align-items-center justify-content-evenly ">
//                 {
//                     links.map(link => (
//                         <li  className="nav-item rounded-pill px-3 py-1">
//                             <Link className="nav-link" href={link.url}>{link.label}</Link>
//                         </li>  
//                     ))
//                 }

//                 </nav>
//                 <button className="d-block d-md-none px-2 py-1 rounded-3 up" onClick={handleNavbarOpen}>
//                     {isOpen ? <HiOutlineChevronUp/> : <HiMenuAlt2/>}
//                 </button>

                
//             </div>
            
//             {/* mobile links */}
//             <div className={`mobile ${isOpen ? 'active' : ''} d-block  d-md-none`}  id="mobile-menu">
//                 <div className="d-flex flex-column text-center row-gap-1 mt-2 ">
//                     {
//                         links.map(link => (
//                             <li  className="nav-item p-2">
//                                 <Link onClick={handleNavbarOpen} className="nav-link" href={link.url}>{link.label}</ Link>
//                             </li>   
//                         ))
//                     }
//                 </div>
//             </div>
//         </header>
//     )
// }