import { type Metadata } from 'next'
import BackgroundVideo from '@/components/background-video'
import { CallToAction } from '@/components/call-to-action'
import { InfoCard } from '@/components/cards/info-card'
import { values, history } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Nosotros',
  description: siteConfig.description
}

export default function AboutPage () {
  return (
    <>
      <section className='-mt-[60px] lg:-mt-20'>
        <div className='full-bleed-container h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 flex flex-col justify-center bg-primary border-b 2xl:border-b-0'>
          <div className='relative z-10'>
            <div className='max-w-xs md:max-w-4xl mx-auto text-center px-gutter'>
              <h1 className='f-display-1 font-header text-balance max-w-[322px] xs:max-w-none text-gradient'>
                Lorem ipsum dolor sit amet
              </h1>
              <p className='f-subhead-1 font-medium mt-spacing-4 text-white text-balance'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorum error.
              </p>
              <div className='w-full justify-center mt-spacing-5 flex flex-col md:flex-row gap-4'>
                <CallToAction />
              </div>
            </div>
          </div>
          <BackgroundVideo src='/video/about-hero.mp4' />
        </div>
      </section>
      <div>
        <section className='container-sm pt-spacing-7'>
          <div className='text-center'>
            <h2>
              <span className='f-heading-1 font-header text-gradient'>
                Nuestros valores
              </span>
            </h2>
            <p className='f-subhead-2 text-muted-foreground text-balance mt-spacing-3'>
              Los valores de TERRAT están integrados se ven reflejados en todas sus acciones y decisiones.
            </p>
          </div>
          <div className='cols-container gap-y-gutter mt-spacing-6'>
            {values.map((item, key) => (
              <InfoCard className='w-6-cols sm:w-8-cols lg:w-4-cols' card={item} key={key} />
            ))}
          </div>
          <div className='w-full justify-center mt-spacing-6 flex flex-col sm:flex-row gap-4'>
            <CallToAction />
          </div>
        </section>
        <section className='container-sm py-spacing-7 space-y-gutter'>
          <div>
            <h2 className='f-display-3 font-header text-gradient'>
              Nuestra historia
            </h2>
          </div>
          <div className='space-y-gutter'>
            {history.map((historyItem, key) => (
              <p className='f-subhead-2 text-muted-foreground' key={key}>
                {historyItem}
              </p>
            ))}
          </div>
          <div className='w-full justify-center pt-spacing-4 flex flex-col sm:flex-row gap-4'>
            <CallToAction />
          </div>
        </section>
      </div>
    </>
  )
}
