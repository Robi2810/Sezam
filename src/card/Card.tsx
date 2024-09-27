import React from "react";
import person from "./person.svg";
import './Card.css'
import { ShortKnowledgeBase, ShortKnowledgeBaseTypeEnum } from "../models";


function Card(p: () => void, e: ShortKnowledgeBase){
    return (
        <div className="card" onClick={p}>
            <table>
                <tr>
                    <th rowSpan={3}><img className="img"
                                         src={e.iconUrl}/>
                    </th>
                    <td colSpan={2} className="card-title">{e.name}</td>
                </tr>
                <tr>
                    <td colSpan={2} className="description">{e.description}
                    </td>
                </tr>
                {e.type === ShortKnowledgeBaseTypeEnum.CREDENTIALS ?<tr>
                    <td className="persons-container">
                        <img src={person}/>
                    </td>
                    <td className="total">{e.currentUsers+"/"+e.maxUsers}</td>
                </tr> :<></>}
            </table>
        </div>
    )
}

export default Card