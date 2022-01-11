function LessonsLearned() {
  const lessonsLearned = [
    {
      key: 1,
      title: "Feedback 2 is about migrating from UseState to useContext",
      text: "In the first feedback app, it used only useState, This feedback 2 is where we moved to useContext",
    },
    {
      key: 2,
      title: "Create the context and Provider",
    text: "make a new file in the context folder  import { createContext, useState } from 'react' and create the context is pretty easy    const FeedbackContext = createContext() setup the provider which is an export const see example in FeedbackContext.js  Important to remember that you are exporting two things the provider and the context, remember that the provider needs a value which is just set to whatever context you need ... i messed up when setting this value the first time",
    },
    
    {
      key: 2,
      title: " HOW TO DO WRONG <FeedbackContext.Provider value={{feedback}}",
      text: "i messed the value up on the first time ... I only used value={feedback} ... PROBLEM using an object in JSX ... when referring to ?or maybe i was really destructuring? an object ... apparently it should be wrapped in curly braces? why dunno yet ... but when referring to an object in this manner .. then you will need double curlies value={{feedback}}",
    },
    {
      key: 2,
      title: "Using the context(state?) in a component",
      text: "after setting up the context and provider, and wrapping the app in the provider, you an access it in a component... remember that you have to import both useContext and the context itself  .. in this case the Feedback Context ... But you still must access it see below Explanation of how to set variables to context state ",
    },
    {
      key: 2,
      title: "Extracting variables from state with Use context",
      text: "After you import the usecontext and whatever context as explained above, you can set a variable to ?anything that is in the value field of the context?  ..... right now it is only the feedback object ... so feks ....  const { feedback } = useContext(FeedbackContext) NOTE: you have to pass the context to usecontext(fbcontext)  ...  In this case it destructures the feedback on which comes from the value property of the fbcontext ",
    },
    {
      key: 2,
      title: "Passing down functions in state instead of props via useContext",
      text: "There are 2 functions that live in the app, addFeedback and deleteFeedback ... were being passed down as props ... want to move those to useContext .. few steps so will put these on separate cards below ",
    },
    {
      key: 2,
      title: "STEP1: Move handlers from props to Context/Setup new handlers on a context",
      text: "tHIS will assume that you have some existing handlers being passed down as props ... which I did before migrating ... if starting from scratch just do the same stuff but make it new instead of moving : deleteFeedback is being passed to feedbackList from app via the prop handleDelete ... cut/paste the function from App and move it to the context JUST BELOW STATE AND ABOVE THE RETURN  ",
    },
    {
      key: 2,
      title: "STEP2: pASS the function via the provider ",
      text: "below in the provider return, it is passing value={{feedback}} .. you gotta also pass the delete function .. easy .. value={{feedback, deleteFeedback}} note that shorthand is being used in the object it is really value={{feedback: feedback, deleteFeedback: deleteFeedback} .. If refactoring, remove the prop where you passed the function (also remove where you catch the prop in the component) ",
    },
    {
      key: 2,
      title: "SNAGS ENCOUNTERED STEP 2",
      text: "Delete feedback was being passed from feedbackList down to feedback item .. imported the function into feedback item ... first snag .. has to be imported in curly brackets ... dunnowhy yet .. const {deleteFeedback} = useContext(FeedbackContext) ... snag 2: in feedback Item i was deleting the handleDelete or whatever from props and replacing it with the function from usecontext ... I didnt see that it was passing the item.id ... SO CHECK IF THE FUNCTION YOU ARE REPLACING WAS PASSING SOMETHING ...     If it is passing something beware   ... you can't call it like ... onClick={deleteFeedback(item.id)} ... runs on mount and all kinda shit but not when you click it ... MUST SET IT UP WITH THE fat ARROW , I THInk you are passing a callback to the click handler ... like this ... onClick={()=>deleteFeedback(item.id)}" ,
    },
    {
      key: 2,
      title: "A MISTAKE I MADE TWICE",
      text: "REMEMBER: If moving a function or making a new one in The context file .... You gotta add it to the context return provider. I did all the stuff second try, but addFeedback was undefined, it wasn't added here    <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,}} ",
    },
    {
      key: 2,
      title: "Editing State that is already in Context ....SURPRISE!!!!",
      text: "Was making the edit icon in the feedback items. The purpose of this was to update some state that was already in context, feedback.       The first thing done in the context was to make a new state, not a method that accesses the already current state .... dunno why yet ....",
    },
    {
      key: 2,
      title: "bla",
      text: "bla bla bla",
    },
    {
      key: 2,
      title: "bla",
      text: "bla bla bla",
    },
    {
      key: 2,
      title: "bla",
      text: "bla bla bla",
    },
    {
      key: 2,
      title: "bla",
      text: "bla bla bla",
    },
   
  ];
  return (
    <div className="container">
      <h2>Lessons Learned</h2>
      <ul>
        {lessonsLearned.map((lesson, index) => (
          <div key={index} className="card">
            <h3>{lesson.title}</h3>
            <li>{lesson.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default LessonsLearned;
