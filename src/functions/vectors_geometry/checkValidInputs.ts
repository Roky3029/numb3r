export const checkNonNaNVector = (u: number[], v?: number[]) => {
	if (u.some(el => Number.isNaN(el)) || v?.some(el => Number.isNaN(el)))
		return false

	return true
}
// This functions checks if the vectors introduced are correct, if they are, returns true, otherwise returns false
export const checkValidInputs = (
	u: number[],
	v: number[],
	w: number[],
	operation: string
) => {
	if (u.some(el => Number.isNaN(el)) || v.some(el => Number.isNaN(el)))
		return false

	if (operation === 'MIX' && w.some(el => Number.isNaN(el))) return false

	return true
}
