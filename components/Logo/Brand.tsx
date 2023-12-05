import React from 'react'
import { Layers3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string
}

const Brand = ({className}:Props) => {
  return (
    <div className={cn("flex items-center pb-3",className)}>
        <Layers3 className='w-6 h-6 '/>
        <span className='font-bold text-2xl ms-2 '>Documentary</span>
    </div>
  )
}

export default Brand