import C1 from "../assets/images/c1.jpg"
import C2 from "../assets/images/c2.jpg"
import C3 from "../assets/images/c3.jpg"
import C4 from "../assets/images/c4.jpg"

function Courses(){
return(<div class="navbar__course">
    <div class="coursecard1">
        <img src={C1} alt="courseimgae1"></img>
        <h3>PHP programming</h3>
        <p>Col Steels</p>
        <p>4.2⭐⭐⭐⭐</p>
        <p>399  <del>499</del></p>
    </div>
    <div class="coursecard1">
        <img src={C2} alt="courseimgae1"></img>
        <h3>Web development</h3>
        <p>Col Steels</p>
        <p>4.1⭐⭐⭐⭐</p>
        <p>299  <del>599</del></p>
    </div>
    <div class="coursecard1">
        <img src={C3} alt="courseimgae1"></img>
        <h3>Python programming</h3>
        <p>Col Steels</p>
        <p>3.9⭐⭐⭐</p>
        <p>699  <del>799</del></p>
    </div>
    <div class="coursecard1">
        <img src={C4} alt="courseimgae1"></img>
        <h3>Javascript programming</h3>
        <p>Col Steels</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>899 <del>999</del></p>
      
    </div>
      
   

       
        
    
</div>
)
}
export default Courses