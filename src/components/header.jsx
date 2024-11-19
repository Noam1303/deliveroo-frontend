const Header = (props) => {
    const data = props.data
    
    return(
        <header>
            <div className="header-container">
                <div className="logo" >
                    <img src="logo.png" alt="deliveroo logo" width="40px" /> Deliveroo
                </div>
            </div>
            <div className="border-bottom"/>
            <div>
                <div className="restaurant-info">
                    <div className="info-text">
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                    </div>
                    <div className="info-img">
                        <img  className="img" src={data.picture} alt="restaurant photo" width="400px"/>
                    </div>
                </div>
            </div>
                
        </header>
    )
}

export default Header