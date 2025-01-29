import { calculateTransposition } from './transposition'

export const createMatrix = (
	size: number,
	value: number | React.ReactNode,
	values: number[][]
) => {
	const matrix = []
	for (let i = 0; i < size; i++) {
		const row = []
		for (let j = 0; j < size; j++) {
			if (values[i]?.[j] !== undefined) {
				row.push(values[i][j])
			} else {
				row.push(value)
			}
		}

		matrix.push(row)
	}

	return matrix
}

// export const reduceMatrix = (values: number[][], length: number) => {
// 	const filterRows = values.filter(row => row.some(el => el !== 0))
// 	const transposed = calculateTransposition(filterRows)
// 	const filterCols = transposed.filter(row => row.some(el => el !== 0))
// 	const resultingMatrix = calculateTransposition(filterCols)
// 	for (let i = 0; i < resultingMatrix.length; i++) {
// 		if (resultingMatrix[i].length !== length - 1) {
// 			for (let j = resultingMatrix[i].length; j < length - 1; j++)
// 				resultingMatrix[i][j] = 0
// 		}
// 	}
// 	return resultingMatrix
// }
export const reduceMatrix = (values: number[][]): number[][] => {
	const numRows = values.length
	const numCols = values[0]?.length || 0

	if (numRows === 0 || numCols === 0) return values // Edge case: empty matrix

	// Find first row that is entirely zero
	const zeroRowIndex = values.findIndex(row => row.every(el => el === 0))

	// Transpose to work with columns as rows
	const transposed = calculateTransposition(values)

	// Find first column that is entirely zero
	const zeroColIndex = transposed.findIndex(col => col.every(el => el === 0))

	// If no full zero row or column exists, return the original matrix
	if (zeroRowIndex === -1 && zeroColIndex === -1) return values

	// Remove one zero row if found
	const reducedRows =
		zeroRowIndex !== -1 ? values.filter((_, i) => i !== zeroRowIndex) : values

	// Transpose again to remove a column
	const reducedTransposed = calculateTransposition(reducedRows)
	const reducedCols =
		zeroColIndex !== -1
			? reducedTransposed.filter((_, i) => i !== zeroColIndex)
			: reducedTransposed

	// Final transpose to restore original orientation
	return calculateTransposition(reducedCols)
}

export const calculate2x2Determinant = (values: number[][]) => {
	if (values.length > 2) return -1
	for (let i = 0; i < values.length; i++) {
		if (values[i].length > 2) return -1
	}
	const positiveDiagonal = values[0][0] * values[1][1]
	const negativeDiagonal = values[0][1] * values[1][0]

	return positiveDiagonal - negativeDiagonal
}

export const calculateNxNDeterminant = (values: number[][]) => {
	let determinant = 0

	if (values.length == 2) {
		determinant = calculate2x2Determinant(values)
		return determinant
	}

	for (let i = 0; i < values.length; i++) {
		const firstColElement = values[i][0]

		const newMatrix = values.map(r => [...r])
		newMatrix[i] = new Array(values.length).fill(0)
		for (let j = 0; j < values.length; j++) {
			newMatrix[j][0] = 0
		}

		const adjointMatrix = reduceMatrix(newMatrix)
		// If i is odd, then we should add to the determinant the expression but negative, if it is odd then we just add it positive
		determinant +=
			calculateNxNDeterminant(adjointMatrix) * Math.pow(-1, i) * firstColElement
	}

	return determinant
}

export const checkForEmptyRows = (values: number[][]) => {
	const filterRows = values.filter(row => row.every(el => el === 0))
	const transposed = calculateTransposition(values)
	const filterCols = transposed.filter(row => row.every(el => el === 0))

	return filterRows.length > 0 || filterCols.length > 0
}
