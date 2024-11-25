import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

DebateItem.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.number
};

function DebateItem({name, description, link, participants}) {
    return (
        <div className="flex items-center gap-2 mb-3 mr-2 ml-2 min-h-20 rounded-lg bg-gray-200 justify-between snap-start ">
            <FontAwesomeIcon className="ml-3" icon={faMessage} />
            <div className=" text-ellipsis overflow-hidden">
                <a className="font-bold" href={route(link)}>
                    {name}
                </a>
                <p className="text-gray-600 truncate w-full">{description}</p>
            </div>
            <FontAwesomeIcon className="" icon={faUsers} />
            <p className="mr-4 font-bold">{participants}</p>


        </div>
    );
}

export default DebateItem;
