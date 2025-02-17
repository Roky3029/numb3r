export default function ProductSelect({
	value,
	setter
}: {
	value: string
	setter: React.Dispatch<React.SetStateAction<string>>
}) {
	return (
		<select
			className='text-4xl px-5 h-fit text-center bg-transparent border-2 rounded-full transition-all hover:bg-zinc-800 cursor-pointer'
			onChange={e => setter(e.target.value)}
			value={value}
			id='selector'
		>
			<option className='text-black bg-slate-300 text-center' value='DOT'>
				Dot product
			</option>
			<option className='text-black bg-slate-300 text-center' value='CRO'>
				Cross product
			</option>
			<option className='text-black bg-slate-300 text-center' value='MIX'>
				Mixed product
			</option>
		</select>
	)
}
