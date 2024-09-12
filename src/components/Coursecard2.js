import C5 from "../assets/images/c4.jpg"
import C6 from "../assets/images/c2.jpg"
import C7 from "../assets/images/c1.jpg"
import C8 from "../assets/images/c8.jpg"
function Coursecard2(){
    return (
        <div class="navbar__course">
        <div class="coursecard1">
            <img src={C5} alt="courseimgae1"></img>
            <h3>Java core programming</h3>
            <p>Col Steels</p>
            <p>4.2⭐⭐⭐⭐</p>
            <p>399  <del>499</del></p>
        </div>

        <div class="coursecard1">

            <img src={C6}alt="courseimgae1"></img>
            <h3>Web development</h3>
            <p>Col Steels</p>
            <p>4.1⭐⭐⭐⭐</p>
            <p>299  <del>599</del></p>
        </div>
        <div class="coursecard1">
            <img src={C7} alt="courseimgae1"></img>
            <h3>PHP programming</h3>
            <p>Col Steels</p>
            <p>3.9⭐⭐⭐</p>
            <p>699  <del>799</del></p>
        </div>
        <div class="coursecard1">
            <img src={C8} alt="courseimgae1"></img>
            <h3>Javascript programming</h3>
            <p>Col Steels</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>899 <del>999</del></p>
          
        </div>
      
        
              
        
    </div>
    )
}
export default Coursecard2