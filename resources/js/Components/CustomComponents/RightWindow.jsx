import React from 'react';
import ProfileCard from "@/Components/CustomComponents/ProfileCard.jsx";
import MyDebateList from "@/Components/CustomComponents/MyDebateList.jsx";
import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import TrendingList from "@/Components/CustomComponents/TrendingList.jsx";

function RightWindow({classname}) {
    return (
        <div className={classname+" w-1/4 h-full sm:fixed sm:right-0 shadow-md flex-col space-y-0"}>
            <TrendingList/>
        </div>
    );
}

export default RightWindow;
