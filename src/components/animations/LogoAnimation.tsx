import { motion, type Variants } from "motion/react"
import { useState } from "react"

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  }
}

interface LogoAnimationProps {
    fillColor?: string;
    width?: number;
    height?: number;
}

const LogoAnimation = ({ fillColor = "currentColor", width = 477, height = 298 }: LogoAnimationProps) => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  return (
    <div>
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 477 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stroke Animation */}
        <motion.path
          d="M393 0.0244141C393.665 0.00801734 394.331 0 395 0C440.287 0 477 37.8319 477 84.5C477 109.267 466.66 131.544 450.186 147C466.66 162.456 477 184.733 477 209.5C477 256.168 440.287 294 395 294C394.331 294 393.665 293.991 393 293.975V294L284.5 296L172 99L86.5 246.5H199.5L229 296L0 298L172 1L315.5 248L393 248.111V248.107C412.069 246.353 427 230.407 427 210.991C427 191.576 412.07 175.629 393 173.874V173.863L327.5 173.5L300.5 123.5L393 123.117V123.107C412.069 121.353 427 105.407 427 85.9912C427 66.5757 412.07 50.6287 393 48.874V49H258L229 0H393V0.0244141Z"
          stroke="currentColor"
          strokeWidth={4}
          fill="transparent"
          variants={draw}
          initial="hidden"
          animate="visible"
          onAnimationComplete={handleAnimationComplete}
        />

        {/* Fill fade-in after stroke animation */}
        {animationComplete && (
          <motion.path
            d="M393 0.0244141C393.665 0.00801734 394.331 0 395 0C440.287 0 477 37.8319 477 84.5C477 109.267 466.66 131.544 450.186 147C466.66 162.456 477 184.733 477 209.5C477 256.168 440.287 294 395 294C394.331 294 393.665 293.991 393 293.975V294L284.5 296L172 99L86.5 246.5H199.5L229 296L0 298L172 1L315.5 248L393 248.111V248.107C412.069 246.353 427 230.407 427 210.991C427 191.576 412.07 175.629 393 173.874V173.863L327.5 173.5L300.5 123.5L393 123.117V123.107C412.069 121.353 427 105.407 427 85.9912C427 66.5757 412.07 50.6287 393 48.874V49H258L229 0H393V0.0244141Z"
            fill={fillColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}
      </motion.svg>
    </div>
  )
}

export default LogoAnimation
