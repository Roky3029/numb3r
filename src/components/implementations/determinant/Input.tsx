interface InputProps {
	values: number[][]
	setValues: React.Dispatch<React.SetStateAction<number[][]>>
	iValue: number
	jValue: number
}

const Input: React.FC<InputProps> = ({ values, setValues, iValue, jValue }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newMatrix = values.map(r => [...r])

		// We check whether the input is a valid number
		if (Number.isInteger(+e.target.value))
			newMatrix[iValue][jValue] = +e.target.value

		setValues(newMatrix)
	}

	return (
		<>
			<input
				type='number'
				className='border-none ring-2 px-3 py-1 w-20 h-20 text-xl text-black text-center rounded-md'
				value={values[iValue][jValue] !== 0 ? values[iValue][jValue] : ''}
				placeholder={values[iValue][jValue] !== 0 ? '' : '0'}
				onChange={e => handleChange(e)}
			/>
		</>
	)
}

export default Input
