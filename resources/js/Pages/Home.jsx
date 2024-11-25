import {Link, Head, usePage} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import NavBar from "@/Components/CustomComponents/NavBar.jsx";
import MyDebateList from "@/Components/CustomComponents/MyDebateList.jsx";
import PostList from "@/Components/CustomComponents/PostList.jsx";
import TrendingList from "@/Components/CustomComponents/TrendingList.jsx";
import ProfileCard from "@/Components/CustomComponents/ProfileCard.jsx";
import LeftWindow from "@/Components/CustomComponents/LeftWindow.jsx";
import RightWindow from "@/Components/CustomComponents/RightWindow.jsx";
import PaginationBar from "@/Components/CustomComponents/PaginationBar.jsx";
import React from "react";


export default function Home({ posts, currentPageNr, lastPageNr}) {
    const auth = usePage().props.auth;
    console.log(posts, posts.links,"gh", posts.links.first)
    return (
        <>
            <Head title="Home"/>
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center dark:selection:bg-indigo-200 bg-white dark:bg-black">

                <div className="w-screen sm:fixed flex  sm:justify-center sm:items-center min-h-screen">
                    <LeftWindow auth={auth} classname="w-1/5 max-lg:hidden"/>
                    <PostList classname="w-3/5 max-lg:w-full" posts={posts.data}/>
                    <RightWindow classname="w-1/5 max-lg:hidden"/>
                </div>

                <NavBar/>
                <PaginationBar classname="fixed right-0 bottom-0" currentPageNr={currentPageNr} nextPagePath={"/?page="+(currentPageNr+1)} previousPagePath={"/?page="+(currentPageNr-1)}/>
            </div>



        </>
    );
}
