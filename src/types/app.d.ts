import { IconType } from 'react-icons'

interface IApp {
	id: string
	title: string
	description: string
	icon: IconType
}

export interface ICategory {
	name: string
	color: string
	icon: IconType
	apps: IApp[]
}
