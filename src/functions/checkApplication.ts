'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { checkCategory } from './checkCategory'

export const useCheckApplication = () => {
	const router = useRouter()
	const [isAppFromCategory, setIsAppFromCategory] = useState(true)
	const path = usePathname().split('/')

	useEffect(() => {
		const checkIfAppCategoryIsCorrect = async () => {
			const validate = await checkCategory(path[1], path[2])
			if (!validate) {
				// Redirigir inmediatamente si la categoría no es válida
				router.push('/404')
			} else {
				setIsAppFromCategory(validate)
			}
		}

		checkIfAppCategoryIsCorrect()
	}, [path, router])

	return isAppFromCategory
}
