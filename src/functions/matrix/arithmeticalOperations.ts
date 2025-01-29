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
// 	console.log('product')
// }

// const division = (mat1: number[][], mat2: number[][]) => {
// 	console.log('division')
// }

export const ARITHMETICAL_OPERATIONS = {
	'+': sum,
	'-': substraction
	// '*': product,
	// '/': division
}
