import { ObjComment } from "@/types/types";
import iconDelete from "@/assets/icon-delete.svg";
import "@/styles/card-comment.css";

export const CardComment = ({
  comment,
  removeComment,
  currentUser,
  idTopic
}: {
  comment: ObjComment;
  removeComment: (idComment: number, idTopic: number) => void;
  currentUser: string;
  idTopic: number;
}) => {
  const { user, comment: content, date, id } = comment;

  return (
    <li className="comment">
      <div className="header-comment">
        <strong className="user-comment">{user}</strong>
        <p className="date-comment">{date}</p>
        {currentUser === user && (
          <img
            src={iconDelete.src}
            alt="icon delete"
            width={30}
            height={30}
            onClick={() => removeComment(id, idTopic)}
            className="icon-delete"
          />
        )}
      </div>
      <p className="content-comment">{content}</p>
    </li>
  );
};
