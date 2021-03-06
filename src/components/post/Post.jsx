import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://sdc-blog.herokuapp.com/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        {/* <div className="postcard">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div> */}
        <Link to={`/post/${post._id}`} className="link" style={{marginTop:'20px'}}>
          <span className="postTitle"  style={{color:'black'}}>{post.title}</span>
        </Link>
        <span className="postDate"  style={{color:'white', fontSize:'15px', backgroundColor:'black', padding:'10px'}}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <Link to={`/post/${post._id}`} className="link" style={{marginTop:'20px'}}>
        <p className="postDesc">{post.desc}</p>
      </Link>
      <hr className="line"></hr>
    </div>
  );
}