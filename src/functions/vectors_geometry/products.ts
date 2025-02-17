import { calculateNxNDeterminant } from '../matrix/determinant'

const dotProduct = (u: number[], v: number[]) => {
	let result = 0
	for (let i = 0; i < u.length; i++) {
		result += u[i] * v[i]
	}

	return result
}

const crossProduct = (u: number[], v: number[]) => {
	return {
		i: u[1] * v[2] - u[2] * v[1],
		j: u[2] * v[0] - u[0] * v[2],
		k: u[0] * v[1] - u[1] * v[0]
	}
}

const mixedProduct = (u: number[], v: number[], w: number[]) => {
	const determinant = calculateNxNDeterminant([u, v, w])

	return determinant
}

export const PRODUCTS = {
	DOT: dotProduct,
	CRO: crossProduct,
	MIX: mixedProduct
}
