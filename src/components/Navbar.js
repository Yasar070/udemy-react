function Navbar(){
    return (
        <div class="navbar">
    <div class="navbar__sec1">
        <h1>Udemy</h1>
    </div>
    <div class="navbar__sec2">
        
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search Tech, Business, Marketing..."></input>
    </div>
    <div class="navbar__sec3">
        <p>Course</p>
        <p>My learning</p>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-bell"></i>
        
        <div class="popup">
            <p>You are not purchase yet</p>
        
        </div>
    
    </div>
    <div class="navbar__s4">
        <i class="fa-solid fa-bars"></i>
    </div>
    
</div>
    )
}
export default Navbar