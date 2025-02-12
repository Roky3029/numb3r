import { BINARY_CONVERSION } from './binaryConversions'
import { FROM_BINARY_CONVERSIONS } from './conversionsFromBinary'

export const transformIntoBase = (
	num1: string,
	baseFrom: string,
	baseTo: string
) => {
	// First we will have to convert the number to binary as it is the easiest way to switch between bases
	if (baseFrom !== 'BIN') {
		const binaryTransformation =
			BINARY_CONVERSION[baseFrom as keyof typeof BINARY_CONVERSION](num1)

		if (baseTo === 'BIN') return binaryTransformation.join('')

		return FROM_BINARY_CONVERSIONS[
			baseTo as keyof typeof FROM_BINARY_CONVERSIONS
		](binaryTransformation)
	}

	return FROM_BINARY_CONVERSIONS[
		baseTo as keyof typeof FROM_BINARY_CONVERSIONS
	](num1.split('').map(n => +n))
}
