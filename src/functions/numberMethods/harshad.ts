export const isHarshad = (num: number) => {
	// A harshad number is a number which is divisible by the sum of its digits
	let n = num
	let sum = 0
	while (n > 0) {
		sum += n % 10
		n = Math.floor(n / 10)
	}

	if (num % sum === 0) return true
	return false
}
