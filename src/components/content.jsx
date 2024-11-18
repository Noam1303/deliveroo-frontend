import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Content = (props) => {
    const categories = props;
    const key = Object.keys(categories);
    const tab = [];

    for(let i = 0; i < key.length; i++) {
        tab.push(categories[key[i]]);
    }    
    
    return (
        <div className="container">
            {tab[0].map((result, index) => {
                if(result.meals.length > 0){
                    return (
                        <div key={index}>
                                <h1>
                                    {result.name}
                                </h1>
                            <div className="container-categories">
                                {result.meals.map((result, index) =>{
                                    return <div key={index} className="container-categories-content">
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
                                            <img className="img" src={result.picture} alt={result.title + " img"} width="150px" height="150px"/>
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
    )
}

export default Content;