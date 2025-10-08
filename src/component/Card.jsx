import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) =>{
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
      function clickHandler(){
        //logic
        if(likedCourses.includes(course.id)){
          setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id) ) );
          toast.warning("like removed");
        }
        else{
          // phle se like nahi hai ye course 
          //insert krna hai ye course liked courses me
          if (likedCourses.lenght === 0){
            setLikedCourses([course.id]);
          }
          else{
            //non-empty phle se
            setLikedCourses((prev) => [...prev, course.id])
          }
          toast.success("liked successfully");
        }

  }
  return(
    <div className="w-[300px] bg-gray-700 bg-opacity-80 rounded-md overflow-hidden">
<div className="relative">
  <img src={course.image.url } alt="" />
   
  <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-12px]  grid  place-items-center">
    <button onClick={clickHandler} className="cursor-pointer">
    {
      !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.73rem"/>) : (  <FcLike fontSize="1.73rem"/>)

    }
    
    </button>
    </div>
</div>
<div className="p-4">
  <p className="text-lg text-white font-semibold leading-6">{course.title}</p>
  <p className="mt-2 text-white">
  {
    course.description.length > 100
      ? course.description.substring(0, 100) + "..."
      : course.description
  }
</p>
</div>

    </div>
  )
}
export default Card;