import React from "react";
import person from "./person.svg";
import './Card.css'


function Card(p: () => void){

    return (
        <div className="card" onClick={p}>
            <table>
                <tr>
                    <th rowSpan={3}><img className="img"
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"/>
                    </th>
                    <td colSpan={2} className="card-title">Cbonds</td>
                </tr>
                <tr>
                    <td colSpan={2} className="description">Информационная среда для профессионалов финансового рынка и
                        инвесторов
                    </td>
                </tr>
                <tr>
                    <td className="persons-container">
                        <img src={person}/>
                    </td>
                    <td className="total">12/23</td>
                </tr>
            </table>
        </div>
    )
}

export default Card