import { ICategory } from '@/types/app'

// Returns true if the application belongs to the category, both as arguments
export const checkCategory = async (category: string, application: string) => {
	const file = await import(`./../data/${category}`)
	const [data]: ICategory[] = Object.values(file)

	return data.apps.filter(app => app.id === application).length > 0
}
