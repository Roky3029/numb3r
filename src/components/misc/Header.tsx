import Image from 'next/image'
import Link from 'next/link'

//////////////////// ICONS ////////////////////
import { BsPatchQuestion } from 'react-icons/bs'
///////////////////////////////////////////////

const Header = () => {
	return (
		<header className='w-full bg-zinc-100 text-black px-36 py-5 flex items-center justify-between text-xl mb-10'>
			<Link
				href='/'
				className='text-5xl font-extrabold uppercase flex items-center justify-center gap-5'
			>
				<Image alt='Logo' src='/numb3r.png' width={50} height={50} />
				<span>Numb3r</span>
			</Link>

			<nav className='flex items-center justify-center gap-10'>
				<div className='flex items-center justify-center gap-2'>DARK MODE</div>
				<div className='flex items-center justify-center gap-2'>
					<BsPatchQuestion />
				</div>
			</nav>
		</header>
	)
}

export default Header
