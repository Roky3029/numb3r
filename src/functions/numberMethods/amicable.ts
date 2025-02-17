const sumOfDivisors = (n: number) => {
	let sum = 1
	for (let i = 2; i <= n / 2; i++) {
		if (n % i == 0) sum += i
	}

	return sum
}

export const isAmicable = (num1: number, num2: number) => {
	return num1 == sumOfDivisors(num2) && num2 == sumOfDivisors(num1)
}
