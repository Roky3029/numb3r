export const calculateTransposition = (values: number[][]) => {
	const rows = values.length
	const cols = values[0].length

	// Create a result matrix for the transpose
	const res = Array.from({ length: cols }, () => new Array(rows))

	// Fill res with transposed values of mat
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			res[j][i] = values[i][j]
		}
	}
	return res
}
