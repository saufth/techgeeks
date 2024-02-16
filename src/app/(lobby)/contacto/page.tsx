import { type Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/forms/contact-form'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Contáctanos',
  description: siteConfig.description
}

export default function ContactPage () {
  return (
    <>
      <div className='pt-spacing-6 pb-spacing-7'>
        <div className='container'>
          <h1 className='f-display-3 font-header text-gradient text-balance'>
            Ponte en contacto con nosotros
          </h1>
          <div className='cols-container mt-spacing-5'>
            <div className='w-full lg:w-5-cols relative mt-6 lg:mt-0 order-2 lg:order-1'>
              <ContactForm />
            </div>
            <div className='w-full lg:w-7-cols order-1 lg:order-2 bg-secondary'>
              <Image
                src='/images/contact-hero.webp'
                alt='Dos hombres de negocios discutiendo en una oficina moderna'
                width={2840}
                height={2840}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
