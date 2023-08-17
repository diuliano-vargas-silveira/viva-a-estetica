import "./post.css";

export function Post({ id, userPhoto, userEmail, image }) {
  return (
    <li className="post">
      <div className="user__info">
        <img src={userPhoto} alt="" className="post__userImage" />
        <p>@{userEmail.split("@")[0]}</p>
      </div>
      <div className="post__imageContainer">
        <img src={image} alt="" className="post__image" />
      </div>
    </li>
  );
}