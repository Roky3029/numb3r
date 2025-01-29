import { createMatrix } from '@/functions/matrix/determinant'
import { Dispatch, SetStateAction, useState } from 'react'

type handler = [
	size: number,
	values: number[][],
	setValues: Dispatch<SetStateAction<number[][]>>,
	handleScalation: (scaling: string) => void
]

export const useHandleMatrixParameters = (): handler => {
	const [size, setSize] = useState<number>(3)
	const [values, setValues] = useState<number[][]>([
		[1, 2, 3],
		[1, 2, 3],
		[1, 2, 3]
	])

	const handleScalation = (scaling: string) => {
		if ((size === 2 && scaling === '-') || (size === 5 && scaling === '+'))
			return

		if (scaling === '-') {
			setSize(size - 1)

			const newMat = createMatrix(size - 1, 0, values)
			setValues(newMat as number[][])
			return
		} else if (scaling === '+') {
			setSize(size + 1)
			const newMat = createMatrix(size + 1, 0, values)
			setValues(newMat as number[][])
		}
	}

	return [size, values, setValues, handleScalation]
}
