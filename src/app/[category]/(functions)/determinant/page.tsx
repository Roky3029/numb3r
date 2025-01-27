'use client'

import Matrix from '@/components/implementations/determinant/Matrix'
import { checkCategory } from '@/functions/checkCategory'
import { createMatrix } from '@/functions/matrix/determinant'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const PARENTHESIS_SIZES = [
	'text-[200px]',
	'text-[250px]',
	'text-[300px]',
	'text-[400px]'
]

const Determinant = () => {
	const router = useRouter()
	const [isAppFromCategory, setIsAppFromCategory] = useState(true)
	const [size, setSize] = useState(3)
	const [values, setValues] = useState([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	])

	const path = usePathname().split('/')

	useEffect(() => {
		const checkIfAppCategoryIsCorrect = async () => {
			const validate = await checkCategory(path[1], path[2])
			setIsAppFromCategory(validate)
		}

		checkIfAppCategoryIsCorrect()
	}, [isAppFromCategory, path])

	if (!isAppFromCategory) router.push('/404')

	const handleMatrixScalation = (scaling: string) => {
		if ((size === 2 && scaling === '-') || (size === 5 && scaling === '+'))
			return

		if (scaling === '-') {
			setSize(size - 1)

			const newMat = createMatrix(size - 1, 0, values)
			setValues(newMat as number[][])
			return
		}

		setSize(size + 1)
		const newMat = createMatrix(size + 1, 0, values)
		setValues(newMat as number[][])
	}

	const handleDeterminantCalculation = () => {
		console.log(values)
	}

	return (
		<>
			<h1>Matrix determinant</h1>
			<p>
				Calculate a matrix determinant of a 2x2, 3x3, 4x4, or even larger sizes
				with this calculator
			</p>

			<div className='flex items-center justify-center gap-10'>
				<button
					className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg '
					onClick={() => handleMatrixScalation('-')}
				>
					-1
				</button>
				<button
					className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg '
					onClick={() => handleMatrixScalation('+')}
				>
					+1
				</button>

				<button
					className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg '
					onClick={() => handleDeterminantCalculation()}
				>
					Calculate
				</button>
			</div>

			<div className='text-center flex items-center justify-center'>
				<p className={`${PARENTHESIS_SIZES[size - 2]}`}>(</p>
				<Matrix size={size} values={values} setValues={setValues} />
				<p className={`${PARENTHESIS_SIZES[size - 2]}`}>)</p>
			</div>
		</>
	)
}

export default Determinant
