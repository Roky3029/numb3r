import { PARENTHESIS_SIZES } from '@/functions/matrix/parenthesisSizes'
import Input from './Input'

interface MatrixProps {
	size: number
	values: number[][]
	setValues: React.Dispatch<React.SetStateAction<number[][]>>
	disabled?: boolean
	usePipes?: boolean
}

const Matrix: React.FC<MatrixProps> = ({
	size,
	values,
	setValues,
	disabled,
	usePipes
}) => {
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
					disabled={disabled}
				/>
			)
		}
	}

	return (
		<div className='flex items-center justify-center gap-3'>
			<p className={`${PARENTHESIS_SIZES[size - 2]} hidden md:block`}>
				{usePipes ? '|' : '('}
			</p>
			<div className='flex flex-col gap-3 items-center justify-center'>
				{matrix.map((row, index) => (
					<div key={index} className='flex items-center justify-center gap-2'>
						{row.map((el, ind) => (
							<span key={ind}>{el ? el : ''}</span>
						))}
					</div>
				))}
			</div>
			<p className={`${PARENTHESIS_SIZES[size - 2]} hidden md:block`}>
				{usePipes ? '|' : ')'}
			</p>
		</div>
	)
}

export default Matrix
