import Image from 'next/image'
import Link from 'next/link'

const Error404 = () => {
	return (
		<section className='w-full flex flex-col items-center justify-center gap-10 text-xl'>
			<h1 className='uppercase font-extrabold text-3xl'>Whoops!!</h1>

			<Image
				alt='Laberinth image'
				src='/laberinth.png'
				width={500}
				height={500}
			/>
			<p>
				It seems that the link you were trying to access{' '}
				<span className='text-4xl'>∄</span>
			</p>

			<small>
				Why not return to the{' '}
				<Link
					href='/'
					className='border-b-2 border-b-slate-500 text-slate-500 transition-all hover:text-slate-400 hover:border-b-slate-400'
				>
					main page
				</Link>
				?
			</small>
		</section>
	)
}

export default Error404
