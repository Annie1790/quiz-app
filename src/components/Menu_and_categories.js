import "../style/Menu_and_categories.scss"

const Menu_and_categories = () => {
    return (
        <div id="menu-margin">
            <div>
                <h1>Fancy for a quiz?</h1>
            </div>
            <div id="categories-wrapper">
                <div className="categories-flex">
                   <p>🇫🇷 France</p> 
                </div>
                <div className="categories-flex">
                   <p>🇭🇺 Hungary</p> 
                </div>
                <div className="categories-flex">
                   <p>🇮🇹 Italy</p> 
                </div>
            </div>
        </div>
    )
};

export default Menu_and_categories;