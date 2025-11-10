const HeroSVGAnimation = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 820 832'
      preserveAspectRatio='xMidYMid slice'
      style={{ height: '100%', width: 'auto' }}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M191 262.872L281.957 221.425L305 211V246.853C305 247.463 256.894 268.466 232.84 278.891L305 295.673V330L191 295.673V262.872Z'
        stroke='var(--accent)'
        strokeWidth='12'
      />
      <path
        d='M794.72 740.943L719.938 767.19L701 773.777L704.428 744.017C704.486 743.511 743.95 730.391 763.674 723.894L709.095 703.493L712.377 675L797.856 713.716L794.72 740.943Z'
        stroke='var(--accent)'
        strokeWidth='12'
      />
      <path
        d='M676.862 772.554L692.566 670.353L688.914 662.35L671.613 779.161L676.862 772.554Z'
        stroke='var(--accent)'
        strokeWidth='6'
      />
    </svg>
  )
}

interface HeroBgAnimationProps {
  img: string
}

const HeroBgAnimation = (props: HeroBgAnimationProps) => {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute inset-0 overflow-hidden flex items-center justify-center'>
        <div className='flex justify-center h-full w-full' style={{ transform: 'translateX(-4%)' }}>
          <HeroSVGAnimation />
        </div>
      </div>
      <div className='absolute inset-0 overflow-hidden flex items-end justify-center'>
        <img
          src={props.img}
          alt='Background'
          className=' w-2/3 h-auto min-h-full object-contain object-bottom'
          style={{ transform: 'translateY(0%)' }}
        />
      </div>
    </div>
  )
}

export default HeroBgAnimation
