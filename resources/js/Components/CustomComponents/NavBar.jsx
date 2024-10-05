
import { Link, Head } from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faUsers} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faCompass} from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ auth}) {
    return (
        <>

            <div className="sm:fixed sm:bottom-2 w-60 h-10 rounded-lg bg-white border-solid border-2 border-gray-400 grid grid-cols-4 content-stretch">

                    <>
                        <Link className="flex justify-center items-center size-full" href={route('home')} >
                            <FontAwesomeIcon icon={faHouse} className=" text-gray-400 hover:size-5 ease-in-out duration-300 hover:text-gray-600 active:text-gray-800"/>
                        </Link>
                    </>
                    <>
                        <Link href={route('explore')} className="flex justify-center items-center size-full">
                            <FontAwesomeIcon icon={faCompass} className=" text-gray-400 hover:size-5 ease-in-out duration-300 hover:text-gray-600 active:text-gray-800"/>

                        </Link>
                    </>
                    <>
                        <Link href={route('search')} className="flex justify-center items-center size-full">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className=" text-gray-400 hover:size-5 ease-in-out duration-300 hover:text-gray-600 active:text-gray-800"/>
                        </Link>
                    </>
                    <>
                        <Link href={route('following')} className="flex justify-center items-center size-full">
                            <FontAwesomeIcon icon={faUsers} className=" text-gray-400 hover:size-5 ease-in-out duration-300 hover:text-gray-600 active:text-gray-800"/>
                        </Link>
                    </>



            </div>


        </>
    );
}
