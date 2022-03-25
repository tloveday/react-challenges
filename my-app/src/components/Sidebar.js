import React from "react";
import css from "./css/Sidebar.module.css"

/* Stateless Functonal Component */
function Sidebar (){
    return(
        <div className={css.sidebar}>
            <a>My Photos</a>
            <a>My Illustrations</a>
            <a>my Paintings</a>
        </div>
    )
}

export default Sidebar;