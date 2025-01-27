import Input from './Input'

interface MatrixProps {
	size: number
	values: number[][]
	setValues: React.Dispatch<React.SetStateAction<number[][]>>
}

const Matrix: React.FC<MatrixProps> = ({ size, values, setValues }) => {
	// const rows = [
	// 	[1, 1, 1],
	// 	[2, 2, 2],
	// 	[3, 3, 3]
	// ]

	const matrix = []
	for (let i = 0; i < size; i++) {
		matrix.push(new Array(size))
		for (let j = 0; j < size; j++) {
			matrix[i].push(
				<Input
					key={`${i}-${j}`}
					values={values}
					setValues={setValues}
					iValue={i}
					jValue={j}
				/>
			)
		}
	}

	return (
		<div className='flex flex-col gap-3 items-center justify-center'>
			{matrix.map((row, index) => (
				<div key={index} className='flex items-center justify-center gap-2'>
					{row.map((el, ind) => (
						<span key={ind}>{el}</span>
					))}
				</div>
			))}
		</div>
	)
}

export default Matrix
