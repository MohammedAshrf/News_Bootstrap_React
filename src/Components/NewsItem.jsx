import Image from "../assets/newImage.png";

// eslint-disable-next-line react/prop-types
export default function NewsItem({ title, description, src, url, mode }) {
  return (
    <div
      className={`card 
      text-${mode ? "light" : "dark"} 
      mb-3 d-inline-block my-4 mx-4 px-2 py-2
        `}
      style={{
        width: "18rem",
        backgroundColor: mode ? "rgba(33, 35, 48, 1)" : "rgba(248, 249, 250)",
      }}
    >
      <img
        src={src ? src : Image}
        className="card-img-top"
        alt="..."
        style={{ width: "270px", height: "120px" }}
      />
      <div className="card-body">
        {/* eslint-disable-next-line react/prop-types */}
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
}
