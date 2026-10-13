import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function ViewStory() {
  const { id, total } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3002/story/${id}`)
      .then((data) => data.json())
      .then((data) => setStory(data))
      .catch((error) => console.log(error));
  }, []);
  if (Number(id) > Number(total) || Number(id) <= 0) navigate("/");
  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center align-items-center gap-4">
          <Link to={`http://localhost:3000/story/${Number(id) - 1}/${total}`}>
            <i class="bi bi-arrow-left-circle fs-3"></i>
          </Link>

          <img className="vh-100" src={story?.image} alt="story" />
          <Link to={`http://localhost:3000/story/${Number(id) + 1}/${total}`}>
            <i class="bi bi-arrow-right-circle fs-3"></i>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ViewStory;
