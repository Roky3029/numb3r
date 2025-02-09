/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { MdWebhook } from 'react-icons/md'

const Footer = () => {
	return (
		<footer className='border-t-4 border-zinc-600 w-full px-32 py-10 mt-auto grid grid-cols-2 place-items-center'>
			<div className='flex items-center justify-center gap-10'>
				<img
					src='https://avatars.githubusercontent.com/u/75387461?v=4'
					alt="Miguel's profile picture"
					className='w-32 h-32 rounded-full'
				/>
				<div className='flex justify-start items-center flex-col gap-3'>
					<p className='font-bold text-2xl'>Miguel R.</p>
					<span className='text-left w-full text-slate-600'>@MikiDev</span>
				</div>
			</div>

			<nav className='flex items-center justify-center gap-10'>
				<Link href='#' className='transition-all hover:scale-110'>
					<FaXTwitter size={30} />
				</Link>
				<Link href='#' className='transition-all hover:scale-110'>
					<MdWebhook size={30} />
				</Link>
				<Link href='#' className='transition-all hover:scale-110'>
					<FaGithub size={30} />
				</Link>
			</nav>
		</footer>
	)
}

export default Footer
