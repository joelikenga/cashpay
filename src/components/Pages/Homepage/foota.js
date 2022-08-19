import footaStyle from "../stylesheet/foota.module.css";
const Foota = () => {
  return(
      <div className={footaStyle.container}>
            <div className={footaStyle.cover}>
                <p  >Company</p>
                <li>About us</li>
                <li>Stories</li>
                <li>Career</li>
                <li>Help</li>
            </div>

          <div className={footaStyle.cover}>
              <p>Resources</p>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Cookie Statement</li>
              <li>Terms & conditions</li>
          </div>

          <div className={footaStyle.cover}>
              <p>Conatact</p>
              <li>@cashpay.com</li>
              <li>+234555666777</li>
          </div>

          <div className={footaStyle.cover}>
              <p> Adevert</p>
              <li>+234555666777</li>
              
                
          </div>
      </div>
  )
}
export default Foota;