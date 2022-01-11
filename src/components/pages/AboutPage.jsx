import Card from "../shared/Card"
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <Card>
        <div className="about">
        <h1>About This Project</h1>
        <p>React app to leave feedback for a product</p>
        <p>learned here: https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29767886#questions</p>
        <p>version 1.0.0</p>
        <p>
        <Link to='/'>Back to Home</Link>
        </p>
        </div>
        </Card>
    )
}

export default AboutPage
