import { motion } from 'motion/react'
import { Timeline } from 'primereact/timeline'

const Experiences = () => {
  const events = [
    {
      status: 'Ordered',
      date: '15/10/2020 10:30',
      icon: 'pi pi-shopping-cart',
      color: '#9C27B0',
      image: 'game-controller.jpg'
    },
    {
      status: 'Processing',
      date: '15/10/2020 14:00',
      icon: 'pi pi-cog',
      color: '#673AB7'
    },
    {
      status: 'Shipped',
      date: '15/10/2020 16:15',
      icon: 'pi pi-shopping-cart',
      color: '#FF9800'
    },
    {
      status: 'Delivered',
      date: '16/10/2020 10:00',
      icon: 'pi pi-check',
      color: '#607D8B'
    },
    {
      status: 'Delivered',
      date: '16/10/2020 10:00',
      icon: 'pi pi-check',
      color: '#607D8B'
    },
    {
      status: 'Delivered',
      date: '16/10/2020 10:00',
      icon: 'pi pi-check',
      color: '#607D8B'
    },
    {
      status: 'Delivered',
      date: '16/10/2020 10:00',
      icon: 'pi pi-check',
      color: '#607D8B'
    },
  ]

  return (
    <section
      id='experience'
      className='relative min-h-screen flex flex-col overflow-hidden experience-radial'
    >
      <div className='relative z-10 w-full flex flex-col items-center justify-center'>
        <div className='inline-block'>
          <h1 className='text-4xl font-bold mt-32 md:mt-32'>Experiences</h1>
          <motion.div
            className='h-1 bg-accent mt-2 rounded-full'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
          />
        </div>
        <Timeline
          value={events}
          align='alternate'
          className='w-full md:w-3/4'
          marker={() => (
            <span
              className='flex items-center justify-center w-4 h-4 rounded-full border-2 border-accent'
            />
          )}
          content={item => (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h3>{item.status}</h3>
              <p>{item.date}</p>
            </motion.div>
          )}
        />
      </div>
    </section>
  )
}

export default Experiences
