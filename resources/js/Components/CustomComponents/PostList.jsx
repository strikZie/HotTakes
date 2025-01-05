import React, {useEffect, useRef, useState} from 'react';
import CreatePostBar from "@/Components/CustomComponents/CreatePostBar.jsx";
import PostItem from "@/Components/CustomComponents/PostItem.jsx";
import PaginationBar from "@/Components/CustomComponents/PaginationBar.jsx";

function PostList({classname, posts}) {



    return (

        <div className={classname+" w-2/4 h-full flex flex-col bg-gray-200 items-center space-y-20 sm:fixed"}>

            <div className="h-full w-full flex flex-col overflow-y-auto items-center">
                <CreatePostBar/>

                {posts.map((element, i) => {
                        const tempPost = {
                            owner : {
                                id: element.user.id,
                                name: element.user.name,
                                avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
                            },
                            createdDate: element.created_at,
                            title: element.title,
                            content: element.content
                        }
                        return <PostItem post={tempPost}/>
                })}

            </div>

        </div>
    );
}

export default PostList;
