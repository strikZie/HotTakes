import React from 'react';
import ProfileCard from "@/Components/CustomComponents/ProfileCard.jsx";
import MyDebateList from "@/Components/CustomComponents/MyDebateList.jsx";
import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import NavLink from "@/Components/NavLink.jsx";

function ProfileWindow({user, classname}) {
    return (
        <div className={classname + " w-2/4 h-full sm:fixed shadow-md flex-col space-y-0"}>
            <div className="w-full p-4 flex flex-col ">
                <div className="h-64 w-full">
                    <img src={user.name} className="w-full h-full bg-black"/>
                </div>
                <div className="flex flex-col w-full h-36 bg-white rounded-lg shadow-md">
                    <div className="flex flex-row items-center h-20 mt-3 gap-4 pl-32 ">
                        <img src={user.name} className="h-32 w-32 ml-3 rounded-full shadow-md bg-red-500 mb-[100px]"/>
                        <div className="pb-10">
                            <div className="font-bold text-xl">{user.name}</div>
                            <div className="">{"@" + user.username}</div>
                        </div>
                    </div>
                    <div className="w-full h-20 pl-96 pr-96 grid grid-flow-col justify-items-center">
                        <NavLink className="text-[18px]">About</NavLink>
                        <NavLink className="text-[18px]">Posts</NavLink>
                        <NavLink className="text-[18px]">Followers</NavLink>
                        <NavLink className="text-[18px]">Following</NavLink>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ProfileWindow;
