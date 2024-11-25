import React from 'react';
import ProfileCard from "@/Components/CustomComponents/ProfileCard.jsx";
import MyDebateList from "@/Components/CustomComponents/MyDebateList.jsx";
import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function LeftWindow({auth, classname}) {
    return (
        <div className={classname+" w-1/4 h-full sm:fixed sm:left-0 shadow-md flex-col space-y-0"}>
            <ProfileCard classname="" auth={auth}/>

            <MyDebateList/>
        </div>
    );
}

export default LeftWindow;
