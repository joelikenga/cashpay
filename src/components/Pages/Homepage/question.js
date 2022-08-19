import instantFunds from "../stylesheet/instantFunds.module.css";
import {motion} from "framer-motion"

const Question = () => {

    const quest1Variants = {
          start:{
              x:-200,
              opacity:0
          },
          stop:{
              x:0,
              opacity:1,
              transition:{
                    type:"spring",
                    duration:1.5,
                    duration:1.5
              }
          }
    }

    const quest2Variants = {
      start:{
          x:-200,
          opacity:0
      },
      stop:{
          x:0,
          opacity:1,
          transition:{
                type:"spring",
                stiffness:100,
                duration:1.5,
                duration:1.5
          }
      }
}

  return(
    <>
      <div className={instantFunds.endText}>
        <motion.p
              variants={quest1Variants}
              initial="start"
              whileInView="stop"
              viewport={{once:true}}
        >Why Choose Cashpay?</motion.p>
        <motion.h1
                        variants={quest2Variants}
                        initial="start"
                        whileInView="stop"
                        viewport={{once:true}}
        >Fast Loan Approval</motion.h1>
      </div>
    </>
  )
}
export default Question;