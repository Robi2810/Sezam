import React from "react";
import person from "./person.svg";
import download from "./Download.svg";
import document from "./Document.svg";
import './DetailedCard.css'
import warning from './warning.svg'
import copy from './copy.svg'
import Type from "../dto/Type";
import DetailedInfo from "../dto/DetailedInfo";

function DetailedCard(detailedInfo: DetailedInfo, p: () => void) {
    return (
        <div className="detailed-card">
            <table>
                <tr>
                    <th rowSpan={3}><img className="img"
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"/>
                    </th>
                    <td colSpan={2} className="detailed-card-title">Cbonds</td>
                </tr>
                <tr>
                    <td colSpan={2} className="detailed-description">Информационная среда для профессионалов финансового
                        рынка и
                        инвесторов
                    </td>
                </tr>
                <tr>
                    <td className="detailed-persons-container">
                        <img src={person}/>
                    </td>
                    <td className="detailed-total">12/23</td>
                </tr>
            </table>

            { detailedInfo.type === Type.LIST ? list() :
                detailedInfo.type === Type.HSE_LOGIN ? hseLogin() :
                    detailedInfo.type === Type.SHARED_LOGIN ? sharedLogin(detailedInfo) : ""
            }

            <table>
                <tr>
                    <td width="100%"></td>
                    { detailedInfo.type === Type.SHARED_LOGIN ? <td>
                        <div className="extend">
                            Продлить
                        </div>
                    </td> : ""}
                    <td>
                        <div className="close" onClick={p}>
                        Звершить
                        </div>
                    </td>
                </tr>
            </table>

        </div>
    )
}

function sharedLogin(detailedInfo: DetailedInfo) {
    return <div>
        <div className="info-title">Метод Аутентификации</div>
        <div className="info-text">Укажите данные для входа на сайте по <a href="https://google.com"
                                                                           target="_blank">ссылке</a></div>
        <table width="100%">
            <tr>
                <td width="49%">
                    <div className="login-password-text">Логин</div>
                </td>
                <td width="2%" rowSpan={4}/>
                <td width="49%" rowSpan={4}>
                    <table className="warning-block">
                        <tr>
                            <td>
                                <img src={warning}/>
                            </td>
                            <td width="10px"/>
                            <td>
                                <div className="info-text">Для вас доступна сессия до 18:00, после завершения работы с
                                    системой нажмите на кнопку “завершить”
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td>
                    <div className="login-password-border">
                        <table>
                            <tr>
                                <td width="100%">
                                    <div className="info-text">NewLOGIN</div>
                                </td>
                                <td align="center">
                                    <img src={copy} onClick={ e => {
                                        navigator.clipboard.writeText(detailedInfo.login);
                                    }
                                    }/>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                <div className="login-password-text">Пароль</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="login-password-border">
                    <table>
                        <tr>
                            <td width="100%">
                                <div className="info-text">●●●●●●●●●●●</div>
                            </td>
                            <td align="center">
                                <img src={copy} onClick={ e => {
                                    navigator.clipboard.writeText(detailedInfo.password);
                                }
                                }/>
                            </td>
                        </tr>
                    </table>
                    </div>
                </td>
            </tr>
        </table>
    </div>

}

function hseLogin() {
    return <div>
        <div className="info-title">Метод Аутентификации</div>
        <div className="info-text">Для авторизации/регистрации в <a href="https://google.com"
                                                                    target="_blank">сервисе</a>, необходимо использовать
            вашу учетную запись заканчивающуюся на @hse.ru или @edu.hse.ru
        </div>
    </div>
}

function list() {
    return <div className="file-list">

        <table className="element">
            <tr>
                <td width="0"><img className="document" src={document}/></td>
                <td width="100%">
                    <div className="text">Сводка за 2023</div>
                </td>
                <td width="0"><img className="download" src={download}/></td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <div className="delimeter"></div>
                </td>
            </tr>
            <tr>
                <td width="0"><img className="document" src={document}/></td>
                <td width="100%">
                    <div className="text">Сводка за 2023</div>
                </td>
                <td width="0"><img className="download" src={download}/></td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <div className="delimeter"></div>
                </td>
            </tr>
            <tr>
                <td width="0"><img className="document" src={document}/></td>
                <td width="100%">
                    <div className="text">Сводка за 2023</div>
                </td>
                <td width="0"><img className="download" src={download}/></td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <div className="delimeter"></div>
                </td>
            </tr>
            <tr>
                <td width="0"><img className="document" src={document}/></td>
                <td width="100%">
                    <div className="text">Сводка за 2023</div>
                </td>
                <td width="0"><img className="download" src={download}/></td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <div className="delimeter"></div>
                </td>
            </tr>
            <tr>
                <td width="0"><img className="document" src={document}/></td>
                <td width="100%">
                    <div className="text">Сводка за 2023</div>
                </td>
                <td width="0"><img className="download" src={download}/></td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <div className="delimeter"></div>
                </td>
            </tr>
            <tr>
                <td width="0"><img className="document" src={document}/></td>
                <td width="100%">
                    <div className="text">Сводка за 2023</div>
                </td>
                <td width="0"><img className="download" src={download}/></td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <div className="delimeter"></div>
                </td>
            </tr>

        </table>
    </div>
}

export default DetailedCard