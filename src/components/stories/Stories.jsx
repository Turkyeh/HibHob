import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/AuthContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Yasmen yousef",
      img: "https://i.pinimg.com/originals/46/fa/a7/46faa73b1658bb823e116d299145b580.gif",
    },
    {
      id: 2,
      name: "Eslam Ahmad",
      img: "https://i.pinimg.com/564x/13/0b/a6/130ba629cc797197017330d221851d2b.jpg",
    },
    {
      id: 3,
      name: "Salma Omar",
      img: "https://i.pinimg.com/236x/39/aa/7f/39aa7fead97efb27d6157b0c6a23bd1b.jpg",
    },
    {
      id: 4,
      name: "Laila Ahmad",
      img: "https://i.pinimg.com/236x/12/93/d3/1293d3919145fe2d6f649f799f3b4c87.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        <button>+</button>
        {/* ضيفي الصور */}
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories