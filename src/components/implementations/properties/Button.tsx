export default function Button({
	fn,
	text
}: {
	fn: () => void
	text?: string
}) {
	return (
		<button
			className='bg-slate-200 border-2 border-slate-300 text-xl px-10 py-5 text-black rounded-lg transition-all hover:scale-105 hover:bg-slate-300'
			onClick={fn}
		>
			{text ? text : 'Check'}
		</button>
	)
}
