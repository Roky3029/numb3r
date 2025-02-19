import parse from 'html-react-parser'

interface AboutProps {
	title: string
	about: string
}

export default function About({ title, about }: AboutProps) {
	return (
		// <div className='bg-slate-300 text-black py-5 mt-20 rounded-lg mb-10'>
		// 	<p className='text-4xl uppercase border-b-2 px-10 border-slate-800'>
		// 		{title}
		// 	</p>

		// 	<p className='prose lg:prose-xl pl-10 py-6'>{parse(about)}</p>
		// </div>
		<></>
	)
}
