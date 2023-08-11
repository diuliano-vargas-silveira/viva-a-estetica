export function Post({ id, userImage, image }) {
  return <li className="post">
    <img src={userImage} alt="" className="post__userImage" />
    <div className="post__imageContainer">
      <img src={image} alt="" className="post__image" />
    </div>
  </li>
}