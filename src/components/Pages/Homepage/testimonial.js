import testimonialStyle from "../stylesheet/testimonial.module.css";
import {useState} from "react";
import test1 from "../../../assets/image/test1.png"
import test2 from "../../../assets/image/test2.png"
import test3 from "../../../assets/image/test3.png"
import test4 from "../../../assets/image/test4.png"
import test5 from "../../../assets/image/test5.png"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
const Testimonial = () => {

        const testimonialImageVariants = {
            start:{
                opacity:0,
                y:-100,
            },
            stop:{
                    opacity:1,
                    y:0,
                    transition:{
                        delay:0.5,
                        duration:1,
                        type:"spring",
                        stiffness:200
                        
                    }
            }
        }

    const [images, setimages] = useState([
        {testImg:test1,size:120, top1:"29%"},
        {testImg:test2,size:120, top1:"5%"},
        {testImg:test3,size:120},
        {testImg:test4,size:120, top1:"5%"},
        {testImg:test5,size:120, top1:"29%"}
    ]);
    const [testimonial, settestimonial] = useState([
        {
            svg: <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
            </svg>,
            comment:"I am glad I found OKash. I was able to get a loan in minutes to solve my business problem and avoid embarrassment. Thank you OKash.”",
            name:"-Teniola Nonso"
        },
        {
            svg: <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
            </svg>,
            comment:"I am glad I found OKash. I was able to get a loan in minutes to solve my business problem and avoid embarrassment. Thank you OKash.”",
            name:"-kelsy Favour"
        },{
            svg: <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
            </svg>,
            comment:"I am glad I found OKash. I was able to get a loan in minutes to solve my business problem and avoid embarrassment. Thank you OKash.”",
            name:"-Teniola Nonso"
        },{
            svg: <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
            </svg>,
            comment:"I am glad I found OKash. I was able to get a loan in minutes to solve my business problem and avoid embarrassment. Thank you OKash.”",
            name:"-Joel Ikenga"
        },
        {
            svg: <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
                <path d="M0.63444 46.8487C3.59517 43.7675 5.92145 40.8964 7.61329 38.2353C9.30513 35.5742 10.1511 33.4034 10.1511 31.7227C10.1511 30.7423 9.79858 29.8319 9.09365 28.9916C8.5297 28.1513 7.61329 27.2409 6.34441 26.2605C4.37059 24.7199 2.81974 23.1092 1.69184 21.4286C0.563948 19.7479 0 17.507 0 14.7059C0 10.3641 1.33937 6.86274 4.01812 4.20168C6.69687 1.40056 10.0806 0 14.1692 0C18.5398 0 22.0644 1.40056 24.7432 4.20168C27.5629 6.86274 28.9728 10.3641 28.9728 14.7059C28.9728 20.1681 26.6465 26.1905 21.994 32.7731C17.4824 39.2157 11.4199 44.958 3.80664 50L0.63444 46.8487ZM41.6616 46.8487C44.6224 43.7675 46.9486 40.8964 48.6405 38.2353C50.3323 35.5742 51.1782 33.4034 51.1782 31.7227C51.1782 30.7423 50.8258 29.8319 50.1208 28.9916C49.5569 28.1513 48.6405 27.2409 47.3716 26.2605C45.3978 24.7199 43.8469 23.1092 42.719 21.4286C41.5911 19.7479 41.0272 17.507 41.0272 14.7059C41.0272 10.3641 42.3666 6.86274 45.0453 4.20168C47.7241 1.40056 51.1077 0 55.1964 0C59.567 0 63.0916 1.40056 65.7704 4.20168C68.5901 6.86274 70 10.3641 70 14.7059C70 20.1681 67.6737 26.1905 63.0211 32.7731C58.5096 39.2157 52.4471 44.958 44.8338 50L41.6616 46.8487Z" fill="#EDF0FD"/>
            </svg>,
            comment:"I am glad I found OKash. I was able to get a loan in minutes to solve my business problem and avoid embarrassment. Thank you OKash.”",
            name:"-Winner Nonso"
        }
    ])
    //slider direction
    // const scrollLeft = () =>{
    //     let left = document.querySelector("content")
    //     left.scrollBy(-500,0)
    // }

    // const scrollRight = () =>{
    //     let right = document.querySelector(".content")
    //     right.scrollBy(500,0)
    // }
  return(
      <div className={testimonialStyle.container}>
            <motion.div 
                        variants={testimonialImageVariants}
                        initial="start"
                        whileInView="stop"
                        viewport={{once:true}}
                        className={testimonialStyle.images}>
                {images.map((image, index) => (
                    <div style={{marginTop:image.top1}}  className={testimonialStyle.round} key={index}>
                        <img src={image.testImg} alt={""}/>
                    </div>
                ))}
            </motion.div>

          <div className={testimonialStyle.cardContainer}>
              <div className={testimonialStyle.content}>
                  {testimonial.map((comment,index) => (
                      <div className={testimonialStyle.card} key={index}>
                          <div className={testimonialStyle.svg}>{comment.svg}</div>
                          <p className={testimonialStyle.pcomment}>{comment.comment}</p>
                          <p className={testimonialStyle.Pname}>{comment.name}</p>
                      </div>
                  ))}

              </div>
                {/* <div  className={testimonialStyle.arrows}>
                    <i  onClick={scrollLeft}><FontAwesomeIcon icon={faArrowLeft}/></i>
                    <i  onClick={scrollRight}><FontAwesomeIcon icon={faArrowRight}/></i>
                </div> */}
          </div>

      </div>
  )
}
export default Testimonial;