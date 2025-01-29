import { calculateNxNDeterminant, reduceMatrix } from './determinant'
import { calculateTransposition } from './transposition'
import n2f from 'num2fraction'

export const calculateInverse = (mat: number[][]) => {
	// if (mat.length < 3 || mat.length >= 6) return []
	const determinant = calculateNxNDeterminant(mat)

	if (determinant === 0) return undefined

	// M^-1 = Adj(M)^T / Det(M)
	// Now we need to find the adjoint matrix

	// We create a matrix of size the size of the 'mat' where we'll substitute the adjoint values
	const adjointMatrix = new Array(mat.length)
		.fill(null)
		.map(() => new Array(mat[0].length).fill(0)) // Ensure each row is a separate array

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

	const adjointTrasposedMatrix = calculateTransposition(adjointMatrix)
	for (let i = 0; i < adjointTrasposedMatrix.length; i++) {
		for (let j = 0; j < adjointTrasposedMatrix[i].length; j++) {
			adjointTrasposedMatrix[i][j] = n2f(
				adjointTrasposedMatrix[i][j] / determinant
			)
		}
	}

	return adjointTrasposedMatrix
}
