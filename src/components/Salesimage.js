import Imgsale from "../assets/images/saleimage.jpg";
function Sales(){
    return(
        <div class="salesimage">
    <img src={Imgsale} alt="saleimg"></img>
    <div class="offerbox">
        <h2>Skill that drive you forward</h2>
        <p>Technology and world of work change fast with-us,you're faster. Get the skill to achieve goals and stay competitive</p>
        <h3>Today offer 30%</h3>
        <div class="planbox">
            <h3>View plan</h3>
        </div>
     </div>
           
    <h1>Recommended for you</h1>
    <p>Pick the best</p>
    
</div>
    )
}
export default Sales