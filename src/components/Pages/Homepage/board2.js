import Board2Style from "../../Pages/stylesheet/testimonial.module.css";
import {motion} from "framer-motion"
const Board2 = () => {

    const  board2Variants = {
            start:{
                scale: 0,
                opacity: 0,
                },
            stop:{
                opacity:1,
                scale: 1,
                        transition:{
                            duration:1,
                            type:"spring"
                        }
            }
    }

    const buttonVariants = {
        hover:{
            scale:1,
                transition:{
                        duration:0.5,

                }
        
            },
            click:{
                scale:0.8,
                yoyo:1,
                duration:0.5
        }
    }
  return(
      <motion.div className={Board2Style.Board2Style}
      variants={board2Variants}
            initial="start"
            whileInView="stop"
            viewport={{once:true, amount: 0}}
      >
          <div className={Board2Style.Board2Text}>
              <p>We are trusted by thousands of people every day to deliver better financial services across the country.</p>
          </div>
          <motion.button className={Board2Style.Board2Button}
                variants={buttonVariants}
                initial=""
                whileHover="hover"
                whileTap="click"
          >Download the app</motion.button>
      </motion.div>
  )
}
export default Board2;