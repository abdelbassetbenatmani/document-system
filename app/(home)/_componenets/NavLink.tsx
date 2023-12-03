import Link from "next/link";

interface Props{
    children: React.ReactNode
    href: string
    className?: string
}
const NavLink = ({ children, href, ...props }:Props) => (
    <Link href={href} {...props} className={`py-2.5 px-4 text-center rounded-full duration-150 ${props?.className || ""}`}>
        {children}
    </Link>
)

export default NavLink