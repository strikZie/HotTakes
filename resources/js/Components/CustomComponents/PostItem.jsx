import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandMiddleFinger} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";


PostItem.propTypes = {
    post: PropTypes.objectOf(PropTypes.any)
};

function PostItem({post}) {

    return (
        <div className="w-full pl-12 pr-12 flex space-y-8">
            <link
                href=" https://cdn.jsdelivr.net/npm/font-awesome-animation@1.1.1/css/font-awesome-animation.min.css "
                rel="stylesheet"/>
            <div className="flex flex-col w-full h-fit bg-white rounded-lg shadow-md">
                <div className="flex flex-row h-20 mt-3 gap-4">
                    <img src={post.owner.avatar} className="h-16 w-16 ml-3 rounded-full shadow-md"/>
                    <div className="overflow-hidden">
                        <div className="font-bold text-xl">{post.owner.name}</div>
                        <div className="text-ellipsis overflow-hidden">{post.title}</div>
                    </div>
                </div>

                <div className="h-full ml-3 flex flex-row gap-4">
                    <div className="h-full flex flex-col">
                        <button className="h-16 w-16 faa-parent animated-hover text-gray-400 hover:text-gray-600 active:text-black">
                            <FontAwesomeIcon className="size-6 faa-tada faa-fast " icon={faHeart}/>
                            <div>99</div>
                        </button>
                        <button className=" h-16 w-16 faa-parent animated-hover text-gray-400 hover:text-gray-600 active:text-black">
                            <FontAwesomeIcon className="size-6 faa-tada faa-fast" icon={faHandMiddleFinger}/>
                            <div>99</div>
                        </button>
                    </div>
                    <div className="flex flex-col justify-between mb-2 w-full overflow-hidden">
                        <div className="max-h-full overflow-hidden text-ellipsis break-words pr-4">
                            {post.content}
                        </div>
                        <div className="max-h-full overflow-hidden text-gray-400">
                            {post.createdDate}
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default PostItem;
