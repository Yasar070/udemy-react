import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sales from "./components/Salesimage"
import Courses from "./components/Courses"
import Topics from "./components/Topics"
import Recomended from "./components/Recommendedbox"
import Coursecard2 from "./components/Coursecard2"
import Coursecard3 from "./components/Coursecard3"
import End from "./components/Endbox"

function App(){
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sales></Sales>
            <Courses></Courses>
            <Topics></Topics>
            <Recomended></Recomended>
            <Coursecard2></Coursecard2>
            <Coursecard3></Coursecard3>
            <End></End>
        </div>
    )
}
export default App