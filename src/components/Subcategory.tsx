import Link from 'next/link'

interface SubCategoryProps {
	title: string
	description: string
	icon: React.ReactNode
	additionalClasses?: string
	category: string
}

const SubCategory: React.FC<SubCategoryProps> = ({
	title,
	description,
	icon,
	additionalClasses,
	category
}) => {
	const slug = title.split(' ').join('_').toLowerCase()

	return (
		<Link
			href={`/${category.toLowerCase()}/${slug}`}
			className={`bg-amber-100 text-black px-10 py-5 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 text-xl transition-all hover:scale-105 ${additionalClasses}`}
		>
			<div className='items-center justify-center flex gap-5'>
				{icon}
				<p>{title}</p>
			</div>

			<p className='text-base opacity-75 text-justify'>{description}</p>
		</Link>
	)
}

export default SubCategory
