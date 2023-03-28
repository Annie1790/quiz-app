import { click } from "@testing-library/user-event/dist/click";
import "../style/Menu_and_categories.scss"

const Menu_and_categories = ({clickOnGame}) => {

    const france = () => {
        clickOnGame("france")
    };

    const hungary = () => {
        clickOnGame("hungary")
    };

    const italy = () => {
        clickOnGame("italy")
    };

    const usa = () => {
        clickOnGame("usa")
    };

    const portugal = () => {
        clickOnGame("portugal")
    };



    return (
        <div id="menu-margin">
            <div>
                <h1>Fancy for a quiz?</h1>
            </div>
            <div id="categories-wrapper">
                <button className="categories-flex" onClick={france}>
                   <p>🇫🇷 France</p> 
                </button>
                <button className="categories-flex" onClick={hungary}>
                   <p>🇭🇺 Hungary</p> 
                </button>
                <button className="categories-flex"onClick={italy}>
                   <p>🇮🇹 Italy</p> 
                </button>
                <button className="categories-flex"onClick={usa}>
                   <p>🇺🇸 United States</p> 
                </button>
                <button className="categories-flex"onClick={portugal}>
                   <p>🇵🇹 Portugal</p> 
                </button>
            </div>
        </div>
    )
};

export default Menu_and_categories;