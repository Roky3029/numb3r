interface ScaleButtonsAndComputeButtonProps {
	computeAction?: () => void
	additionalHandlingCode?: () => void
	handleScalation?: (scaling: string) => void
	addMatrixID?: string
}

export default function ScaleButtonsAndComputeButton({
	computeAction,
	additionalHandlingCode,
	handleScalation,
	addMatrixID
}: ScaleButtonsAndComputeButtonProps) {
	const handleMatrixScalation = (scaling: string) => {
		if (additionalHandlingCode) additionalHandlingCode()

		if (handleScalation) handleScalation(scaling)
	}

	return (
		<div className='flex items-center justify-center md:gap-10 flex-col md:flex-row gap-2'>
			<button
				className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg rounded-lg'
				onClick={() => handleMatrixScalation('-')}
			>
				{addMatrixID ? `${addMatrixID}:  -1` : '-1'}
			</button>
			<button
				className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg rounded-lg'
				onClick={() => handleMatrixScalation('+')}
			>
				{addMatrixID ? `${addMatrixID}:  +1` : '+1'}
			</button>

			{computeAction && (
				<button
					className='px-8 py-4 bg-slate-600 border-4 border-slate-800 transition-all hover:bg-slate-700 shadow-lg rounded-lg'
					onClick={() => computeAction()}
				>
					Calculate
				</button>
			)}
		</div>
	)
}
