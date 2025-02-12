const fromBinaryToDecimal = (num: number[]) => {
	const reversedNumber = num.reverse()

	let decimal = 0
	for (let i = 0; i < reversedNumber.length; i++) {
		decimal += Math.pow(2, i) * reversedNumber[i]
	}

	return decimal
}

const splitEvenlyArray = (num: number[], size: number) => {
	const resultado = []

	for (let i = num.length; i > 0; i -= size) {
		const subarray = num.slice(Math.max(0, i - size), i)

		while (subarray.length < size) subarray.unshift(0)

		resultado.unshift(subarray)
	}

	return resultado
}

const fromBinaryToOctal = (num: number[]) => {
	const splitted = splitEvenlyArray(num, 3)
	let decimal = ''

	splitted.map(subgroup => {
		const digit = fromBinaryToDecimal(subgroup)
		if (digit !== 0) decimal += digit
	})

	return decimal
}

const HEX_LETTERS = {
	10: 'A',
	11: 'B',
	12: 'C',
	13: 'D',
	14: 'E',
	15: 'F'
}

const fromBinaryToHex = (num: number[]) => {
	const splitted = splitEvenlyArray(num, 4)
	let decimal = ''

	splitted.map(subgroup => {
		const digit = fromBinaryToDecimal(subgroup)

		if (digit >= 10) decimal += HEX_LETTERS[digit as keyof typeof HEX_LETTERS]
		else if (digit !== 0) decimal += digit
	})

	console.log(decimal)
	return decimal
}

export const FROM_BINARY_CONVERSIONS = {
	DEC: fromBinaryToDecimal,
	OCT: fromBinaryToOctal,
	HEX: fromBinaryToHex
}
