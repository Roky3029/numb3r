interface InputProps {
	values: number[][]
	setValues: React.Dispatch<React.SetStateAction<number[][]>>
	iValue: number
	jValue: number
	disabled?: boolean
}

const Input: React.FC<InputProps> = ({
	values,
	setValues,
	iValue,
	jValue,
	disabled
}) => {
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
				type={'text'}
				className='border-none ring-2 px-3 py-1 w-14 h-14 md:w-20 md:h-20 text-sm md:text-xl text-black text-center rounded-md disabled:text-white disabled:placeholder:text-white'
				value={values[iValue][jValue].toString().replace(/(.+?)\/1\b/g, '$1')}
				placeholder={values[iValue][jValue] !== 0 ? '' : '0'}
				onChange={e => handleChange(e)}
				disabled={disabled}
				name={'matrix-input'}
			/>
		</>
	)
}

export default Input
