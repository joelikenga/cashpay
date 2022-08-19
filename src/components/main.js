import Navbar from "./Pages/Homepage/navbar";
import Board from "./Pages/Homepage/board";
import Funds from "./Pages/Homepage/instantFunds";
import Question from "./Pages/Homepage/question";
import Testimonial from "./Pages/Homepage/testimonial";
import Board2 from "./Pages/Homepage/board2";
import Foota from "./Pages/Homepage/foota";


const Main = () => {


  return(
      <div className={""}>

          <Navbar/>
          <Board/>
          <Funds/>
          <Question/>
          <Testimonial/>
          <Board2/>
          <Foota/>

      </div>
  )
}

export default Main;