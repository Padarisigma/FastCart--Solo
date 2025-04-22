'use client'

import { Slider } from '@/shared/ui/slider'
import { useEffect, useState } from 'react'
import { Button } from '../shared/ui/button'

interface PriceRangeSliderProps {
	min?: number
	max?: number
	value: number[]
	onChange: (value: [number, number]) => void
}

export default function PriceRangeSlider({
	min = 0,
	max = 2000,
	value,
	onChange,
}: PriceRangeSliderProps) {
	const [localMin, setLocalMin] = useState(value[0])
	const [localMax, setLocalMax] = useState(value[1])
	useEffect(() => {
		setLocalMin(value[0])
		setLocalMax(value[1])
	}, [value])

	const handleApply = () => {
		if (localMin !== value[0] || localMax !== value[1]) {
			onChange([localMin, localMax])
		}
	}
	return (
		<div className=' hidden sm:flex flex-col gap-[30px]'>
			<Slider
				value={[localMin, localMax]}
				min={min}
				max={max}
				step={1}
				onValueChange={([newMin, newMax]:any) => {
					setLocalMin(newMin)
					setLocalMax(newMax)
				}}
				className='my-4'
			/>
			<div className='flex items-center justify-between gap-4'>
				<input
					type='number'
					value={localMin}
					onChange={e =>
						setLocalMin(Math.min(Number(e.target.value), localMax))
					}
					className='border rounded p-2 w-24 text-sm text-center'
				/>
				<span className='text-sm'>—</span>
				<input
					type='number'
					value={localMax}
					onChange={e =>
						setLocalMax(Math.max(Number(e.target.value), localMin))
					}
					className='border rounded p-2 w-24 text-sm text-center'
				/>
			</div>
			<Button
				className='px-[20px] py-[5px] cursor-pointer w-full my-[10px]'
				onClick={handleApply}
			>
				Apply
			</Button>
		</div>
	)
}
