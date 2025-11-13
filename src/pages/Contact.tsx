import { motion } from 'motion/react'
import SocialMedia from '../components/animations/SocialMedia'
import emailjs from '@emailjs/browser'
import { emailConfig, assertEmailConfig } from '../config/email'
import { useRef } from 'react'

const ContactMeForm = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
        if (!assertEmailConfig()) return
        const { serviceId, templateId, publicKey } = emailConfig
        emailjs
          .sendForm(serviceId, templateId, form.current, { publicKey })
        .then(
          (result: { text: string }) => {
            console.log(result.text)
          },
          (error: { text: string }) => {
            console.log(error.text)
          }
        )
    }
  }

  return (
    <div className='w-full flex items-center justify-center mb-4 px-4'>
      <motion.form
        ref={form}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className='flex flex-col gap-4 w-full max-w-md mt-8 skeleton-bg p-6 rounded-lg'
        onSubmit={sendEmail}
      >
        <h2 className='text-accent font-semibold italic text-left mb-4 text-2xl'>
          Send me a message directly
        </h2>
        <input
          type='text'
          placeholder='Your Name'
          name='user_name'
          required
          className='p-3 rounded-full skeleton-bg'
        />
        <input
          type='email'
          placeholder='Your Email'
          name='user_email'
          required
          className='p-3 rounded-full skeleton-bg'
        />
        <textarea
          placeholder='Your Message'
          name='message'
          required
          className='p-3 rounded-lg skeleton-bg min-h-20'
        />
        <button
          type='submit'
          className='bg-accent text-(--bg) font-semibold py-3 rounded-full hover:bg-accent/90 transition'
        >
          Send Message
        </button>
      </motion.form>
    </div>
  )
}

const Contact = () => {
  return (
    <div
      id='contact'
      className='relative min-h-screen flex flex-col overflow-hidden skill-radial'
    >
      <div className='relative z-10 w-full flex flex-col items-center justify-center'>
        <div className='inline-block'>
          <h1 className='text-4xl font-bold mt-32 md:mt-32'>Contact Me</h1>
          <motion.div
            className='h-1 bg-accent mt-2 rounded-full'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
          />
        </div>
      </div>
      <div className='mt-4'>
        <SocialMedia viewOnce={false} />
      </div>
      <h2 className='text-accent font-semibold italic text-center mt-4 text-2xl'>
        OR
      </h2>
      <ContactMeForm />
    </div>
  )
}

export default Contact
