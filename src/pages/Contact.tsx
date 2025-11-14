import { motion } from 'motion/react'
import SocialMedia from '../components/animations/SocialMedia'
import emailjs from '@emailjs/browser'
import { emailConfig, assertEmailConfig } from '../config/email'
import { useEffect, useRef, useState } from 'react'

const ContactMeForm = () => {
  const form = useRef<HTMLFormElement>(null)
  const [toast, setToast] = useState<null | {
    type: 'info' | 'success' | 'error'
    text: string
  }>(null)
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      if (!assertEmailConfig()) {
        setToast({ type: 'error', text: 'Email service not configured.' })
        setStatus('error')
        return
      }
      setStatus('sending')
      setToast({ type: 'info', text: 'Sending…' })
      const { serviceId, templateId, publicKey } = emailConfig
      emailjs.sendForm(serviceId, templateId, form.current, { publicKey }).then(
        (result: { text: string }) => {
          console.log(result.text)
          setStatus('success')
          setToast({
            type: 'success',
            text: 'Thanks! Your message has been sent.'
          })
          if (form.current) {
            try {
              form.current.reset()
            } catch {
              // ignore
            }
          }
        },
        (error: { text: string }) => {
          console.log(error.text)
          setStatus('error')
          setToast({ type: 'error', text: 'Failed to send. Please try again.' })
        }
      )
    }
  }

  useEffect(() => {
    if (!toast) return
    if (toast.type === 'info') return
    const t = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <div className='w-full flex items-center justify-center mb-4 px-4'>
      <motion.form
        ref={form}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className='flex flex-col gap-4 w-full max-w-md mt-8 skeleton-bg p-6 rounded-2xl'
        onSubmit={sendEmail}
      >
        <h2 className='text-accent font-semibold text-left mb-4 text-2xl'>
          Send me a message directly
        </h2>
        <input
          type='text'
          placeholder='Tell me your name'
          name='user_name'
          required
          className='p-3 rounded-full skeleton-bg'
        />
        <input
          type='email'
          placeholder='Drop your email here'
          name='user_email'
          required
          className='p-3 rounded-full skeleton-bg'
        />
        <textarea
          placeholder='What would you like to talk about?'
          name='message'
          required
          className='p-3 rounded-xl skeleton-bg min-h-20'
        />
        <button
          type='submit'
          disabled={status === 'sending'}
          className='bg-accent text-(--bg) font-semibold py-3 rounded-full transition disabled:opacity-70 disabled:cursor-not-allowed hover:bg-accent/90'
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </motion.form>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          role='status'
          aria-live='polite'
          className='fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:bottom-6 md:translate-x-0 z-50'
        >
          <div className='relative surface rounded-xl shadow px-4 py-3 min-w-[260px] max-w-[90vw] md:max-w-sm overflow-hidden'>
            <span
              aria-hidden
              className={`absolute left-0 top-0 h-full w-1 ${
                toast.type === 'success'
                  ? 'bg-chart-2'
                  : toast.type === 'error'
                  ? 'bg-destructive'
                  : 'bg-accent'
              }`}
            />
            <div className='pl-3 pr-1 text-(--text) text-sm'>{toast.text}</div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

const Contact = () => {
  return (
    <section
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
      <div className='flex justify-center items-center mt-4'>
        <div className='relative mx-4 w-full max-w-md overflow-clip'>
          <h2 className='text-accent font-semibold text-center text-2xl'>
            OR
          </h2>
          {/* Separator Lines */}
          <div className='absolute top-1/2 left-1/2 translate-x-8 translate-y-1/2 w-1/2 h-px bg-muted' />
          <div className='absolute top-1/2 right-1/2 -translate-x-8 translate-y-1/2 w-1/2 h-px bg-muted' />
        </div>
      </div>
      <ContactMeForm />
    </section>
  )
}

export default Contact
