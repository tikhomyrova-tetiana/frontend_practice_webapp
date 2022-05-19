import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SpaceCard = (props) => {
  const { title, description, backgroundColor, color, id } = props;
  return (
    <div
      className="spaceCard"
      style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button>
        <Link to={`/spaces/${id}`}>Visit Space</Link>
      </button>
    </div>
  );
};

export default SpaceCard;
