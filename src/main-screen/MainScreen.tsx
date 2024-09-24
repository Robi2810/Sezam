import React from 'react';
import './MainScreen.css';
import Card from "../card/Card";
import DetailedCard from "../detailed-card/DetailedCard";
import Type from "../dto/Type";
import DetailedInfo from "../dto/DetailedInfo";


function MainScreen() {

    const [showBlur, setShowBlur] = React.useState(false);
    const [type, setType] = React.useState(Type.LIST);

    return (
        <div>
            {showBlur ? <div className="blur"/> : null}
            {showBlur ? DetailedCard(new DetailedInfo("login", "pass", type), () => setShowBlur(false)) : null}
            <div className="main-screen">
                <div className="title">Базы данных</div>
                <div className="container">
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.LIST)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.HSE_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.SHARED_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.LIST)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.HSE_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.SHARED_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.LIST)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.HSE_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.SHARED_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.LIST)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.HSE_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.SHARED_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.LIST)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.HSE_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.SHARED_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.LIST)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.HSE_LOGIN)
                    })}
                    {Card(() => {
                        setShowBlur(true);
                        setType(Type.SHARED_LOGIN)
                    })}

                </div>
            </div>

        </div>
    );
}


export default MainScreen;