import { magnitude } from './magnitude'
import { PRODUCTS } from './products'

function convertToDms(dd: number) {
	const absDd = Math.abs(dd)
	const deg = absDd | 0
	const frac = absDd - deg
	const min = (frac * 60) | 0
	let sec = frac * 3600 - min * 60
	// Round it to 2 decimal points.
	sec = Math.round(sec * 100) / 100
	return deg + '° ' + min + "' " + (Number.isNaN(sec) ? 0 : sec) + '"'
}

export const calculateAngle = (u: number[], v: number[]) => {
	const dotProduct = PRODUCTS['DOT'](u, v)
	const trigValue = dotProduct / (magnitude(u) * magnitude(v))
	const angleRadians = Math.acos(trigValue)
	return convertToDms((angleRadians * 180) / Math.PI)
}
