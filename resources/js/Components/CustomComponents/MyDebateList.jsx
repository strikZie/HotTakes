import React from 'react';
import DebateItem from "@/Components/CustomComponents/DebateItem.jsx";




function MyDebateList() {
    return (
        <div className="w-full h-full bg-white ">
            <div className="text-xl font-bold
             ml-3 mr-3  max-w-full h-10 flex  items-center justify-center
             drop-shadow-md shadow-xl rounded border-solid border-2 border-gray-400">My Debates</div>
            <div className="h-full overflow-y-auto flex flex-col pb-10 pt-4">
                <DebateItem name="ISRAEL Vs PALESTINE" link="home" description="Discussing the war between israel and palestine" participants={21}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>
                <DebateItem name="Lebanon is GAY???!??" link="home" description="Is Lebanon GAY no socks on" participants={564}/>

            </div>

        </div>
    );
}

export default MyDebateList;
