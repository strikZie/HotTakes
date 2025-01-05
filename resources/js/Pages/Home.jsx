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
import React, {useEffect, useState} from "react";


export default function Home({ posts, currentPageNr, lastPageNr, sessionMessage}) {

    const auth = usePage().props.auth;

    {/*  //AJAX CALL, could possible be done with xhhtp or JQuery instead
        fetch('/api/flash-message')
            .then((response) => response.json())
            .then((data) => {
                console.log('Flash message data:', data);
                if (data.success) {
                    setMessage(data.success); // Update the state
                }
            })
            .catch((error) => console.error('Error fetching flash message:', error));
    */
    }

    return (
        <>
            <head>
                <title>Home</title>
                {/*
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                */}
            </head>

            {/*
            <script>

                $.ajax({
                url: '/api/resources',
                type: 'GET',
                success: function(response)   {
                // Handle successful response
                const resourceList = $('#resource-list');
                resourceList.empty(); // Clear any previous content

                response.forEach(resource => {
                // Create HTML elements to display each resource
                const listItem = $('<li>').text(resource.name); // Replace 'name' with the actual attribute
                resourceList.append(listItem);
            });
            },
                error: function(error) {
                // Handle errors
                console.error('Error fetching resources:', error);
            }
            });
            </script>
            */}
            <Head title="Home"/>
            <div className="alert alert-success">{sessionMessage}</div>
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center dark:selection:bg-indigo-200 bg-white dark:bg-black">

                <div className="w-screen sm:fixed flex  sm:justify-center sm:items-center min-h-screen">
                    <LeftWindow auth={auth} classname="w-1/5 max-lg:hidden"/>
                    <PostList classname="w-3/5 max-lg:w-full" posts={posts.data}/>
                    <RightWindow classname="w-1/5 max-lg:hidden"/>
                </div>

                <NavBar/>
                <PaginationBar classname="fixed right-0 bottom-0" currentPageNr={currentPageNr}
                               nextPagePath={"/?page=" + (currentPageNr + 1)}
                               previousPagePath={"/?page=" + (currentPageNr - 1)}/>

            </div>

        </>
    );
}
