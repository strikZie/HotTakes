import React, {useRef} from 'react';
import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
function CreatePostBar() {
    return (
        <div className=" flex flex-row justify-center gap-4 mt-3 max-w-full min-w-96 fixed drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)] ">
            <TextareaAutosize
                className="cursor-pointer focus:cursor-auto block rounded-md border-0 py-1.5  shadow-sm
                   ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                   text-sm font-semibold placeholder:text-gray-400  sm:text-sm sm:leading-6
                   resize-none focus:w-full "
                aria-label="empty textarea"
                type="text"
                placeholder="Click here to Post a Hot Take"
            />

            <button type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
                    hover:bg-indigo-500 active:bg-indigo-900 active:outline active:outline-2 active:outline-offset-2 active:outline-indigo-600">POST
            </button>
        </div>
    );
}

export default CreatePostBar;
