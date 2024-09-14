import React from 'react';
import './MainScreen.css';
import Card from "../card/Card";
import DetailedCard from "../detailed-card/DetailedCard";
import Type from "../detailed-card/Type";


function MainScreen() {

    const [showBlur, setShowBlur] = React.useState(false);

    return (
        <div>
            {showBlur? <div className="blur"/>: null}
            {DetailedCard(Type.LIST)}
            <div className="main-screen">
                <div className="title">Базы данных</div>
                <div className="container">
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}
                    {Card(()=>setShowBlur(true))}


                </div>
            </div>

        </div>
    );
}



export default MainScreen;