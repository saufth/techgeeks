import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  type CardDataProps
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function ServiceCard ({ card, className, ...props }: CardDataProps) {
  return (
    <Card
      as='article'
      className={cn(
        'bg-gradient-to-t from-card via-background to-background py-[3px] px-[3px] sm:p-[3px] rounded-0',
        className
      )}
      {...props}
    >
      <div className='w-full h-full rounded-0 bg-background pt-0 pb-6 px-0 sm:px-0 sm:pt-0 sm:pb-8'>
        <CardContent>
          {card.image && (
            <Image
              src={card.image.src}
              alt={card.image.alt}
              width={card.image.width}
              height={card.image.height}
              sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
              loading='lazy'
              className='rounded-t-0'
            />
          )}
        </CardContent>
        <CardHeader className='space-y-1.5 sm:space-y-2 lg:space-y-2 mt-spacing-4 px-4'>
          {card.label && (
            <Badge className='dark:bg-zinc-900' variant='outline'>
              <span className='text-xs'>
                {card.label}
              </span>
            </Badge>
          )}
          <h3>
            <span className='f-heading-3 text-gradient font-header'>
              {card.title}
            </span>
          </h3>
          <div className='mt-spacing-3'>
            {typeof card.description === 'string'
              ? (
                <div className='flex items-center gap-x-2'>
                  <p className='f-body-1 text-muted-foreground text-balance'>
                    {card.description}
                  </p>
                </div>
                )
              : card.description && (
                <ul className='space-y-5'>
                  {card.description.map((description, key) => (
                    <li className='flex items-center gap-x-2' key={key}>
                      <p className='f-body-1 text-muted-foreground text-balance'>
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </CardHeader>
      </div>
    </Card>
  )
}
