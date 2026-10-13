import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import useFetch from "./useFetchData";

function Story() {
  const [activeStory, setActiveStory] = useState(null);
  const navigate = useNavigate();
  const [story, setStory] = useFetch("http://localhost:3002/story");
  const handleStoryClick = (id) => {
    setActiveStory(id);

    setTimeout(() => {
      navigate(`story/${id}/${story.length}`);
    }, 1000);
  };
  return (
    <div className="story">
      {story?.length > 0 &&
        story.map((item) => (
          <div
            key={item.id}
            className="onestory"
            onClick={() => handleStoryClick(item.id)}
          >
            <div
              className={
                activeStory === item.id ? "story-ring spin" : "story-ring"
              }
            >
              <img src={item?.user?.profileImage} alt={item?.user?.username} />
            </div>

            <h4 className="text-truncate">{item?.user?.username}</h4>
          </div>
        ))}
    </div>
  );
}

export default Story;
