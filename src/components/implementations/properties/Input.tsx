interface InputProps {
	label: string
	type: string
	placeholder: string
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function Input({
	label,
	type,
	placeholder,
	value,
	setValue
}: InputProps) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return (
		<div className='flex items-center gap-10 justify-center text-4xl flex-col'>
			<input
				type={type}
				id={label}
				placeholder={placeholder}
				className='px-10 py-5 rounded-lg border-none text-black'
				value={value}
				onChange={e => handleChange(e)}
			/>
		</div>
	)
}
