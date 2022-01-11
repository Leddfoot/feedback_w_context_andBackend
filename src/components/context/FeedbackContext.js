
import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "from the context",
      rating: 9,
    },
    {
      id: 2,
      text: "from the context",
      rating: 4,
    },
    {
      id: 3,
      text: "from the context",
      rating: 6,
    },
  ])

  const [feedbackEditState, setFeedbackEditState ] = useState({
    item: {}, //item is an intialized as an empty object and set to false when not editing
    edit: false,
  })

  const deleteFeedback = (id) => {
    if (window.confirm("Are you really sure that you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };


///note addFeedback adds new feedback, updateFeedback updates existing one
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    // setFeedback(prev => prev.concat(newFeedback)) ///this is how i tried to do it it works but didnt get it immediately
    setFeedback([...feedback, newFeedback]);
  };

 const updateFeedback =  (id, updatedItem) => {
   setFeedback(
     feedback.map((item)=> (item.id === id ? {...item, ...updatedItem} : item))
   )

    
  }

  const editFeedback =(item)=>{
    console.log('item: ', item);
    setFeedbackEditState({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEditState,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
