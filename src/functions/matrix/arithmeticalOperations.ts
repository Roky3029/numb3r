import num2fraction from 'num2fraction'
import { calculateInverse } from './calculateInverse'

const sum = (mat1: number[][], mat2: number[][]) => {
	const msg = 'The matrixes must have the same length in order to be added'
	if (mat1.length !== mat2.length)
		return {
			result: [],
			msg
		}

	const resultingMatrix = new Array(mat1.length)
		.fill(null)
		.map(() => new Array(mat1[0].length).fill(0)) // Ensure each row is a separate array

	for (let i = 0; i < mat1.length; i++) {
		if (mat1[i].length !== mat2[i].length)
			return {
				result: [],
				msg
			}

		for (let j = 0; j < mat1[i].length; j++) {
			const sumOfElements = mat1[i][j] + mat2[i][j]
			resultingMatrix[i][j] = sumOfElements
		}
	}

	return { result: resultingMatrix, msg: '' }
}

const substraction = (mat1: number[][], mat2: number[][]) => {
	const msg =
		'The matrixes must have the same length in order to be substracted'
	if (mat1.length !== mat2.length)
		return {
			result: [],
			msg
		}

	const resultingMatrix = new Array(mat1.length)
		.fill(null)
		.map(() => new Array(mat1[0].length).fill(0)) // Ensure each row is a separate array

	for (let i = 0; i < mat1.length; i++) {
		if (mat1[i].length !== mat2[i].length)
			return {
				result: [],
				msg
			}

		for (let j = 0; j < mat1[i].length; j++) {
			const substractionOfElements = mat1[i][j] - mat2[i][j]
			resultingMatrix[i][j] = substractionOfElements
		}
	}

	return { result: resultingMatrix, msg: '' }
}

// const product = (mat1: number[][], mat2: number[][]) => {
// 	// First thing is to check that the number of columns of mat1 is equal to the number of rows of mat2
// 	if (mat1[0].length !== mat2.length)
// 		return {
// 			result: [],
// 			msg: 'The matrixes do not have the same size thus they cannot be multiplied'
// 		}

// 	const resultingMatrix = new Array(mat1.length)
// 		.fill(null)
// 		.map(() => new Array(mat1[0].length).fill(0)) // Ensure each row is a separate array

// 	for (let i = 0; i < mat1.length; i++) {
// 		for (let j = 0; j < mat1[i].length; j++) {
// 			for (let k = 0; k < mat1[i].length; k++) {
// 				resultingMatrix[i][j] += mat1[i][k] * mat2[k][j]
// 			}
// 		}
// 	}

// 	return { result: resultingMatrix, msg: '' }
// }
const product = (mat1: number[][], mat2: number[][]) => {
	if (mat1[0].length !== mat2.length)
		return {
			result: [],
			msg: 'The matrices do not have compatible sizes and cannot be multiplied'
		}

	const resultingMatrix = new Array(mat1.length)
		.fill(null)
		.map(() => new Array(mat2[0].length).fill(0)) // Corregido el tamaño de la matriz resultante

	for (let i = 0; i < mat1.length; i++) {
		for (let j = 0; j < mat2[0].length; j++) {
			// Corregido el límite de j
			for (let k = 0; k < mat1[0].length; k++) {
				// Corregido el límite de k
				resultingMatrix[i][j] += mat1[i][k] * mat2[k][j]
			}
		}
	}

	return { result: resultingMatrix, msg: '' }
}

const division = (mat1: number[][], mat2: number[][]) => {
	// First thing is to check that the number of columns of mat1 is equal to the number of rows of mat2
	if (mat1[0].length !== mat2.length)
		return {
			result: [],
			msg: 'The matrixes do not have the same size thus they cannot be multiplied'
		}

	const inverseOfMat2 = calculateInverse(mat2, true)

	console.log('does this exec?')

	if (inverseOfMat2 === undefined)
		return {
			result: [],
			msg: 'The second matrix has determinant zero thus the inverse cannot be computed and the division cannot be performed'
		}

	const result = product(inverseOfMat2, mat1)
	// const fractionMatrix = result.result.map(row =>
	// 	row.map(el => num2fraction(el))
	// )

	for (let i = 0; i < result.result.length; i++) {
		for (let j = 0; j < result.result[i].length; j++) {
			result.result[i][j] = num2fraction(result.result[i][j])
		}
	}

	return { result: result.result, msg: '' }
}

export const ARITHMETICAL_OPERATIONS = {
	'+': sum,
	'-': substraction,
	'*': product,
	'/': division
}
