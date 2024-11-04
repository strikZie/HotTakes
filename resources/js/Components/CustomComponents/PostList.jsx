import React, {useRef} from 'react';
import CreatePostBar from "@/Components/CustomComponents/CreatePostBar.jsx";
import PostItem from "@/Components/CustomComponents/PostItem.jsx";

function PostList({classname, posts}) {
    const post1 = {
        owner : {
            id: 1,
            name: 'Jackie Off',
            avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
        },
        createdDate: '06/10/2024 18:00 UTC',
        title: 'Black people are so gay',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Aliquam finibus ac purus non convallis. Vivamus at suscipit orci. Vestibulum ultricies sit amet magna aliquam placerat. Suspendisse suscipit enim posuere magna tristique, in luctus quam tincidunt. Nulla lacinia leo nisl, et pulvinar purus cursus in. Integer ac erat lorem. Nunc dapibus lectus et urna placerat vulputate. Duis lobortis ante non justo eleifend vestibulum. Pellentesque et ligula sollicitudin eros molestie tristique et convallis dui. Vestibulum tempor semper odio, in laoreet libero tempus eget. Maecenas eu nulla vel nisi tincidunt mattis vitae ut nisl. Donec ultrices, nulla eget elementum pretium, enim urna dapibus neque, in bibendum turpis magna in lectus. Phasellus luctus massa at libero pellentesque dictum. Cras pharetra efficitur odio, placerat facilisis eros commodo vitae. Morbi mi dolor, sagittis id eros a, consequat malesuada justo. '
    }



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
                <PostItem post={post1}/>
                <PostItem post={post1}/>
                <PostItem post={post1}/>
                <PostItem post={post1}/>
                <PostItem post={post1}/>
                <PostItem post={post1}/>
                <PostItem post={post1}/>

            </div>

        </div>
    );
}

export default PostList;
