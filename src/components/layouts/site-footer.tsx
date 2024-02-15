import NextLink from 'next/link'
import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='border-t py-spacing-7'>
      <div className='container-sm sm:flex sm:justify-between'>
        <div className='sm:mt-0 flex flex-col justify-between'>
          <div className='flex gap-x-2'>
            <NextLink href='/'>
              <Icons.Logoname className='w-auto h-4 sm:h-5 fill-white' />
              <span className='sr-only'>{siteConfig.name}</span>
            </NextLink>
            <span className='text-lg leading-none sm:text-xl sm:leading-none text-bold'>
              {`© ${new Date().getFullYear()}`}
            </span>
          </div>
          <div className='hidden sm:block'>
            <div className='text-sm sm:text-base text-muted-foreground'>
              Correo electrónico
            </div>
            <Link className='text-lg lg:text-xl underline px-0' href={`mailto:${contactEmail}`}>
              {contactEmail}
            </Link>
          </div>
        </div>
        <nav className='flex flex-col gap-y-6 mt-4 sm:mt-0'>
          <ul className='flex flex-col gap-y-3 sm:gap-y-4'>
            {siteNav.map((navItem, key) => (
              <li key={key}>
                {key < siteNav.length - 1
                  ? (
                    <Link href={navItem.href} className='text-base lg:text-lg'>
                      {navItem.title}
                    </Link>
                    )
                  : (
                    <CallToAction className='mt-1.5' size='default' />
                    )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='mt-4 block sm:hidden'>
          <div className='text-sm sm:text-base text-muted-foreground'>
            Correo electrónico
          </div>
          <Link className='text-lg lg:text-xl underline px-0' href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </footer>
  )
}
