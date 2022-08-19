import navStyle from "../stylesheet/navbar.module.css";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {

    const [toogleNav, setToogleNav] = useState(false);
    const show = () =>{
        setToogleNav(!toogleNav)
    }
    const navsVariants = {
        hover:{
            scale:1.1,
            color:"blue",
                    transition:{
                        duration:0.3,
                    }
        },

    }
  return(
      <nav>
            <div className={navStyle.logo}>
                <svg
                width="150" height="40" viewBox="0 0 210 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                           clipRule="evenodd" d="M31.6363 3.95498L3.9929 20.9665C3.91872 21.0752 3.81014 21.2639 3.70523 21.5262C3.55748 21.8956 3.5 22.2045 3.5 22.3502V55.856L4.20936 56.9345L6.49696 59.7169L16.2658 65.6578L26.736 71.7222L26.7518 71.7312L31.2892 74.2861L31.3398 74.3203C32.4989 75.1035 33.7319 75.1888 34.1763 75.1115C34.285 75.0844 34.4129 75.0544 34.5573 75.0204C34.969 74.9235 35.5151 74.7949 36.1337 74.6162C37.0229 74.3593 37.7751 74.0737 38.1602 73.8135L38.2016 73.7855L58.2543 62.0986L62.4468 59.7378L65.0397 55.7957L65.5 50.6633V23.0973L65.1373 21.9944L64.3397 20.7817C64.1074 20.57 63.6323 20.1822 63.0553 19.7143L62.9735 19.648C62.4934 19.2589 61.9392 18.8096 61.5934 18.4906L54.7171 14.5079L49.2114 10.9567L43.2366 7.42405L37.3761 3.95901C34.9504 3.17956 32.9261 3.5422 31.6363 3.95498ZM30.5199 1.16417C32.2164 0.591007 35.0706 0.0122949 38.4801 1.16421L38.6286 1.21436L50.7885 8.40406L56.2829 11.9479L63.4262 16.0853L63.5678 16.2288C63.7424 16.4058 64.2749 16.841 64.9447 17.3841L65.027 17.4508C65.5912 17.9082 66.2576 18.4483 66.5677 18.7626L66.6718 18.8681L67.8627 20.6788L68.5 22.6166V50.7976L67.9603 56.8145L64.5532 61.9947L59.7455 64.7019L39.794 76.3297C38.9817 76.8643 37.8438 77.2448 36.9663 77.4983C36.264 77.7012 35.5565 77.8678 35.1493 77.9636C35.0246 77.9929 34.9281 78.0157 34.8684 78.0308L34.8334 78.0396L34.798 78.0468C33.5644 78.2969 31.5186 78.0395 29.7137 76.8418L25.2561 74.3318L14.7343 68.2377L4.50304 62.0155L1.79064 58.7165L0.5 56.7542V22.3502C0.5 21.685 0.692519 20.9803 0.919772 20.4121C1.14349 19.8528 1.48456 19.2165 1.93221 18.7627L2.0595 18.6337L30.3587 1.21862L30.5199 1.16417Z" fill="#093E9E"/>
                    <mask id="mask0_212_14"  maskUnits="userSpaceOnUse" x="8" y="10" width="52" height="60">
                        <path
                         clipRule="evenodd" d="M31.662 12.031L10.0939 25.3039C9.97262 25.4435 9.82698 25.6897 9.70615 25.9918C9.57426 26.3215 9.5 26.6479 9.5 26.8751V53.01L10.1772 54.0397L12.0417 56.3074L19.7056 60.9682L27.8238 65.6702L27.829 65.6732L31.325 67.6417L31.3419 67.6531C32.3898 68.3613 33.5356 68.4635 34.0484 68.3641C34.124 68.3451 34.2206 68.3224 34.334 68.2957C34.6548 68.2201 35.1103 68.1129 35.6064 67.9696C36.2959 67.7704 36.969 67.5263 37.3618 67.2608L37.3756 67.2515L52.8785 58.2163L56.2562 56.3144L58.4428 52.9899L58.8166 48.822V27.3484L58.4754 26.3098L57.7667 25.2324C57.5774 25.0503 57.1486 24.7016 56.6794 24.3212L56.6451 24.2933C56.219 23.9479 55.7622 23.5775 55.528 23.3531L50.1535 20.2403L45.8941 17.4929L41.2578 14.7517L36.6588 12.0325C34.5296 11.3274 32.7544 11.6699 31.662 12.031ZM31.2889 11.1014C32.5156 10.687 34.5689 10.2707 37.0277 11.1014L37.0772 11.1181L46.4198 16.642L50.6754 19.3869L56.1419 22.5531L56.1891 22.6009C56.3575 22.7716 56.8105 23.14 57.3092 23.5444L57.344 23.5726C57.8033 23.9451 58.2982 24.3462 58.5114 24.5623L58.5461 24.5975L59.3838 25.8712L59.8166 27.1873V48.8667L59.4164 53.3295L56.9583 57.0666L53.3756 59.084L53.3692 59.0877L37.9073 68.0991C37.3711 68.4566 36.5689 68.7324 35.884 68.9303C35.3601 69.0816 34.851 69.2015 34.5314 69.2768C34.4247 69.3019 34.3391 69.322 34.2811 69.3367L34.2695 69.3397L34.2577 69.3421C33.4786 69.5 32.062 69.3394 30.7993 68.4933L27.3278 66.5386L19.1905 61.8255L11.377 57.0736L9.37098 54.6336L8.5 53.3094V26.8751C8.5 26.4747 8.61927 26.0164 8.77766 25.6204C8.93488 25.2273 9.15876 24.8254 9.41817 24.5624L9.4606 24.5194L31.2352 11.1195L31.2889 11.1014Z" fill="#093E9E"/>
                    </mask>
                    <g mask="url(#mask0_212_14)">
                        <path
                         d="M5.12939 10.3374H41.5122V69.1835H5.12939V10.3374Z" fill="#093E9E"/>
                    </g>
                    <path
                        d="M99.5577 53.2767C97.6037 53.2767 95.8341 52.8527 94.2489 52.0048C92.682 51.1384 91.447 49.9495 90.5438 48.4379C89.659 46.9264 89.2166 45.2213 89.2166 43.3227C89.2166 41.4241 89.6682 39.719 90.5714 38.2074C91.4746 36.6959 92.7097 35.5162 94.2765 34.6682C95.8618 33.8019 97.6314 33.3687 99.5853 33.3687C101.171 33.3687 102.618 33.6452 103.926 34.1982C105.235 34.7512 106.341 35.553 107.244 36.6037L104.922 38.7881C103.521 37.2766 101.797 36.5208 99.7512 36.5208C98.424 36.5208 97.2351 36.8157 96.1844 37.4056C95.1337 37.977 94.3134 38.7789 93.7235 39.8111C93.1336 40.8434 92.8387 42.0139 92.8387 43.3227C92.8387 44.6315 93.1336 45.802 93.7235 46.8342C94.3134 47.8665 95.1337 48.6776 96.1844 49.2674C97.2351 49.8389 98.424 50.1246 99.7512 50.1246C101.797 50.1246 103.521 49.3596 104.922 47.8296L107.244 50.0416C106.341 51.0923 105.226 51.8942 103.899 52.4472C102.59 53.0002 101.143 53.2767 99.5577 53.2767Z" fill="#093E9E"/>
                    <path
                        d="M115.862 38.0692C118.037 38.0692 119.696 38.5945 120.839 39.6452C122.001 40.6775 122.581 42.2443 122.581 44.3457V53.0002H119.319V51.2029C118.895 51.8481 118.286 52.3458 117.494 52.696C116.719 53.0278 115.779 53.1937 114.673 53.1937C113.567 53.1937 112.6 53.0094 111.77 52.6407C110.941 52.2536 110.295 51.7283 109.835 51.0647C109.392 50.3827 109.171 49.6177 109.171 48.7697C109.171 47.4425 109.659 46.3826 110.636 45.59C111.632 44.7789 113.189 44.3734 115.309 44.3734H119.125V44.1522C119.125 43.1199 118.812 42.3273 118.185 41.7743C117.577 41.2213 116.664 40.9448 115.448 40.9448C114.618 40.9448 113.798 41.0738 112.987 41.3319C112.194 41.59 111.521 41.9494 110.968 42.4102L109.613 39.8941C110.388 39.3042 111.318 38.8526 112.406 38.5392C113.494 38.2259 114.646 38.0692 115.862 38.0692ZM115.392 50.6776C116.259 50.6776 117.024 50.484 117.687 50.0969C118.369 49.6914 118.848 49.12 119.125 48.3826V46.6683H115.558C113.567 46.6683 112.572 47.3227 112.572 48.6315C112.572 49.2582 112.821 49.7559 113.318 50.1246C113.816 50.4933 114.507 50.6776 115.392 50.6776Z" fill="#093E9E"/>
                    <path
                        d="M131.579 53.1937C130.381 53.1937 129.21 53.0371 128.068 52.7237C126.925 52.4103 126.012 52.014 125.33 51.5347L126.657 48.908C127.321 49.3504 128.114 49.7098 129.035 49.9863C129.975 50.2444 130.897 50.3734 131.8 50.3734C133.865 50.3734 134.897 49.8297 134.897 48.7421C134.897 48.226 134.63 47.8665 134.095 47.6637C133.579 47.461 132.74 47.2674 131.579 47.0831C130.363 46.8988 129.367 46.6868 128.593 46.4471C127.837 46.2075 127.174 45.7928 126.602 45.2029C126.049 44.5946 125.773 43.7559 125.773 42.6867C125.773 41.2858 126.353 40.1706 127.515 39.3411C128.694 38.4932 130.28 38.0692 132.27 38.0692C133.284 38.0692 134.298 38.189 135.312 38.4286C136.326 38.6498 137.155 38.954 137.8 39.3411L136.473 41.9678C135.22 41.2305 133.81 40.8618 132.243 40.8618C131.229 40.8618 130.455 41.0185 129.92 41.3319C129.404 41.6268 129.146 42.0231 129.146 42.5208C129.146 43.0738 129.422 43.4702 129.975 43.7098C130.547 43.931 131.422 44.143 132.602 44.3457C133.782 44.5301 134.75 44.7421 135.505 44.9817C136.261 45.2213 136.906 45.6269 137.441 46.1983C137.994 46.7697 138.27 47.5808 138.27 48.6315C138.27 50.014 137.671 51.12 136.473 51.9495C135.275 52.779 133.644 53.1937 131.579 53.1937Z" fill="#093E9E"/>
                    <path
                         d="M149.625 38.0692C151.487 38.0692 152.98 38.613 154.104 39.7005C155.229 40.7881 155.791 42.401 155.791 44.5393V53.0002H152.335V44.9817C152.335 43.6914 152.03 42.7236 151.422 42.0784C150.814 41.4148 149.947 41.083 148.823 41.083C147.551 41.083 146.547 41.4701 145.809 42.2443C145.072 43.0001 144.703 44.0969 144.703 45.5347V53.0002H141.247V32.4839H144.703V39.9494C145.275 39.3411 145.975 38.8803 146.805 38.5669C147.653 38.2351 148.593 38.0692 149.625 38.0692Z" fill="#093E9E"/>
                    <path
                         d="M168.36 38.0692C169.798 38.0692 171.079 38.3826 172.203 39.0093C173.346 39.636 174.24 40.5208 174.885 41.6637C175.53 42.8066 175.853 44.1245 175.853 45.6176C175.853 47.1107 175.53 48.4379 174.885 49.5992C174.24 50.7421 173.346 51.6269 172.203 52.2536C171.079 52.8804 169.798 53.1937 168.36 53.1937C166.369 53.1937 164.793 52.5301 163.632 51.2029V58.3643H160.175V38.2351H163.466V40.1706C164.037 39.4701 164.738 38.9448 165.567 38.5945C166.415 38.2443 167.346 38.0692 168.36 38.0692ZM167.973 50.2352C169.245 50.2352 170.286 49.8112 171.097 48.9633C171.927 48.1154 172.341 47.0001 172.341 45.6176C172.341 44.2351 171.927 43.1199 171.097 42.272C170.286 41.4241 169.245 41.0001 167.973 41.0001C167.143 41.0001 166.397 41.1936 165.733 41.5807C165.069 41.9494 164.544 42.484 164.157 43.1844C163.77 43.8849 163.576 44.696 163.576 45.6176C163.576 46.5393 163.77 47.3504 164.157 48.0508C164.544 48.7513 165.069 49.2951 165.733 49.6822C166.397 50.0509 167.143 50.2352 167.973 50.2352Z" fill="#093E9E"/>
                    <path
                          d="M184.582 38.0692C186.757 38.0692 188.416 38.5945 189.559 39.6452C190.721 40.6775 191.301 42.2443 191.301 44.3457V53.0002H188.039V51.2029C187.615 51.8481 187.006 52.3458 186.214 52.696C185.439 53.0278 184.499 53.1937 183.393 53.1937C182.287 53.1937 181.32 53.0094 180.49 52.6407C179.661 52.2536 179.015 51.7283 178.555 51.0647C178.112 50.3827 177.891 49.6177 177.891 48.7697C177.891 47.4425 178.379 46.3826 179.356 45.59C180.352 44.7789 181.909 44.3734 184.029 44.3734H187.845V44.1522C187.845 43.1199 187.532 42.3273 186.905 41.7743C186.297 41.2213 185.384 40.9448 184.168 40.9448C183.338 40.9448 182.518 41.0738 181.707 41.3319C180.914 41.59 180.241 41.9494 179.688 42.4102L178.333 39.8941C179.108 39.3042 180.038 38.8526 181.126 38.5392C182.214 38.2259 183.366 38.0692 184.582 38.0692ZM184.112 50.6776C184.979 50.6776 185.744 50.484 186.407 50.0969C187.089 49.6914 187.568 49.12 187.845 48.3826V46.6683H184.278C182.287 46.6683 181.292 47.3227 181.292 48.6315C181.292 49.2582 181.541 49.7559 182.038 50.1246C182.536 50.4933 183.227 50.6776 184.112 50.6776Z" fill="#093E9E"/>
                    <path
                        d="M209.292 38.2351L202.379 54.1891C201.734 55.7928 200.951 56.9173 200.029 57.5624C199.107 58.226 197.992 58.5578 196.683 58.5578C195.946 58.5578 195.218 58.438 194.499 58.1984C193.78 57.9588 193.19 57.627 192.73 57.203L194.112 54.6592C194.444 54.9726 194.831 55.2214 195.273 55.4057C195.734 55.5901 196.195 55.6822 196.656 55.6822C197.264 55.6822 197.762 55.5256 198.149 55.2122C198.554 54.8988 198.923 54.3735 199.255 53.6361L199.504 53.0555L193.061 38.2351H196.656L201.301 49.1568L205.974 38.2351H209.292Z" fill="#093E9E"/>
                </svg>

            </div>

            <ul className={navStyle.navLinks}>
                <motion.li
                        variants={navsVariants}
                        whileHover="hover"
                        whileTap="tap"
                >About</motion.li>
                <motion.li
                        variants={navsVariants}
                        whileHover="hover"
                        whileTap="tap"
                >Stories</motion.li>
                <motion.li
                        variants={navsVariants}
                        whileHover="hover"
                        whileTap="tap"
                >Careers</motion.li>
                <motion.li
                        variants={navsVariants}
                        whileHover="hover"
                        whileTap="tap"
                >Help</motion.li>

                <motion.span
                    onClick={show}
                ><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></motion.span>
            </ul>

            <div style={{display: toogleNav ? " inline" : "none"}} className="small-nav">

<span className="times" onClick={show}>
  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
  </span>
  <motion.ul

  className={""}>
        <li>About</li>
        <li>Stories</li>
        <li >Careers</li>
        <li>Help</li>
  </motion.ul>
</div>
 
      </nav>
      
  )
}
export default Navbar;