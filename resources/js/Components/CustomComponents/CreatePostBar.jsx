import React, {useRef} from 'react';
import {Link, useForm, usePage} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';



function CreatePostBar() {
    const user = usePage().props.auth.user;

    const newPost = useForm({
        title: '',
        content: '',
        user_id: user.id,
    });
    function handleChange(event) {
        this.setState({value: event.target.value});
    }
    const CreatePost = (e) => {
        newPost.data.title = 'test title'
        newPost.data.content = document.getElementById('post_content_area').value
        console.log("form submitted : "+newPost.data.content+ " : " + newPost.data.user_id)
        e.preventDefault();

        newPost.post(route('post.create'), {
            onSuccess: () => {
                console.log("succes")
                newPost.reset()
            }
        }) ;
    };

    return (
        <form onSubmit={CreatePost} >
            <div
                className=" flex flex-row justify-center gap-4 mt-3 max-w-full min-w-96 fixed drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)] ">
                <TextareaAutosize
                    className="cursor-pointer focus:cursor-auto block rounded-md border-0 py-1.5  shadow-sm
                   ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                   text-sm font-semibold placeholder:text-gray-400  sm:text-sm sm:leading-6
                   resize-none focus:w-full "
                    aria-label="empty textarea"
                    type="text"
                    value={newPost.data.content}
                    onChange={(e) => newPost.setData('content', e.target.value)}
                    placeholder="Click here to Post a Hot Take"
                    id="post_content_area" maxLength="255"
                    required
                />

                <button type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
                    hover:bg-indigo-500 active:bg-indigo-900 active:outline active:outline-2 active:outline-offset-2 active:outline-indigo-600">POST
                </button>
            </div>
        </form>
    );
}


export default CreatePostBar;
