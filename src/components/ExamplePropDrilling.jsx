import ExampleFeedbackList from "./ExampleFeedbackList"

function ExamplePropDrilling( {feedback, handleClickExample}) {
    return (
        <div className="card">
        <h2>I am an example of prop Drilling</h2>
            <p>I will take a list of stuff as props (i am reusing the feedbacklist ) This is passed in as a prop and destructured {'{feedback}'} instead of props</p>
            <p>I'm gonna recreate the list inside of here so the styling may get whack. NOTE that I am passing feedback to it as a prop</p>
            <p>Here we encounter a typical problem which I have encountered we wanna delete one item, which is the specific item we are clicking on but:</p>
            <ul>
            <li>How the hell do we pass the id all the way up to where state is managed?</li>
            <li>The function has to be passed down the chain, and id passed up!</li>
            <li>Passing the id is relatively easy, each button is mapped so you can just pass that into the function</li>
            <li>But the function will have been created in App where the state lives and passed down(drilled) all the way to the componenet</li>
            <li>Note I have done this is the "Exampleblabla" components, but Identified something critical!!!!!</li>
            <li>I tried to pass the function down and then onClick={'{handleWhatever(item.id)}'}</li>
            <li>THIS DOESN'T WORK!!!!!!!!!!!!!!!!</li>
            <li>DONT KNOW why yet plan to update it when I learn</li>
            <li>Use this instead onClick={'{()=>handleWhatever(item.id)}'}NOTE THE FAT ARROW IS ADDED NOW</li>
            
            </ul>
            
            <ExampleFeedbackList feedback={feedback} handleClickExample={handleClickExample}/>
        </div>
    )
}

export default ExamplePropDrilling
