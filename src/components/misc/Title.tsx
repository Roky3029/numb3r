'use client'

import { useState, useEffect } from 'react'

const Title = () => {
	const [number, setNumber] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setNumber(Math.floor(Math.random() * (0 - 9 + 1) + 9))
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<h2 className='text-5xl font-bold uppercase'>Numb{number}r</h2>

			<p className='pt-10 w-1/2 text-lg font-semibold text-center'>
				From currency conversion to mathematical operations, in Numb3r you will
				find all the tools you need when operating with numbers. Want to find a
				determinant? Got it. Want to find how much does something cost in your
				own country&apos;s currency? Once again, got it.
			</p>
		</>
	)
}

export default Title
