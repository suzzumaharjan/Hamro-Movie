// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { displayReview, saveReview } from "../Redux/movieDetailSlice";
// import avatar from '../Assests/Images/avatar.jpg'
// const ReviewForm = () => {
//   const [reviewValue, setreviewValue] = useState({ name: "", content: "" });
//   const dispatch = useDispatch();

//   // const moviedetail = useSelector(displayReview);

//   const handleSubmitForm = (e) => {
//     e.preventDefault();
    
//     dispatch(saveReview(reviewValue));
//   };
//   const handleChange = (e) => {
//     setreviewValue({ ...reviewValue, [e.target.name]: e.target.value });
//   };
//   return (
//     <div>
//       <form
//         style={{ maxWidth: "50rem", margin: "auto" }}
//         onSubmit={handleSubmitForm}
//       >
//         <h1 style={{ textAlign: "center" }}>Review Form</h1>
//         <div className="mb-3 my-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Username
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={reviewValue.name}
//             name="name"
//             aria-describedby="emailHelp"
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-floating my-3">
//           <textarea
//             className="form-control"
//             placeholder="Leave a comment here"
//             id="content"
//             name="content"
//             value={reviewValue.content}
//             style={{ height: "100px", resize: "none" }}
//             onChange={handleChange}
//           ></textarea>
//           <label htmlFor="floatingTextarea2">Comments</label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       {moviedetail?.map((data) => (
//         <div className="card review-content my-3">
//           <div className="d-flex m-2">
//             <div>
//               <img
//                 className="author-img"
//                 src={avatar}
//                 alt=""
//                 style={{ width: "2.9rem" }}
//               />
//             </div>
//             <div>
//               <p className="p-2 mx-3">
//                 <strong>{data.name}</strong>
//               </p>
//             </div>
//           </div>
//           <div>
//             <p className="author-content px-4">{data.content}</p>
//           </div>
//         </div>
//       ))};
//     </div>
//   );
// };

// export default ReviewForm;
