import { useState, useRef } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

import { motion, useViewportScroll, useTransform } from 'framer-motion' 

import { 
  ParallaxContainer,

} from './styles'

import styles from '../styles/Home.module.css'

export const Example = () => {
    const constraintsRef = useRef(null);

    return (
        <>
            <motion.div 
              className={styles['drag-area']} 
              ref={constraintsRef} 
            />

            <motion.div
              drag 
              dragConstraints={constraintsRef} 
              className={styles.dragItem} 
            />
        </>
    )
}

const Box = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll()
  const yValue = useTransform( scrollYProgress, [0, 0.5, 1], [0, 50, 100*speed] )

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      transition={{
        duration: 1,
      }}

      style={{
        y: yValue
      }}
    >
      <Image src='/img/beco.jpg' width={500} height={290} />
    </motion.div>
  )
}

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <ParallaxContainer>
      <div>
        <Box speed={2}/>
        <Box speed={0}/>
        <Box speed={-2}/>
      </div>

      {/* <div className={styles['test-drag']}>
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
        <Example key={count} />
      </div> */}
    </ParallaxContainer>
  )
}

export default Home
