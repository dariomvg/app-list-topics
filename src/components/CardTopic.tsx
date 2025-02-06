import "@/styles/card-topic.css";
import iconLink from "@/assets/icon-link.svg";
import { ObjTopic } from "@/types/types";

export const CardTopic = ({ topic }: { topic: ObjTopic }) => {
  const {name, link, details, range, comments, creator} = topic; 

  return (
    <li className="card-topic">
      <a href={`topic/${link}`} className="title-card-topic">
        {name}
        <img
          src={iconLink.src}
          alt="icon arrow link"
          width={30}
          height={30}
          className="icon-card-topic"
        />
      </a>
      <p className="details-card-topic">{details}</p>
      <hr />
      <div className="container-details">
        <strong className="position-list">Numero {range} hoy</strong>
        <span>-</span>
        <p className="count-comments">{comments.length} Comentarios</p>
        <span>-</span>
        <p className="creator-card-topic">{creator}</p>
      </div>
    </li>
  );
};
