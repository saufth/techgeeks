import Image from 'next/image'
import BackgroundVideo from '@/components/background-video'
import { CallToAction, CallToAbout } from '@/components/call-to-action'
import { ServiceCard } from '@/components/cards/service-card'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'
import TextSeparator from '@/components/text-separator'
import { filosophy } from '@/config/organization'

export default function IndexPage () {
  return (
    <>
      <section>
        <div className='full-bleed-container h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 flex flex-col justify-center bg-primary border-b 2xl:border-b-0'>
          <div className='relative z-10'>
            <div className='max-w-xs md:max-w-5xl mx-auto text-center px-gutter'>
              <h1 className='f-display-1 font-header text-balance max-w-[322px] xs:max-w-none [&_span]:text-white [&_.txts-separator]:hidden [&_.txts-separator]:md:inline [&>span]:block [&>span]:md:inline [&_span]:text-gradient'>
                <TextSeparator text={siteConfig.description} separator=' · ' />
              </h1>
              <p className='f-subhead-1 font-medium mt-spacing-4 text-white'>
                {siteConfig.slogan}.
              </p>
              <div className='w-full justify-center mt-spacing-5 flex flex-col md:flex-row gap-4'>
                <CallToAction />
                <CallToAbout />
              </div>
            </div>
          </div>
          <BackgroundVideo src='/video/home-hero.mp4' />
        </div>
      </section>
      <section className='py-spacing-6 overflow-hidden'>
        <div className='container-sm'>
          <div className='max-w-7xl mx-auto text-center'>
            <h2 className='f-display-3 font-header text-gradient md:pr-9 lg:pr-11'>
              Nuestras soluciones
            </h2>
            <p className='f-subhead-1 text-muted-foreground text-balance mt-spacing-3'>
              Utilizamos enfoques analíticos y creativos para identificar soluciones
              innovadoras que impulsen el crecimiento, mejoren la eficiencia
              operativa y aumenten la rentabilidad de tu empresa.
            </p>
          </div>
          <div className='cols-container gap-y-gutter mt-spacing-6'>
            {services.map((item, key) => (
              <ServiceCard className='w-6-cols md:w-4-cols lg:w-6-cols' card={item} key={key} />
            ))}
          </div>
        </div>
      </section>
      <section id='nosotros' className='border-t'>
        <div className='container-sm'>
          <div className='cols-container py-spacing-6'>
            <div className='w-6-cols md:w-4-cols lg:w-6-col relative'>
              <div className='sm:pr-9 xl:pr-0'>
                <h3 className='f-heading-1 font-header text-gradient'>
                  Nuestra filosofía
                </h3>
                <div>
                  {filosophy.map((filosophyItem, key) => (
                    <article className='mt-spacing-4' key={key}>
                      <h4 className='f-subhead-2 text-gradient font-semibold'>
                        {filosophyItem.title}
                      </h4>
                      <p className='mt-spacing-2 text-muted-foreground'>
                        {filosophyItem.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <CallToAbout className='mt-spacing-4' />
            </div>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols mt-10 md:mt-0'>
              <Image
                src='/images/home-filosophy.webp'
                alt=''
                width={2840}
                height={2840}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}