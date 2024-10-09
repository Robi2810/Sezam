import React from "react";
import person from "./person.svg";
import "./Card.css";
import { ShortKnowledgeBase, ShortKnowledgeBaseTypeEnum } from "../models";

function Card(p: () => void, e: ShortKnowledgeBase) {
  return (
    <div className="card" onClick={p}>
      <img className="img" src={e.iconUrl} />
      <div className="right-block">
        <div className="card-title">{e.name}</div>
        <div className="description">
          {e.description.length > 103 ? `${e.description.slice(0, 100)}...` : e.description}
        </div>
        {e.type === ShortKnowledgeBaseTypeEnum.CREDENTIALS && (
          <div className="persons">
            <img src={person} width="16px" height="16px" />
            <td className="total">{`${e.currentUsers}${e.maxUsers === -1 ? "" : ` / ${e.maxUsers}`}`}</td>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
