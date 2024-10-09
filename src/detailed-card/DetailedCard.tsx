import React from "react";
import person from "./person.svg";
import download from "./Download.svg";
import document from "./Document.svg";
import "./DetailedCard.css";
import warning from "./warning.svg";
import copy from "./copy.svg";
import Type from "../dto/Type";
import DetailedInfo from "../dto/DetailedInfo";
import { KnowledgeBase, KnowledgeBaseDataFiles, KnowledgeBaseTypeEnum } from "../models";
import copyToClipboard from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

function DetailedCard(kb: KnowledgeBase, p: () => void) {
  return (
    <div className="detailed-card">
      <table>
        <tr>
          <th rowSpan={3}>
            <img className="DetailedCard__img" src={kb.iconUrl} />
          </th>
          <td colSpan={2} className="detailed-card-title">
            {kb.name}
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="detailed-description">
            {kb.description}
          </td>
        </tr>
        {kb.type === KnowledgeBaseTypeEnum.CREDENTIALS ? (
          <tr>
            <td className="detailed-persons-container">
              <img src={person} />
            </td>
            <td className="detailed-total">{`${kb.currentUsers}${kb.maxUsers === -1 ? "" : ` / ${kb.maxUsers}`}`}</td>
          </tr>
        ) : (
          <></>
        )}
      </table>

      {kb.type === KnowledgeBaseTypeEnum.FILE
        ? list(kb.data!.files!)
        : kb.type === KnowledgeBaseTypeEnum.INSTRUCTION
        ? hseLogin(kb.redirectUrl!, kb.instruction!)
        : kb.type === KnowledgeBaseTypeEnum.CREDENTIALS
        ? sharedLogin(
            new DetailedInfo(
              kb.data!.credentials!.username,
              kb.data!.credentials!.password,
              Type.SHARED_LOGIN,
              kb.activeSession!.endAt,
              kb.redirectUrl!
            )
          )
        : ""}

      <table>
        <tr>
          <td width="100%"></td>
          {/* { detailedInfo.type === Type.SHARED_LOGIN ? <td>
                        <div className="extend">
                            Продлить
                        </div>
                    </td> : ""} */}
          <td>
            <button type="button" className="close" onClick={p}>
              Завершить
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

function sharedLogin(detailedInfo: DetailedInfo) {
  return (
    <div>
      <div className="info-title">Метод Аутентификации</div>
      <div className="info-text">
        Укажите данные для входа на сайте по{" "}
        <a href={detailedInfo.redirectUrl} target="_blank">
          ссылке
        </a>
      </div>
      <table width="100%">
        <tr>
          <td width="49%">
            <div className="login-password-text">Логин</div>
          </td>
          <td width="2%" rowSpan={4} />
          <td width="49%" rowSpan={4}>
            <table className="warning-block">
              <tr>
                <td>
                  <img src={warning} />
                </td>
                <td width="10px" />
                <td>
                  <div className="info-text">
                    Для вас доступна сессия до {new Date(detailedInfo.endAt).toLocaleString()}, после завершения работы
                    с системой нажмите на кнопку “завершить”
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
                    <div className="info-text">{detailedInfo.login}</div>
                  </td>
                  <td align="center">
                    <img
                      src={copy}
                      onClick={(e) => {
                        copyToClipboard(detailedInfo.login);
                        toast("Логин скопирован в буфер обмена");
                      }}
                    />
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
                    <img
                      src={copy}
                      onClick={(e) => {
                        copyToClipboard(detailedInfo.password);
                        toast("Пароль скопирован в буфер обмена");
                      }}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

function hseLogin(redirectUrl: string, instruction: string) {
  return (
    <div>
      {Boolean(instruction) && (
        <>
          <div className="info-title">Метод Аутентификации</div>
          <div className="info-text">{instruction}</div>
        </>
      )}
      <a href={redirectUrl} target="_blank">
        Перейти в сервис
      </a>
    </div>
  );
}

function list(files: KnowledgeBaseDataFiles[]) {
  return (
    <div className="file-list">
      <table className="element">
        {files.map((f) => (
          <>
            <tr>
              <td width="0">
                <img className="document" src={document} />
              </td>
              <td width="100%">
                <div className="text">{f.name}</div>
              </td>
              <td width="0">
                <a href={f.url} download={true}>
                  <img className="download" src={download} />
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div className="delimeter"></div>
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default DetailedCard;
