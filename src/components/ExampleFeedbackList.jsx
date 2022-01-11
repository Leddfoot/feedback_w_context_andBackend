import ExampleFeedbackItem from "./ExampleFeedbackItem"

function ExampleFeedbackList({ feedback, handleClickExample }) {
    
    return (
        <div className="feedback-list">
            {
                feedback.map((item)=> (
                    <ExampleFeedbackItem key={item.id} item={item} handleClickExample={handleClickExample} />
                ))}
        </div>
    )
}

export default ExampleFeedbackList