import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card";

function ExampleFeedbackItem( {item, handleClickExample} ) {
  return (
    <Card>
    <div className="num-display">{item.rating}</div>
    <button className='close' onClick={()=>handleClickExample(item.id)}>
      <FaTimes color='red' />
    </button>
    <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default ExampleFeedbackItem;