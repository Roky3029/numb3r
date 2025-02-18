import { ICategory } from '../../types/app'
import { PiVectorThreeFill } from 'react-icons/pi'
import { MdMultipleStop } from 'react-icons/md'
import { TbAngle } from 'react-icons/tb'
import { FaWeightHanging } from 'react-icons/fa6'

export const vectors_geometryApplications: ICategory = {
	name: 'Vectors and geometry',
	color: 'bg-emerald-500',
	icon: PiVectorThreeFill,
	apps: [
		{
			id: 'products',
			title: 'Products',
			description:
				'Calculate the dot product, the cross or the mixed product just by selecting one of them and introducing the data.',
			icon: MdMultipleStop
		},
		{
			id: 'angle_between_vectors',
			title: 'Angle between vectors',
			description:
				'Calculate (in degrees) the angle between two vectors in a three-dimensional space',
			icon: TbAngle
		},
		{
			id: 'magnitude',
			title: 'Magnitude',
			description:
				"Calculates the total length of a vector given it's three coordinates",
			icon: FaWeightHanging
		}
	]
}
