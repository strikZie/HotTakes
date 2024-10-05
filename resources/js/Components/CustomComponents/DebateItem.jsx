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
        <div className="flex items-center gap-3  mb-3 ml-5 mr-5 min-w-fit max-w-full min-h-20 max-h-fit rounded-lg bg-gray-200 justify-between snap-start ">
            <FontAwesomeIcon className="ml-3" icon={faMessage} />
            <div className="w-full">
                <a className="font-bold" href={route(link)}>
                    {name}
                </a>
                <p className="text-gray-600">{description}</p>
            </div>
            <FontAwesomeIcon className="" icon={faUsers} />
            <p className="mr-4 font-bold">{participants}</p>


        </div>
    );
}

export default DebateItem;
