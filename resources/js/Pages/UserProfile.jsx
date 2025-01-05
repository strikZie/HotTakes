import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHandMiddleFinger} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavBar from "@/Components/CustomComponents/NavBar.jsx";
import NavLink from "@/Components/NavLink.jsx";
import LeftWindow from "@/Components/CustomComponents/LeftWindow.jsx";
import RightWindow from "@/Components/CustomComponents/RightWindow.jsx";
import ProfileWindow from "@/Components/CustomComponents/ProfileWindow.jsx";

export default function UserProfile({user}) {

    return (

        <div className="w-screen h-screen sm:fixed flex  sm:justify-center sm:items-center ">
            <Head title={user.username} />
            <LeftWindow  auth={usePage().props.auth} classname="w-1/5 max-lg:hidden"/>
            <ProfileWindow user={user} classname="w-3/5 max-lg:w-full"/>
            <RightWindow classname="w-1/5 max-lg:hidden"/>
            <NavBar/>


        </div>


    );
}
