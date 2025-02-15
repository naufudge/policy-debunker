import React from 'react'

interface NumberStatsProps {
    heading: string;
    number: string | number;
    percentage: string | number;
}

const NumberStats: React.FC<NumberStatsProps> = ({ heading, number, percentage }) => {
  return (
    <div className='p-8 flex flex-col justify-between h-full'>
        <h1 className='font-medium text-xl'>{heading}</h1>
        <div>
            <div className='font-medium text-[3.5rem]'>{number}</div>
            <div className='flex gap-4 place-items-center'>
                <div className='rounded-full bg-[#3E4EA5] w-fit px-4 py-1'>{percentage}</div>
                <div>Than last year</div>
            </div>
        </div>
    </div>
  )
}

export default NumberStats