export const calculateTransposition = (values: number[][]) => {
	const newMatrix = values.map(r => [...r])

	for (let i = 0; i < values.length; i++) {
		for (let j = 0; j < values[i].length; j++) {
			newMatrix[i][j] = values[j][i]
		}
	}

	console.log(newMatrix)

	return newMatrix
}
