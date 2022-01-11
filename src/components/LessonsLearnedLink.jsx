import { FaToiletPaper } from "react-icons/fa";
import { Link } from "react-router-dom";

function LessonsLearnedLink() {
  return (
    <div className="lessons-learned-link">
      <Link to="/lessonsLearned">
        <FaToiletPaper size={30} />
      </Link>
      <Link to="/lessonsLearned">Lessons Learned</Link>
      
      <Link to="/lessonsLearned">
      <FaToiletPaper size={30} />
    </Link>
    </div>
  );
}

export default LessonsLearnedLink;
