import { Link, Head } from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import NavBar from "@/Components/CustomComponents/NavBar.jsx";
import MyDebateList from "@/Components/CustomComponents/MyDebateList.jsx";
import PostList from "@/Components/CustomComponents/PostList.jsx";
import TrendingList from "@/Components/CustomComponents/TrendingList.jsx";
import ProfileCard from "@/Components/CustomComponents/ProfileCard.jsx";
import LeftWindow from "@/Components/CustomComponents/LeftWindow.jsx";


export default function Home({ auth}) {
    return (
        <>
            <Head title="Home"/>
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center dark:selection:bg-indigo-200 bg-white dark:bg-black">

                <div className="w-screen sm:fixed flex sm:justify-center sm:items-center min-h-screen">
                    <LeftWindow auth={auth}/>
                    <PostList/>
                    <TrendingList/>
                </div>

                <NavBar/>

            </div>



        </>
    );
}
