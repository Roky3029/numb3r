interface PageTitleProps {
	title: string
	subtitle?: string
	additionalClasses?: string
}

export default function PageTitle({
	title,
	subtitle,
	additionalClasses
}: PageTitleProps) {
	return (
		<>
			<h1
				className={`text-3xl uppercase font-extrabold shadow-lg text-center py-4 ${additionalClasses}`}
			>
				{title}
			</h1>
			{subtitle ? <p className='text-lg pb-4'>{subtitle}</p> : ''}
		</>
	)
}
