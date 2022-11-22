import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Yasmen yousef",
      userId: 1,
      profilePic:
        "https://i.pinimg.com/564x/f2/74/2e/f2742ee4c7b08a47732f19fca70e24d4.jpg",
      desc: "However difficult life may seem, there is always something you can do and succeed at. ",
      img: "https://i.pinimg.com/564x/eb/00/76/eb007610724509083ca57f98ddd74b03.jpg",
    },
    {
      id: 2,
      name: "Yasmen yousef",
      userId: 2,
      profilePic:
        "https://i.pinimg.com/564x/f2/74/2e/f2742ee4c7b08a47732f19fca70e24d4.jpg",
      desc: "here is never just one thing that leads to success for anyone. I feel it always a combination of passion, dedication, hard work, and being in the right place at the right time.” .",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
