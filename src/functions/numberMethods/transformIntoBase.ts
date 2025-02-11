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

	for (let i = 0; i < num.length; i++) {
		const digitBinary = decTObin(num[i])

		if (digitBinary.length < 3) {
			digitBinary.splice(0, 0, 0)
		}
		console.log(digitBinary)
		digitBinary.map(dig => digitArray.push(dig))
	}

	while (digitArray.length > 0 && digitArray[0] === 0) {
		digitArray.shift() // Elimina el primer elemento si es 0
	}
	console.log(digitArray)
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

			if (digitBinary.length < 3) {
				digitBinary.splice(0, 0, 0)
			}
			digitBinary.map(dig => digitArray.push(dig))
		}
	}

	while (digitArray.length > 0 && digitArray[0] === 0) {
		digitArray.shift() // Elimina el primer elemento si es 0
	}
}

export const transformIntoBase = (
	num1: string,
	baseFrom: string,
	baseTo: string
) => {
	// First we will have to convert the number to binary as it is the easiest way to switch between bases
	hexTObin('AB')
	if (baseFrom !== 'BIN') {
	}

	return 2
}

// TODO: Now that the <BASE>-to-BINARY works, we need to convert from BINARY to the selected type baseTo
