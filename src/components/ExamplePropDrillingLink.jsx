import { FaToriiGate } from 'react-icons/fa'
import { Link } from "react-router-dom";

function ExamplePropDrillingLink() {
    return (
        <div className='prop-drilling-link'>
            <Link to='/examplePropDrilling'>
            <FaToriiGate size={30}/>ExamplePropDrilling
            </Link>
        </div>
    )
}

export default ExamplePropDrillingLink
