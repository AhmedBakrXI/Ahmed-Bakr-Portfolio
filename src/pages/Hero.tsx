import Layout from '../components/Layout'
import HeroImage from '../assets/me.png'
import HeroBgAnimation from '../components/animations/HeroBgAnimation'

const HeroSection = () => {
  return (
    <Layout>
      <section id='hero'>
        <div className='flex flex-col md:flex-row items-center min-h-screen md:h-screen overflow-hidden'>
          <div className='w-full h-[50vh] md:w-1/2 md:h-full'>
            <div className='flex flex-col items-center justify-center h-full'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                Welcome to My Portfolio
              </h1>
              <p className='text-lg md:text-xl mb-8 text-center px-4'>
                Discover my projects, skills, and experience in web development.
              </p>
              <a
                href='#about'
                className='px-6 py-3 bg-(--accent) text-white rounded-full hover:bg-(--accent-dark) transition-colors duration-300'
              >
                Learn More
              </a>
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
