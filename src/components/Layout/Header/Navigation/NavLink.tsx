import { NavLinks } from '@/types/navlink'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  item: NavLinks;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
  const path = usePathname()
  const itemLabelToPath = `/${item.label.toLowerCase().replace(/\s+/g, '-')}`

  const linkclasses = clsx(
    'py-3 text-3xl sm:text-5xl font-medium text-white/40 rounded-full group-hover:text-primary',
    {
      '!text-primary': item.href === path,
      'text-primary': path.startsWith(itemLabelToPath),
    }
  )

  const liststyle = clsx(
    'w-0 h-0.5 bg-primary transition-all duration-300',
    {
      '!block w-6 mr-4': item.href === path,
      'block w-6': path.startsWith(itemLabelToPath),
      'group-hover:block group-hover:w-6 group-hover:mr-4': true,
    }
  )

  return (
    <li className='flex items-center group w-fit'>
      <div className={liststyle} />
      <Link href={item.href} className={linkclasses} onClick={onClick}>
        {item.label}
      </Link>
    </li>
  )
}

export default NavLink
