// the input value is stored as a string
export const useCheckValidNumberFormat = (num: string, type: string) => {
	//////////////////////////// DECIMAL ////////////////////////////
	if (type === 'DEC') {
		if (+num > 10e10 || +num < 0 || num.match('-'))
			return { msg: 'Invalid number' }

		const regExp = /[a-zA-Z]/g

		if (regExp.test(num))
			return { msg: 'A number in decimal format cannot contain letters' }

		return { msg: '' }
		//////////////////////////// OCTAL ////////////////////////////
	} else if (type === 'OCT') {
		if (num.length > 10 || +num < 0 || num.match('-'))
			return { msg: 'Invalid number' }

		const regExp = /[a-zA-Z]/g

		if (regExp.test(num))
			return { msg: 'A number in octal format cannot contain letters' }

		if (num.match('8') || num.match('9'))
			return { msg: 'In octal a number cannot contain either 8 or 9' }

		return { msg: '' }

		//////////////////////////// BINARY ////////////////////////////
	} else if (type === 'BIN') {
		if (num.length > 15 || +num < 0 || num.match('-'))
			return { msg: 'Invalid number' }

		if (!num.match('0') && !num.match('1'))
			return {
				msg: 'In binary a number is only represented by either 0s or 1s'
			}
		return { msg: '' }

		//////////////////////////// HEXADECIMAL ////////////////////////////
	} else if (type === 'HEX') {
		if (num.length > 8 || +num < 0 || num.match('-'))
			return { msg: 'Invalid number' }

		const reg = /^[0-9A-Fa-f]+$/

		if (!reg.test(num))
			return {
				msg: 'A number in HEX must contain numbers from 0 to 9 and / or letters from A to F'
			}

		return { msg: '' }
	}

	return { msg: 'Unknown format' }
}
