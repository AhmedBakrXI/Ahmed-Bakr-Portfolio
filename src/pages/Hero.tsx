import Layout from '../components/Layout'
import HeroImage from '../assets/me.png'
import HeroBgAnimation from '../components/animations/HeroBgAnimation'

const HeroSection = () => {
  return (
    <Layout>
      <section id='hero' className='hero-radial'>
        <div className='flex flex-col md:flex-row items-center min-h-screen md:h-screen overflow-hidden'>
          <div className='w-full h-[50vh] md:w-1/2 md:h-full'>
            <div className='flex flex-col items-start justify-center h-full hero-left'>
              <div className='flex justify-center items-center gap-3'>
                <span className='inline-block w-2 h-2 rounded-full' style={{ backgroundColor: 'var(--accent)' }} />
                <span className='text-sm md:text-base font-medium text-muted'>Hello.</span>
              </div>

              <div className='flex items-center mt-4 md:mt-6'>
                <div className='h-0.5 w-12 bg-accent mr-4 hidden md:block' />
                <h2 className='text-xl md:text-2xl text-muted'>I'm <span className='ml-2 text-(--text) font-medium'>Ahmed Bakr</span></h2>
              </div>

              <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight'>
                Software Engineer
              </h1>

              <p className='text-base md:text-lg mt-4 mb-6 text-(--muted) max-w-lg'>
                I build digital products and experiences — web apps, components and polished UIs.
              </p>

              <div className='flex items-center gap-4'>
                <a href='#contact' className='btn-primary cursor-target'>Got a project?</a>

                <a href='/resume.pdf' className='btn-secondary cursor-target'>My resume</a>
              </div>
            </div>
          </div>
          <div className='w-full h-[50vh] flex justify-center items-center md:w-1/2 md:h-full relative'>
            <HeroBgAnimation img={HeroImage} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HeroSection
