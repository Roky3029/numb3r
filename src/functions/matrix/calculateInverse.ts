import { calculateNxNDeterminant, reduceMatrix } from './determinant'
import { calculateTransposition } from './transposition'
import n2f from 'num2fraction'

export const calculateInverse = (
	mat: number[][],
	doNotConvertToFraction?: boolean
) => {
	if (mat.length <= 1 || mat.length >= 6) return undefined
	const determinant = calculateNxNDeterminant(mat)

	if (determinant === 0) return undefined

	// M^-1 = Adj(M)^T / Det(M)
	// Now we need to find the adjoint matrix

	// We create a matrix of size the size of the 'mat' where we'll substitute the adjoint values
	const adjointMatrix = new Array(mat.length)
		.fill(null)
		.map(() => new Array(mat[0].length).fill(0)) // Ensure each row is a separate array

	let adjointTrasposedMatrix
	if (mat.length > 2) {
		for (let j = 0; j < mat.length; j++) {
			for (let i = 0; i < mat.length; i++) {
				const newMatrix = mat.map(r => [...r])
				newMatrix[i] = new Array(mat.length).fill(0)
				for (let k = 0; k < mat.length; k++) {
					newMatrix[k][j] = 0
				}

				const adjointReducedMatrix = reduceMatrix(newMatrix)
				const adjointDeterminant = calculateNxNDeterminant(adjointReducedMatrix)

				adjointMatrix[i][j] = adjointDeterminant * Math.pow(-1, i + j)
			}
		}

		adjointTrasposedMatrix = calculateTransposition(adjointMatrix)
		for (let i = 0; i < adjointTrasposedMatrix.length; i++) {
			for (let j = 0; j < adjointTrasposedMatrix[i].length; j++) {
				if (doNotConvertToFraction) {
					adjointTrasposedMatrix[i][j] =
						adjointTrasposedMatrix[i][j] / determinant
				} else {
					adjointTrasposedMatrix[i][j] = n2f(
						adjointTrasposedMatrix[i][j] / determinant
					)
				}
			}
		}
	} else {
		// [[00, 01],
		// [10, 11]]
		if (doNotConvertToFraction) {
			adjointMatrix[0][0] = mat[1][1] / determinant
			adjointMatrix[1][1] = mat[0][0] / determinant
			adjointMatrix[0][1] = -mat[1][0] / determinant
			adjointMatrix[1][0] = -mat[0][1] / determinant
		} else {
			adjointMatrix[0][0] = n2f(mat[1][1] / determinant)
			adjointMatrix[1][1] = n2f(mat[0][0] / determinant)
			adjointMatrix[0][1] = n2f(-mat[1][0] / determinant)
			adjointMatrix[1][0] = n2f(-mat[0][1] / determinant)
		}

		adjointTrasposedMatrix = calculateTransposition(adjointMatrix)
	}

	return adjointTrasposedMatrix
}
