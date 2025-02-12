const decTObin = (num: string) => {
	const digitArray = []

	let n = +num
	while (n > 0) {
		digitArray.push(n % 2)
		n = Math.floor(n / 2)
	}

	return digitArray.reverse()
}

const octTObin = (num: string) => {
	const digitArray: number[] = []

	// iterates through the digits and converts them to decimal, and them fills up to 3 spaces with 0s
	for (let i = 0; i < num.length; i++) {
		const digitBinary = decTObin(num[i])

		if (digitBinary.length < 3) {
			digitBinary.splice(0, 0, 0)
		}
		digitBinary.map(dig => digitArray.push(dig))
	}

	// If it finds some 0s in the left side part of the number, delete them as they are redundant
	while (digitArray.length > 0 && digitArray[0] === 0) {
		digitArray.shift() // Elimina el primer elemento si es 0
	}

	return digitArray
}

const HEX_LETTERS = {
	A: [1, 0, 1, 0],
	B: [1, 0, 1, 1],
	C: [1, 1, 0, 0],
	D: [1, 1, 0, 1],
	E: [1, 1, 1, 0],
	F: [1, 1, 1, 1]
}

const hexTObin = (num: string) => {
	const digitArray: number[] = []

	for (let i = 0; i < num.length; i++) {
		if (HEX_LETTERS[num[i] as keyof typeof HEX_LETTERS]) {
			for (
				let j = 0;
				j < HEX_LETTERS[num[i] as keyof typeof HEX_LETTERS].length;
				j++
			) {
				digitArray.push(HEX_LETTERS[num[i] as keyof typeof HEX_LETTERS][j])
			}
		} else {
			const digitBinary = decTObin(num[i])

			while (digitBinary.length < 4) {
				digitBinary.splice(0, 0, 0)
			}
			digitBinary.map(dig => digitArray.push(dig))
		}
	}

	while (digitArray.length > 0 && digitArray[0] === 0) {
		digitArray.shift() // Elimina el primer elemento si es 0
	}

	return digitArray
}

export const BINARY_CONVERSION = {
	OCT: octTObin,
	HEX: hexTObin,
	DEC: decTObin
}
