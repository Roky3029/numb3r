import parse from 'html-react-parser'

export default function Error({ msg }: { msg: string | boolean }) {
	return (
		<div className='text-black mt-10 bg-red-400 px-10 py-5 rounded-lg uppercase font-bold w-[70%] text-center'>
			<h1>{parse(msg as string)}</h1>
		</div>
	)
}
