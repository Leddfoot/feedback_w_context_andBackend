import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {
    const { feedback  } = useContext(FeedbackContext)
    //calculate the average of the ratings
    let totalRatingPoints = feedback.reduce((accumulator, current) => {
        return accumulator + current.rating
    }, 0);

    let BetterTotalRatingPoints = feedback.reduce((accumulator, current) => {
        return accumulator + current.rating
    }, 0) / feedback.length

    BetterTotalRatingPoints = BetterTotalRatingPoints.toFixed(1).replace(/[.,]0$/, '')
    
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating1:  {isNaN(totalRatingPoints/feedback.length) ? 0 : totalRatingPoints/feedback.length}</h4>
            <h4>Average Rating2:  {isNaN(BetterTotalRatingPoints) ? 0 : BetterTotalRatingPoints}</h4>
            
        </div>
    )
}

export default FeedbackStats
