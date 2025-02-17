export default function VectorInput({
	state,
	index
}: {
	state: {
		variable: number[]
		setter: React.Dispatch<React.SetStateAction<number[]>>
	}
	index: number
}) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newMatrix = [...state.variable]
		newMatrix[index] = +e.target.value

		state.setter(newMatrix)
	}

	return (
		<input
			className='bg-slate-50 text-black size-16 rounded-lg text-center flex items-center justify-center'
			type='number'
			placeholder='0'
			value={Number.isNaN(state.variable[index]) ? '' : state.variable[index]}
			onChange={e => handleChange(e)}
			name='vector-input'
		/>
	)
}
