interface CategoryProps {
	color: string
	title: string
	icon: React.ReactNode
	children: React.ReactNode
}

const Category: React.FC<CategoryProps> = ({
	color,
	title,
	icon,
	children
}) => {
	return (
		<article
			className={`${color} px-5 py-3 w-full rounded-lg shadow-lg space-y-14`}
		>
			<div className='flex items-center gap-3 text-2xl '>
				<span>{icon}</span>
				<p>{title}</p>
			</div>

			<div className='grid grid-cols-4 gap-10'>{children}</div>
		</article>
	)
}

export default Category
