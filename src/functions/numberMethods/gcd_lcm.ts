const divisors = (num: number) => {
	const divs = []
	for (let i = 2; i <= num; i++) {
		if (num % i === 0) divs.push(i)
	}

	return divs
}

const gcd = (num1: number, num2: number) => {
	const divs1 = divisors(num1)
	const divs2 = divisors(num2)

	const coincidences = []

	for (let i = 0; i < divs1.length; i++) {
		for (let j = 0; j < divs2.length; j++) {
			if (divs1[i] === divs2[j]) coincidences.push(divs1[i])
		}
	}

	return coincidences[coincidences.length - 1]
}

const lcm = (num1: number, num2: number) => {
	// LCM is defined as lcm(a, b) = abs(a * b) / gcd(a, b)

	const numerator = Math.abs(num1 * num2)
	return numerator / gcd(num1, num2)
}

export const OPTIONS = {
	lcm: lcm,
	gcd: gcd
}
