
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./components/context/FeedbackContext";

import Header from "./components/Header";
import LessonsLearned from "./components/LessonsLearned";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import LessonsLearnedLink from "./components/LessonsLearnedLink";
  //////////////////////////test area/////////////////
  // import Counter from "./components/TestCounter";
  //////////////////////////test area/////////////////


function App() {
  return (
    <FeedbackProvider>
    <Router>
{/*<Counter />*/}
    <LessonsLearnedLink />
      <Header text="Feedback App" />
  
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          />
 
          <Route path="/lessonsLearned" element={<LessonsLearned />} />
  
          <Route path="/about" element={<AboutPage />} />
  
        </Routes>
        <AboutIconLink />
  
      </div>
    </Router>
    </FeedbackProvider>
    
  )
}

export default App;


