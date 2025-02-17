import { PARENTHESIS_SIZES } from '@/functions/matrix/parenthesisSizes'
import VectorInput from './VectorInput'

export default function Vector({
	vectorName,
	state
}: {
	vectorName: string
	state: {
		variable: number[]
		setter: React.Dispatch<React.SetStateAction<number[]>>
	}
}) {
	const matrix = []
	for (let i = 0; i < 3; i++) {
		matrix.push(0)
	}

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='flex items-center justify-center flex-col text-4xl'>
				<p>&#x20d7;{vectorName}</p>

				<span className=''> | |</span>
			</div>

			<div className='flex items-center justify-center gap-2'>
				<p className={`${PARENTHESIS_SIZES[1]}`}>[</p>

				<div className='flex items-center justify-center flex-col top-5 gap-7 relative'>
					{matrix.map((_, ind) => (
						<VectorInput key={ind} state={state} index={ind} />
					))}
				</div>

				<p className={`${PARENTHESIS_SIZES[1]}`}>]</p>
			</div>
		</div>
	)
}
