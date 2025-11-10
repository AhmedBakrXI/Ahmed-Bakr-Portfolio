const HeroSVGAnimation = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 776 832'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='460.698' cy='532' r='300' fill='#2DD4BF' fillOpacity='0.61' />
      <path
        d='M210.145 788.763L350.035 164.342L759.25 583.899L210.145 788.763Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M210.145 788.763L350.035 164.342L759.25 583.899L210.145 788.763Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M210.145 788.763L350.035 164.342L759.25 583.899L210.145 788.763Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M210.145 788.763L350.035 164.342L759.25 583.899L210.145 788.763Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M191.365 772.027L374.601 158.923L753.458 606.083L191.365 772.027Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M191.365 772.027L374.601 158.923L753.458 606.083L191.365 772.027Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M191.365 772.027L374.601 158.923L753.458 606.083L191.365 772.027Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M191.365 772.027L374.601 158.923L753.458 606.083L191.365 772.027Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M177.139 757.638L394.595 155.82L747.682 623.597L177.139 757.638Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M177.139 757.638L394.595 155.82L747.682 623.597L177.139 757.638Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M177.139 757.638L394.595 155.82L747.682 623.597L177.139 757.638Z'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M177.139 757.638L394.595 155.82L747.682 623.597L177.139 757.638Z'
        stroke='black'
        strokeWidth='5'
      />
      <rect
        x='235.743'
        y='414.923'
        width='133.191'
        height='133.191'
        transform='rotate(44.1497 235.743 414.923)'
        fill='url(#pattern0_7_116)'
      />
      <rect
        x='625.698'
        y='397'
        width='135'
        height='135'
        fill='url(#pattern1_7_116)'
      />
      <rect
        x='577.698'
        y='252'
        width='43'
        height='43'
        fill='url(#pattern2_7_116)'
      />
      <rect
        x='234.698'
        y='283'
        width='60'
        height='60'
        fill='url(#pattern3_7_116)'
      />
      <rect
        x='333.698'
        y='373'
        width='23'
        height='23'
        fill='url(#pattern4_7_116)'
      />
      <defs>
        <pattern
          id='pattern0_7_116'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image0_7_116' transform='scale(0.00195312)' />
        </pattern>
        <pattern
          id='pattern1_7_116'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            href='#image1_7_116'
            transform='translate(-0.000417014) scale(0.000834028)'
          />
        </pattern>
        <pattern
          id='pattern2_7_116'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image2_7_116' transform='scale(0.00195312)' />
        </pattern>
        <pattern
          id='pattern3_7_116'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image3_7_116' transform='scale(0.00195312)' />
        </pattern>
        <pattern
          id='pattern4_7_116'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image4_7_116' transform='scale(0.00195312)' />
        </pattern>
      </defs>
    </svg>
  )
}

interface HeroBgAnimationProps {
  img: string
}

const HeroBgAnimation = (props: HeroBgAnimationProps) => {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute inset-0 overflow-hidden flex items-end justify-center h-auto'>
        <div className='flex justify-center w-full'>
          <HeroSVGAnimation />
        </div>
      </div>

      {/* place image at the bottom: use flex align-end and object-bottom so the image's bottom aligns with container bottom */}
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
