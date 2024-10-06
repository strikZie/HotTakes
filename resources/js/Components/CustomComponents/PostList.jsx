import React, {useRef} from 'react';
import CreatePostBar from "@/Components/CustomComponents/CreatePostBar.jsx";
import PostItem from "@/Components/CustomComponents/PostItem.jsx";

function PostList() {
    const post1 = {
        owner : {
            id: 1,
            name: 'Jackie Off',
            avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
        },
        createdDate: '06/10/2024 18:00 UTC',
        title: 'Black people are so gay',
        content: 'Black people are so gay, i swear to god, they keep annoying the fuck out of me'
    }



    return (
        <div className="w-2/4 min-h-screen flex flex-col bg-gray-200 overflow-auto items-center selection:text-black space-y-20">
            <CreatePostBar/>
            <PostItem post={post1}/>
        </div>
    );
}

export default PostList;
