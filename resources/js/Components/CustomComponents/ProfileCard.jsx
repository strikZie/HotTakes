import React from 'react';
import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faUser} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import Dropdown from "@/Components/Dropdown.jsx";

function ProfileCard({ auth, classname}) {
    return (
        <div className={classname+" w-full bg-white "}>
            {auth.user ? (
                <div className="flex flex-row items-center w-full ">
                    <div className="flex flex-row h-full gap-4 pt-2 pb-2 items-center text-ellipsis overflow-hidden">
                        <a href={route('profile.index',{user: auth.user})}>
                            <img src="https://randomuser.me/api/portraits/women/20.jpg"
                                 className="h-16 w-16 ml-3 rounded-full shadow-md"/>
                        </a>

                        <div className="h-full">
                            <div className="font-bold text-xl text-ellipsis overflow-hidden h-5/6">{auth.user.name}</div>
                            <div className="h-1/6 text-ellipsis overflow-hidden">{"@" + auth.user.username}</div>
                        </div>
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                <FontAwesomeIcon className="size-6 right-0 basis-1/4"
                                                 icon={faEllipsis}></FontAwesomeIcon>

                            </button>
                        </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route('profile.index',{user: auth.user})}>Profile</Dropdown.Link>

                            <Dropdown.Link href={route('profile.edit')}>Profile Settings</Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>

                </div>

            ) : (
                <>
                    <div className="flex flex-row items-center w-full pl-6 pr-6">
                        <div className="flex flex-row h-20 w-full gap-32 pt-2 pb-2 items-center justify-between">
                            <a href="/profile" className="min-h-16 min-w-16 flex flex-row items-center">
                                <img src="/images/placeholderUserImage.jpg"
                                     className="h-16 w-16  rounded-full shadow-md"/>
                                <div className="font-bold text-xl">GUEST</div>

                            </a>
                            <div className=" h-fit flex flex-row items-center right-0 gap-2">
                                <a href="/login" className="">
                                    <button
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
                    hover:bg-indigo-500 active:bg-indigo-900 active:outline active:outline-2 active:outline-offset-2 active:outline-indigo-600">LOGIN
                                    </button>
                                </a>
                                <a href="/register" className="">
                                    <button
                                        className="rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm
                    hover:bg-gray-600 active:bg-gray-800 active:outline active:outline-2 active:outline-offset-2 active:outline-indigo-600">SIGN
                                        UP
                                    </button>
                                </a>
                            </div>
                        </div>


                    </div>
                </>
            )}


        </div>
    );
}

export default ProfileCard;
