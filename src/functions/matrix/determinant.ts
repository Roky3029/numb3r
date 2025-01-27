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
