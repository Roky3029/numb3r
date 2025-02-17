import { BsPatchQuestion } from 'react-icons/bs'
import { PiMatrixLogoDuotone, PiSupersetProperOfFill } from 'react-icons/pi'
import { TbPigMoney } from 'react-icons/tb'
import { ICategory } from '../../types/app'

export const vectors_geometryApplications: ICategory = {
	name: 'Vectors and geometry',
	color: 'bg-emerald-500',
	icon: TbPigMoney,
	apps: [
		{
			id: 'products',
			title: 'Products',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiSupersetProperOfFill
		},
		{
			id: 'angle_between_vectors',
			title: 'Angle between vectors',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: TbPigMoney
		},
		{
			id: 'magnitude',
			title: 'Magnitude',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: PiMatrixLogoDuotone
		},
		{
			id: 'linear_dependence_checker',
			title: 'Linear dependence checker',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem quaerat asperiores quisquam rerum atque.',
			icon: BsPatchQuestion
		}
	]
}
