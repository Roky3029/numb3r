import Error404 from '@/components/misc/Error404'
// import PageTitle from '@/components/misc/PageTitle'
// import SubCategory from '@/components/Subcategory'
// import { ICategory } from '@/types/app'
// import { redirect } from 'next/navigation'

interface PageProps {
	params: Promise<{ category: string }>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = async ({ params }: PageProps) => {
	// const { category } = await params

	// const linkToDataFile = `./../../data/apps/${category}`
	// let file
	// try {
	// 	file = await import(linkToDataFile)
	// 	console.log(file)
	// 	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// } catch (error) {
	// 	return redirect('/404')
	// }
	// const [data]: ICategory[] = Object.values(file)

	return (
		<>
			{/* <div className='grid place-content-center'>
				<div className='flex items-center justify-center gap-5 w-full'>
					<PageTitle title={data.name} />
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center w-full px-10 md:px-20 lg:px-32 gap-10 my-10'>
					{data.apps.map(app => (
						<SubCategory
							description={app.description}
							icon={<app.icon />}
							title={app.title}
							key={app.title}
							additionalClasses={`${data.color} opacity-90`}
							category={data.name}
						/>
					))}
				</div>
			</div> */}
			<Error404 />
		</>
	)
}

export default Home
