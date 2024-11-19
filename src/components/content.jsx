import {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Content = (props) => {

    const [sousTotal, setSousTotal] = useState(0)

    const {tabAchat, setTabAchat, categories} = props;
    const key = Object.keys(categories);
    const tab = [];

    for(let i = 0; i < key.length; i++) {
        tab.push(categories[key[i]]);
    }    

    const handleClick = (title, price) => {

        const newTab = [...tabAchat]
        let bool = false

        for(let i = 0; i < newTab.length; i++) {
            if(newTab[i][0] === title){
                newTab[i][2] ++;
                bool = true;
                break;
            }
        }
        if(!bool){
            newTab.push([title, price, 1]);
        }
        setTabAchat(newTab);

        let newSousTotal = 0

        for(let i = 0; i < newTab.length; i++){
            newSousTotal += Math.round((newTab[i][1] * newTab[i][2])*100)/100
            newSousTotal = Math.round(newSousTotal * 100)/100
        }
        setSousTotal(newSousTotal)

        const element = document.querySelector('#achat')
        if(element !== null){            
            if(newTab.length > 0) {
                element.classList.remove('achat')
                element.classList.add('achat-non-vide')
            }
            else {
                element.classList.remove('achat-non-vide')
                element.classList.add('achat')
            }            
        }
    }

    const handleMoins = (title) => {
        const newTab = [...tabAchat]
        for(let i = 0; i < newTab.length; i++) {
            if(newTab[i][0] === title){
                    newTab[i][2] --;
                    if(newTab[i][2] === 0){
                        newTab.splice(i, 1);
                    }
                break;
            }
        }
        setTabAchat(newTab);

        let newSousTotal = 0

        for(let i = 0; i < newTab.length; i++){
            newSousTotal += Math.round((newTab[i][1] * newTab[i][2])*100)/100
            newSousTotal = Math.round(newSousTotal * 100)/100

        }
        setSousTotal(newSousTotal)
    }

    const handlePlus = (title) => {
        const newTab = [...tabAchat]
        for(let i = 0; i < newTab.length; i++) {
            if(newTab[i][0] === title){
                if(newTab[i][2] < 99){
                    newTab[i][2] ++;
                }
                break;
            }
        }
        
        let newSousTotal = 0

        for(let i = 0; i < newTab.length; i++){
            newSousTotal += Math.round((newTab[i][1] * newTab[i][2])*100)/100
            newSousTotal = Math.round(newSousTotal * 100)/100
        }
        setSousTotal(newSousTotal)
    }

    return (
        <div className="main-container">
            <div className="second-container">

                <div className="container">
                    {tab.map((result, index) => {
                        if(result.meals.length > 0){
                            return (
                                <div key={index}>
                                        <h1>
                                            {result.name}
                                        </h1>
                                    <div className="container-categories">
                                        {result.meals.map((result, index) =>{
                                            return <div key={index} className="container-categories-content" onClick={() => handleClick(result.title, result.price)}>
                                                <div className="categories-text">
                                                    <h2>
                                                        {result.title}
                                                    </h2>
                                                    <p>
                                                        {result.description}
                                                    </p>
                                                    <div className="price-container">
                                                        <div>
                                                            {result.price} €
                                                        </div>
                                                        <div className='etoile'>
                                                            {result.popular ? <FontAwesomeIcon icon={faStar}/>: ""}
                                                        </div>
                                                    </div>
                
                                                </div>
                                                <div className="categories-img">
                                                    {result.picture ?
                                                    <img className="img" src={result.picture} alt={result.title + " img"} width="110px" height="110px"/>
                                                    : ""}
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            )
                        }
                        
                    })}
                </div>
                <div className="panier">
                    <div className='achat-container'>
                        <button id='achat' className='achat' onClick={() => {console.log("achat");}}>
                            Valider mon Panier
                        </button>
                    </div>
                    <div className="panier-content">
                        <div className="commande-container">

                            {tabAchat.length === 0 ? <p>Le panier est vide</p> :
                            tabAchat.map((result, index) => {
                                
                                return(
                                    <div key={index} className='commande-panier'>
                                        <div className="affichage-panier">
                                            <button className='panier-button' onClick={() => handleMoins(result[0])}>-</button>
                                                <div className="result">
                                                    {result[2]}
                                                </div>
                                            <button className='panier-button' onClick={() => handlePlus(result[0])}>+</button>
                                        </div>
                                        <div className='panier-title'>
                                            {result[0]}
                                        </div>
                                        <div className='panier-price'>
                                            {result[1]} €
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {tabAchat.length === 0 ? "  " :
                        <div className="calcul">
                            <div className="sous-total">
                                <div>
                                    Sous-Total
                                </div>
                                <div>
                                    {sousTotal} €
                                </div>
                            </div>
                            <div className="frais">
                            <div>
                                    Frais de livraison
                                </div>
                                <div>
                                    2.50 €
                                </div>
                            </div>
                            <div className="total">
                                <h1>
                                        Total
                                    </h1>
                                    <div>
                                        {sousTotal + 2.50} €
                                    </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;