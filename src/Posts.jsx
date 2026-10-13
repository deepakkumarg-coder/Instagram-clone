// import React, { useEffect, useState } from "react";
// import useFetch from "./useFetchData";
// function Posts() {
//   const [post, setPost] = useFetch("http://localhost:3002/posts");
//   return (
//     <div className="d-flex justify-content-center">
//       {post?.length > 0 ? (
//         <div>
//           {post.map((post, index) => (
//             /* Individual cards */
//             <div className="card" key={post?.id}>
//               <div className=" postheader d-flex gap-2">
//                 <img
//                   className=" dp rounded-circle"
//                   src={post?.user?.profileImage}
//                   alt="profile"
//                 />
//                 <h5>{post?.user?.username}</h5>
//               </div>
//               <div className="postimage">
//                 <img className="profileimage" src={post?.image} alt="Post" />
//               </div>
//               <div className="postfooter">
//                 <div className=" fottershareicon d-flex justify-content-between">
//                   <div className="d-flex gap-2">
//                     {post?.isLiked ? (
//                       <i class="bi bi-heart-fill"></i>
//                     ) : (
//                       <i class="bi bi-heart iconsize"></i>
//                     )}
//                     <span>{post?.likes}</span>
//                     <i
//                       className="bi bi-chat iconsize"
//                       style={{
//                         transform: "scaleX(-1)",
//                         display: "inline-block",
//                       }}
//                     ></i>
//                     <span>{post?.commentsCount}</span>
//                     <i class="bi bi-send iconsize"></i>
//                   </div>
//                   <div>
//                     <i class="bi bi-bookmark iconsize"></i>
//                   </div>
//                 </div>
//                 <div className="avatarsection">
//                   {post?.comments.length > 0 ? (
//                     <div className=" postfooteravatar">
//                       <div className=" avatar-stack ms-1">
//                         {post?.comments.map((val) => {
//                           return (
//                             <img
//                               class="avatar"
//                               src={val?.user?.profileImage}
//                               alt="avatar"
//                               key={val?.id}
//                             />
//                           );
//                         })}
//                       </div>
//                       <div>
//                         {post?.comments.length > 0 && (
//                           <span className="likedtext">
//                             Liked by {""}
//                             {post?.comments
//                               ?.slice(0, 2)
//                               .map((val) => val.user?.username)
//                               .join(",")}
//                             {post?.comment?.length > 2 &&
//                               `and ${post?.comments?.length - 2}others`}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   ) : (
//                     <></>
//                   )}
//                 </div>
//                 <div className="caption">
//                   <h5>{post?.caption}</h5>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>There is no data</p>
//       )}
//     </div>
//   );
// }

// export default Posts;


import React from "react";
import useFetch from "./useFetchData";

function Posts() {
  const [post, setPost] = useFetch("http://localhost:3002/posts");

  return (
    <div className="posts-container">
      {post?.length > 0 ? (
        post.map((post) => (
          <div className="instagram-post" key={post?.id}>

            {/* POST HEADER */}
            <div className="post-header">

              <div className="post-user">
                <img
                  className="post-profile-image"
                  src={post?.user?.profileImage}
                  alt="profile"
                />

                <div>
                  <strong>{post?.user?.username}</strong>
                </div>
              </div>

              <i className="bi bi-three-dots post-menu"></i>
            </div>


            {/* POST IMAGE */}
            <div className="post-image-container">
              <img
                className="post-image"
                src={post?.image}
                alt="Post"
              />
            </div>


            {/* POST FOOTER */}
            <div className="post-footer">

              {/* ACTIONS */}
              <div className="post-actions">

                <div className="left-actions">

                  {post?.isLiked ? (
                    <i className="bi bi-heart-fill liked-icon"></i>
                  ) : (
                    <i className="bi bi-heart"></i>
                  )}

                  <i className="bi bi-chat"></i>

                  <i className="bi bi-send"></i>

                </div>

                <i className="bi bi-bookmark"></i>

              </div>


              {/* LIKES */}
              <div className="likes">
                <strong>{post?.likes} likes</strong>
              </div>


              {/* CAPTION */}
              <div className="caption">

                <strong>{post?.user?.username}</strong>{" "}

                <span>{post?.caption}</span>

              </div>


              {/* COMMENTS */}
              {post?.comments?.length > 0 && (
                <div className="comments">

                  <span className="view-comments">
                    View all {post.comments.length} comments
                  </span>

                  <div className="comment-preview">

                    {post.comments.slice(0, 2).map((comment) => (
                      <div key={comment?.id}>
                        <strong>
                          {comment?.user?.username}
                        </strong>{" "}
                        {comment?.text}
                      </div>
                    ))}

                  </div>

                </div>
              )}


              {/* ADD COMMENT */}
              <div className="add-comment">

                <input
                  type="text"
                  placeholder="Add a comment..."
                />

                <button>Post</button>

              </div>

            </div>

          </div>
        ))
      ) : (
        <p>There is no data</p>
      )}
    </div>
  );
}

export default Posts;