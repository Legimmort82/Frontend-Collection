// import { motion } from "framer-motion"

//TODO add [motion] to frist of the fragment that you want to add animate 

//* we can use CSS commands
<motion.h2 
  animate={{fontSize: 50, color: "#fef592"}}
>
  Framer Motion
</motion.h2>

//* and self commands
<motion.button
  animate={{y: 100, x:100 ,rotateZ: 180, scale: 1.5}}
>
  Button
</motion.button>

//* use [initial] attribiute to initial the start point of animate
<motion.button
  initial={{y: "-100vh"}}
  animate={{y: 100, rotateZ: 180, scale: 1.5}}
>
  Button
</motion.button>

//* use transition
<motion.button
  initial={{y: "-100vh"}}
  animate={{y: 100, rotateZ: 180, scale: 1.5}}
  transition={{delay: 1.5, duration: 2}}
>
  Button
</motion.button>

//* add type of animation into transition & 
//* and stiffness to initial speed of animate type 
<motion.button
  initial={{y: "-100vh"}}
  animate={{y: 100 ,rotateZ: 180, scale: 1.5}}
  transition={{delay: 1.5, duration: 2, type: "spring", stiffness: 100}}
>
  Button
</motion.button>

//* hover attribiute
// add [originX or Y] to block from X or Y position
<motion.button
  whileHover={{scale: 1.2, originX: 0}}
  transition={{type: "spring", stiffness: 200}}
>
  Button
</motion.button>

//* use variants
//! add transition in visible
const simpleVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 2
    }
  }
}
<motion.button
  variant={simpleVariant}
  initial="hidden"
  animate="visible"
>
  Button
</motion.button>

//* children variants
// add [when] in visible
//? [mass & dampig]
const simpleVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 2,
      mass: 0.5,
      damping: 8,
      when:"beforChildren",
      staggerChildren: 1
    }
  }
}
const childrenVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
<motion.div
  variant={simpleVariant}
  initial="hidden"
  animate="visible"
>
  <motion.button
    variant={childrenVariant}
    initial="hidden"
    animate="visible"
  >
    Button
  </motion.button>
</motion.div>

//* keyframe
// you can use {scale: [1.2,1,1.2,1,1.2,1,1.2,1]} to repeat the animate but we have [yoyo] 
// you can add infinity to yoyo
const buttonVariant ={
  hover: {
    scale: 1.2,
    transition: {
      yoyo: 8
    }
  }
}
<motion.button
  variant={buttonVariant}
  whileHover="hover"
>
  Button
</motion.button>

//* AnimatePresence
// we can add [exit]. use when we want add animation for exiting elements
const simpleVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 2
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}
<AnimatePresence>
  <motion.div
    variants={simpleVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    AnimatePresence
  </motion.div>
</AnimatePresence>