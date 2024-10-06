import React, {useRef} from 'react';
import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function CreatePostBar() {
    return (
        <div className="flex flex-row sm:fixed items-center gap-4 mt-3">

            <div className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm">
                Click here to Post a Hot Take</div>
            <button type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
                    hover:bg-indigo-500 active:bg-indigo-900 active:outline active:outline-2 active:outline-offset-2 active:outline-indigo-600">POST
            </button>
        </div>
    );
    }

export default CreatePostBar;
