import { Link, Head } from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import NavBar from "@/Components/CustomComponents/NavBar.jsx";
import MyDebateList from "@/Components/CustomComponents/MyDebateList.jsx";
import PostList from "@/Components/CustomComponents/PostList.jsx";
import TrendingList from "@/Components/CustomComponents/TrendingList.jsx";


export default function Home({ auth}) {
    return (
        <>
            <Head title="Home"/>
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center dark:selection:bg-indigo-200 bg-white dark:bg-black">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "
                        >
                            <FontAwesomeIcon icon={faUser} className="size-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "/>


                        </Link>

                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}

                </div>
                <div className="w-screen sm:fixed flex sm:justify-center sm:items-center min-h-screen">
                    <MyDebateList/>
                    <PostList/>
                    <TrendingList/>
                </div>

                <NavBar/>
            </div>





        </>
    );
}
