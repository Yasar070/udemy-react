import C9 from "../assets/images/c5.jpg"
import C10 from "../assets/images/c3.jpg"
import C11 from "../assets/images/c7.jpg"
import C12 from "../assets/images/c2.jpg"
function Coursecard3(){
    return(
        <div class="navbar__course">
        <div class="coursecard1">
            <img src={C9} alt="courseimgae1"></img>
            <h3>C programming</h3>
            <p>Col Steels</p>
            <p>4.2⭐⭐⭐⭐</p>
            <p>399  <del>499</del></p>
        </div>
        <div class="coursecard1">
            <img src={C10} alt="courseimgae1"></img>
            <h3>Web design</h3>
            <p>Col Steels</p>
            <p>4.1⭐⭐⭐⭐</p>
            <p>299  <del>599</del></p>
        </div>
        <div class="coursecard1">
            <img src={C11} alt="courseimgae1"></img>
            <h3>Golang programming</h3>
            <p>Col Steels</p>
            <p>3.9⭐⭐⭐</p>
            <p>699  <del>799</del></p>
        </div>
        <div class="coursecard1">
            <img src={C12} alt="courseimgae1"></img>
            <h3>Dart language</h3>
            <p>Col Steels</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>899 <del>999</del></p>
          
        </div>
      
        
              
        
    </div>
    )
}
export default Coursecard3