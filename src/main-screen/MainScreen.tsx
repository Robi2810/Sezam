import React, { useEffect } from "react";
import "./MainScreen.css";
import Card from "../card/Card";
import DetailedCard from "../detailed-card/DetailedCard";
import Type from "../dto/Type";
import DetailedInfo from "../dto/DetailedInfo";
import { ResearcherKnowledgeBaseApi, ResearcherKnowledgeBaseApiFactory } from "../apis/researcher-knowledge-base-api";
import { Configuration } from "../configuration";
import TokenHolder from "../TokenHolder";
import keycloak from "../Keycloak";
import { ShortKnowledgeBase, ShortKnowledgeBaseTypeEnum, KnowledgeBase, KnowledgeBaseTypeEnum } from "../models";
import { ResearcherKnowledgeSessionApiFactory } from "../apis/researcher-knowledge-session-api";

const c = new Configuration({
  accessToken: () => {
    if (keycloak.token) {
      return keycloak.token;
    }

    return "";
  },
});

const kb = ResearcherKnowledgeBaseApiFactory(c, "http://localhost:8088");

const s = ResearcherKnowledgeSessionApiFactory(c, "http://localhost:8088");

function MainScreen() {
  const [data, setData] = React.useState(Array<ShortKnowledgeBase>);
  const [concreteData, setConcreteData] = React.useState<KnowledgeBase>();
  const [activeKb, setActiveKb] = React.useState(String);

  useEffect(() => {
    kb.getAllKnowledgeBases(0, 100)
      .then((d) => {
        setData(d.data.content!);
      })
      .finally(() => {
        s.getActiveSession()
          .then((e) => {
            setActiveKb(e.data.knowledgeBaseId);
            kb.getKnowledgeBase(e.data.knowledgeBaseId).then((kbinfo) => {
              setConcreteData(kbinfo.data);
            });
          })
          .catch((e) => {});
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      {activeKb !== "" ? <div className="blur" /> : null}
      {activeKb !== "" && concreteData !== undefined
        ? DetailedCard(concreteData, () => {
            if (concreteData.type === KnowledgeBaseTypeEnum.CREDENTIALS) {
              s.closeSession(concreteData.activeSession!.knowledgeBaseId);
            }
            setActiveKb("");
          })
        : null}
      <div className="main-screen">
        <div className="title">Базы данных</div>
        <div className="container">
          {data
            .sort(({ name }, { name: name2 }) => (name > name2 ? 1 : -1))
            .map((e) =>
              Card(() => {
                if (e.type === ShortKnowledgeBaseTypeEnum.CREDENTIALS) {
                  s.createNewSession(e.id).then(() =>
                    kb
                      .getKnowledgeBase(e.id)
                      .then((d) => setConcreteData(d.data))
                      .finally(() => setActiveKb(e.id))
                  );
                } else {
                  kb.getKnowledgeBase(e.id)
                    .then((d) => setConcreteData(d.data))
                    .finally(() => setActiveKb(e.id));
                }
              }, e)
            )}
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
