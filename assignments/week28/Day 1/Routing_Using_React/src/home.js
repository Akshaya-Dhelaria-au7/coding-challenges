import React,{ Component } from "react";
import Terms from './terms'
import About from './about'
import { Link } from "react-router-dom";

class Home extends Component{
        render(){
            return(
                <nav>
                    Home
                    <ul>
                        <li>
                            <Link to="/terms" >Terms</Link>
                        </li>
                        <li>
                            <Link to="/about" >About</Link>
                        </li>
                    </ul>
                </nav>
            )
        }
}

export default Home