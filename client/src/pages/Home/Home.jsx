import React, {useState} from 'react';

import HeaderWithProfile from '../../components/HeaderWithProfile/HeaderWithProfile';
import DesignCard from '../../components/DesignCard/DesignCard';
import postData from '../../data/posts.json';

const Home = () => {
    const [currPage, setCurrPage] = useState(0); // 0: viewing a list of posts, 1: viewing a specific post

    /* Renders "Recent Posts" if currPage is 0, back button otherwise */
    const titleContent = () => {
        console.log("Yeet");
        return currPage === 0 ?
            (<span class="page-title-text">Recent Posts</span>) : 
            (<span>Back</span>)
    }

    return (
        <div className="page-content">
            <HeaderWithProfile/>
            <div className="page-title">{titleContent()}</div>
            <div className="page-body">
            <DesignCard author={postData[0].author} body={postData[0].body} tags={postData[0].tags}/>
            </div>
        </div>
    )
}

export default Home;