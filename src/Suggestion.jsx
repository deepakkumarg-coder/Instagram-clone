import React from "react";
import useFetch from "./useFetchData";
import "./index.css";

function Suggestion() {
  const [profile, setProfile] = useFetch("http://localhost:3002/profile");
  const [suggestion, setSuggestion] = useFetch(
    "http://localhost:3002/suggestion",
  );

  const handleFollow = (id) => {
    setSuggestion((prev) =>
      prev.map((val) => {
        if (val?._id === id) {
          return {
            ...val,
            isFollowing: !val.isFollowing,
          };
        }

        return val;
      }),
    );
  };

  return (
    <div>
      {profile?.length > 0 ? (
        <div className=" suggestionprofilecontainer m-4">
          {profile.map((val) => (
            <div className=" profilesuggestion " key={val?.user?._id}>
              <div className=" profilesuggestioncontainer1">
                <img
                  className="  suggestionimage  rounded-circle"
                  src={val?.user?.profileImage}
                  alt="profile"
                />
                <h5>{val?.user?.username}</h5>
              </div>
              <div>
                <small className="text-primary">Switch</small>
              </div>
            </div>
          ))}
          <div className="suggestionall mt-4">
            <p>Suggested for you</p>
            <small>See All</small>
          </div>

          {suggestion.map((val) => (
            <div className=" profilesuggestion mt-4 " key={val?._id}>
              <div className=" profilesuggestioncontainer1">
                <img
                  className=" suggestionimage rounded-circle"
                  src={val?.profileImage}
                  alt="profile"
                />
                <h5>{val?.username}</h5>
              </div>
              <div>
                {/* <small
                  className="text-primary cursor-pointer"
                  onClick={() => handleFollow(val._id)}
                >
                  follow
                </small> */}
                <button
                  className={`btn btn-sm rounded ${
                    val.isFollowing ? "btn-light border" : "btn-primary"
                  }`}
                  onClick={() => handleFollow(val._id)}
                >
                  {val.isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4> No Suggestion data</h4>
      )}
    </div>
  );
}

export default Suggestion;
