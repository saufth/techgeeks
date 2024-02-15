import React from 'react'
import { Icons } from '@/components/icons'
import { Link, type LinkProps } from '@/components/ui/link'
import { cn } from '@/lib/utils'
import { siteNav } from '@/config/site'

const contactLink = siteNav.find(({ href }) => href === '/contacto')!

const CallToAction = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'href' | 'children'>>(
  ({ className, variant = 'default', size = 'full', ...props }, ref) => {
    return (
      <Link
        href={contactLink.href}
        className={cn('flex items-center bg-gradient gap-x-1', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {contactLink.title}
        <Icons.ArrowUpRight className='btn-icon w-4 h-4 fill-accent-foreground' />
      </Link>
    )
  }
)
CallToAction.displayName = 'CallToAction'

const aboutLink = siteNav.find(({ href }) => href === '/nosotros')!

const CallToAbout = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'href' | 'children'>>(
  ({ className, variant = 'ghost', size = 'full', ...props }, ref) => {
    return (
      <Link
        href={aboutLink.href}
        className={cn('flex items-center gap-x-1 bg-secondary/70 backdrop-filter backdrop-blur-lg backdrop-saturate-150', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {aboutLink.title}
        <Icons.ArrowUpRight className='btn-icon w-4 h-4 fill-secondary-foreground' />
      </Link>
    )
  }
)
CallToAbout.displayName = 'CallToAbout'

const servicesLink = siteNav.find(({ href }) => href === '/soluciones')!

const CallToServices = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'href' | 'children'>>(
  ({ className, variant = 'ghost', size = 'full', ...props }, ref) => {
    return (
      <Link
        href={servicesLink.href}
        className={cn('flex items-center gap-x-1 bg-secondary/70 backdrop-filter backdrop-blur-lg backdrop-saturate-150', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {servicesLink.title}
        <Icons.ArrowUpRight className='btn-icon w-4 h-4 fill-secondary-foreground' />
      </Link>
    )
  }
)
CallToServices.displayName = 'CallToServices'

const purposeLink = siteNav.find(({ href }) => href === '/razon-de-ser')!

const CallToPurpose = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'href' | 'children'>>(
  ({ className, variant = 'ghost', size = 'full', ...props }, ref) => {
    return (
      <Link
        href={purposeLink.href}
        className={cn('flex items-center gap-x-1 bg-secondary/70 backdrop-filter backdrop-blur-lg backdrop-saturate-150', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {purposeLink.title}
        <Icons.ArrowUpRight className='btn-icon w-4 h-4 fill-secondary-foreground' />
      </Link>
    )
  }
)
CallToPurpose.displayName = 'CallToPurpose'

export { CallToAction, CallToAbout, CallToPurpose, CallToServices }
