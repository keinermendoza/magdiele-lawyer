import Link from "next/link"

export default function MobileNavbarItem({link, handleNavbarOpen}) {
    return (
        <li  className="nav-item p-2">
            <Link onClick={handleNavbarOpen} className="nav-link" href={link.url}>{link.label}</ Link>
        </li>
    )
}