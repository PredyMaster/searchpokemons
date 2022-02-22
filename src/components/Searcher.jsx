import React, {useState, useContext} from "react";
import style from "../assets/css/cards.module.css";

const Searcher = ({search}) => {
    const [searchString, setSearchString] = useState();

    const handleChange = (e) => {
        let searchString = e.target.value;
        setSearchString(searchString);
    }

    const hadnleSubmit = (e) => {
        e.preventDefault();
        search(searchString);
    }

    return (
        <React.Fragment>
            <form onSubmit={hadnleSubmit}>
                <input className={style.searcher} type="text" placeholder="search your pokemon" onChange={handleChange} />
            </form>            
        </React.Fragment>
    )
}

export default Searcher;