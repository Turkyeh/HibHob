import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/236x/6a/1f/b7/6a1fb7da443328b55d8eaa29d7c37eaf.jpg"
                alt=""
              />
              <span>ِAmani Ali</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/236x/55/b4/be/55b4befb51e535cd88cdd59adef6470f.jpg"
                alt=""
              />
              <span>Sami adnan</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/236x/92/e0/fe/92e0fe6d3863b417a1aece597ee3331a.jpg"
                alt=""
              />
              <p>
                <span>Laila Yousef</span> changed their cover picture
              </p>
            </div>
            <span>1 hour ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/236x/3c/27/19/3c27192efcf810b3acdf06f21b90a63f.jpg"
                alt=""
              />
              <p>
                <span>Malak Almomane</span> changed their cover picture
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/236x/5a/22/17/5a2217a30a5306fb3288e9a4c82b892c.jpg"
                alt=""
              />
              <p>
                <span>Hana Ra</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/236x/f1/df/08/f1df08ccc21d7cc8dac8122c3ff79a45.jpg"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default RightBar;
