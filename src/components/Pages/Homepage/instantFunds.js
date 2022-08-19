import instantFunds from "../stylesheet/instantFunds.module.css"
import vidimg from "../../../assets/image/video image.png";
import { useState} from "react";
import {motion} from "framer-motion";
const Funds = () => {

    // Animation variants

    const instantFundVariants = {
            start:{
                opacity: 0,
                x: -100,
            },
            stop:{
                opacity:1,
                x:0,

                    transition: {
                        delay:1,
                            duration:1.8,
                            type:'spring',
                            stiffness:100,
                    }
            }
    }

    const sectionTextVariants ={
        start:{
            opacity: 0,
        },
        stop:{
            opacity:1,
                transition:{
                    delay:0.5,
                    duration:1,
                }
        }
    }

    const sectionCardVariants ={
        start:{
            opacity: 0,
            scale:0.2
        },
        stop:{
            opacity:1,
            scale:1,
                transition:{
                    type:"spring",
                    duration:1,
                }
        }
    }

    const videoVariants ={
        start:{
            opacity: 0,
            scale:0.2
        },
        stop:{
            opacity:1,
            scale:1,
                transition:{
                    type:"spring",
                    delay:1,
                    duration:1.5,
                }
        }
    }


   
    const [content, Setcontent] = useState([

        {svg: <svg width="70" height="60" viewBox="0 0 72 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M17.3023 5C15.1378 5 13.4998 6.683 13.4998 8.618V14H8.99976V8.618C8.99976 4.073 12.7798 0.5 17.3023 0.5H63.6973C68.2198 0.5 71.9998 4.073 71.9998 8.618V41.882C71.9998 46.427 68.2198 50 63.6973 50H35.9998V45.5H63.6973C65.8618 45.5 67.4998 43.817 67.4998 41.882V8.618C67.4998 6.683 65.8618 5 63.6973 5H17.3023ZM35.9998 41H47.2498C47.8465 41 48.4188 40.7629 48.8407 40.341C49.2627 39.919 49.4998 39.3467 49.4998 38.75C49.4998 38.1533 49.2627 37.581 48.8407 37.159C48.4188 36.7371 47.8465 36.5 47.2498 36.5H35.9998V41ZM13.4998 54.5C12.903 54.5 12.3307 54.7371 11.9088 55.159C11.4868 55.581 11.2498 56.1533 11.2498 56.75C11.2498 57.3467 11.4868 57.919 11.9088 58.341C12.3307 58.7629 12.903 59 13.4998 59H17.9998C18.5965 59 19.1688 58.7629 19.5907 58.341C20.0127 57.919 20.2498 57.3467 20.2498 56.75C20.2498 56.1533 20.0127 55.581 19.5907 55.159C19.1688 54.7371 18.5965 54.5 17.9998 54.5H13.4998ZM-0.000244141 25.25C-0.000244141 23.4598 0.710915 21.7429 1.97679 20.477C3.24266 19.2112 4.95954 18.5 6.74976 18.5H24.7498C26.54 18.5 28.2569 19.2112 29.5227 20.477C30.7886 21.7429 31.4998 23.4598 31.4998 25.25V61.25C31.4998 63.0402 30.7886 64.7571 29.5227 66.023C28.2569 67.2888 26.54 68 24.7498 68H6.74976C4.95954 68 3.24266 67.2888 1.97679 66.023C0.710915 64.7571 -0.000244141 63.0402 -0.000244141 61.25V25.25ZM6.74976 23C6.15302 23 5.58072 23.2371 5.15877 23.659C4.73681 24.081 4.49976 24.6533 4.49976 25.25V61.25C4.49976 61.8467 4.73681 62.419 5.15877 62.841C5.58072 63.2629 6.15302 63.5 6.74976 63.5H24.7498C25.3465 63.5 25.9188 63.2629 26.3407 62.841C26.7627 62.419 26.9998 61.8467 26.9998 61.25V25.25C26.9998 24.6533 26.7627 24.081 26.3407 23.659C25.9188 23.2371 25.3465 23 24.7498 23H6.74976Z" fill="#093E9E"/>
            </svg>
            , text:"Download the app & Sign up", },
        {svg: <svg width="70" height="60" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="90" height="90" fill="white"/>
                <path    d="M11.25 78.75H78.75" stroke="#093E9E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.8755 50.6249L54.3755 13.1249C57.482 10.0183 62.519 10.0183 65.6255 13.1249C68.732 16.2315 68.732 21.2683 65.6255 24.3749L28.1255 61.8749L13.1255 65.6249L16.8755 50.6249Z" stroke="#093E9E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            , text:"Start your loan application process", },
        {svg: <svg width="70" height="60" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M75 76.875H15C10.875 76.875 7.5 73.5 7.5 69.375V30.1875C7.5 27.75 8.625 25.5 10.6875 24L45 0L79.3125 24C81.375 25.3125 82.5 27.75 82.5 30.1875V69.375C82.5 73.5 79.125 76.875 75 76.875Z" fill="#78909C"/>
                <path  d="M26.25 1.875H63.75V60H26.25V1.875Z" fill="#F6F6F6" fillOpacity="0.91"/>
                <path  d="M24.375 0V61.875H65.625V0H24.375ZM61.875 58.125H28.125V3.75H61.875V58.125Z" fill="#093E9E"/>
                <path  d="M63.75 5.625C63.75 8.8125 63.1875 11.25 60 11.25C56.8125 11.25 54.375 8.8125 54.375 5.625C54.375 2.4375 56.8125 1.875 60 1.875C63.1875 1.875 63.75 2.4375 63.75 5.625Z" fill="#093E9E"/>
                <path  d="M30 1.875C33.1875 1.875 35.625 2.4375 35.625 5.625C35.625 8.8125 33.1875 11.25 30 11.25C26.8125 11.25 26.25 8.8125 26.25 5.625C26.25 2.4375 26.8125 1.875 30 1.875Z" fill="#093E9E"/>
                <path  d="M45 18.75C47.0711 18.75 48.75 17.0711 48.75 15C48.75 12.9289 47.0711 11.25 45 11.25C42.9289 11.25 41.25 12.9289 41.25 15C41.25 17.0711 42.9289 18.75 45 18.75Z" fill="#093E9E"/>
                <path  d="M45 48.75C51.2132 48.75 56.25 43.7132 56.25 37.5C56.25 31.2868 51.2132 26.25 45 26.25C38.7868 26.25 33.75 31.2868 33.75 37.5C33.75 43.7132 38.7868 48.75 45 48.75Z" fill="#093E9E"/>
                <path  d="M75 76.875H15C10.875 76.875 7.5 73.5 7.5 69.375V31.875L45 56.25L82.5 31.875V69.375C82.5 73.5 79.125 76.875 75 76.875Z" fill="#CFD8DC"/>
            </svg>
            , text:"Get credited in your wallet in real-time", },
        {svg: <svg width="70" height="60" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M55.9583 55.9582H62.5416V69.1248C62.5416 72.7457 59.5791 75.7082 55.9583 75.7082H23.0416C19.4208 75.7082 16.4583 72.7457 16.4583 69.1248V9.87484C16.4583 6.254 19.4208 3.32442 23.0416 3.32442L55.9583 3.2915C59.5791 3.2915 62.5416 6.254 62.5416 9.87484V23.0415H55.9583V19.7498H23.0416V59.2498H55.9583V55.9582ZM72.4166 39.4998L59.2499 26.3332V36.2082H42.7916V42.7915H59.2499V52.6665L72.4166 39.4998Z" fill="#093E9E"/>
            </svg>
            , text:"Pay bills, transfer to increase your credit score", }


    ])
  return(
      <div className={instantFunds.container}>
            <motion.h1 className={instantFunds.intro}
                    variants={instantFundVariants}
                    initial="start"
                    whileInView="stop"
                    viewport={{once:true}}
            >Get Instant Funds </motion.h1>

            <div className={instantFunds.content}>

                {/*first flex*/}
                <motion.div className={instantFunds.section1}
                    variants={sectionTextVariants}
                    initial="start" 
                    whileInView="stop"
                    viewport={{once:true}}
                >
                    <p>Follow these simple steps to get the best experience on the platform</p>
                    <motion.div className={instantFunds.video}

                    >
                        {/* <svg width="120" height="90" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.7572 50.6978C68.5127 49.9586 67.0946 49.5622 65.6471 49.5488C64.1997 49.5355 62.7745 49.9057 61.5165 50.6218C60.2586 51.338 59.2127 52.3745 58.4853 53.6259C57.7578 54.8774 57.3748 56.2992 57.3751 57.7467V95.2536C57.3748 96.7011 57.7578 98.1229 58.4853 99.3743C59.2127 100.626 60.2586 101.662 61.5165 102.378C62.7745 103.095 64.1997 103.465 65.6471 103.451C67.0946 103.438 68.5127 103.042 69.7572 102.302L105.302 81.1994C106.118 80.7156 106.793 80.0279 107.262 79.204C107.732 78.3801 107.978 77.4483 107.978 76.5001C107.978 75.552 107.732 74.6202 107.262 73.7963C106.793 72.9723 106.118 72.2847 105.302 71.8009L69.7572 50.6978ZM10.9287 76.5001C10.9287 40.2883 40.2883 10.9287 76.5001 10.9287C112.712 10.9287 142.072 40.2883 142.072 76.5001C142.072 112.712 112.712 142.072 76.5001 142.072C40.2883 142.072 10.9287 112.712 10.9287 76.5001ZM76.5001 19.1251C44.8128 19.1251 19.1251 44.8127 19.1251 76.5001C19.1251 108.188 44.8128 133.875 76.5001 133.875C108.188 133.875 133.875 108.188 133.875 76.5001C133.875 44.8127 108.188 19.1251 76.5001 19.1251Z" fill="white"/>
                        </svg> */}
                        <img src={vidimg} alt={"vid"}/>
                    </motion.div>

                </motion.div>

                {/*second flex*/}
                <motion.div className={instantFunds.section2}
                    variants={sectionCardVariants}
                    initial="start"
                    whileInView="stop"
                    viewport={{once:true}}
                >
                    {content.map((contents,index ) => (
                        <div className={instantFunds.cover} key={index}>
                            <div className={instantFunds.card}>
                                <div className={instantFunds.path}>{contents.svg}</div>
                                <p>{contents.text}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>



      </div>
  )
}

export default Funds;