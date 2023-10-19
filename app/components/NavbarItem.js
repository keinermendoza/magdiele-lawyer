import Link from "next/link"

export default function NavbarItem({link}) {
    return (
        <li  className="nav-item rounded-pill px-3 py-1">
            <Link className="nav-link" href={link.url}>{link.label}</Link>
        </li>
    )
}