import React from 'react';
import HeaderWithNav from '../../components/HeaderWithNav/HeaderWithNav';

import './CreatePost.css';

const CreatePost = () => {
    /* Critique types */
    const critiqueTypes = ['Feedback', 'Just sharing'];
    /* Tags */
    const critiqueTags = ['Typography', 'UXDesign', 'Pencil', 'Wireframing', 'Paper', 'PhotoShop'];

    /* Renders a list of Critique types */
    const critiqueTypeList = critiqueTypes.map((critiqueType) => {
        return <div className="create-post-option">{critiqueType}</div>
    })
    /* Renders a list of critique tags */
    const critiqueTagList = critiqueTags.map((critiqueTag) => {
        return <div className="create-post-option">{critiqueTag}</div>
    })

    return (
        <div className="page-content">
            <HeaderWithNav/>
            <div className="page-body">
                <div className="create-post-select-top">
                    <div class="create-post-select-title">What type of critique are you looking for?</div>
                    <div class="create-post-options-wrapper">
                        {critiqueTypeList}
                    </div>
                </div>
                <div className="create-post-select-bottom">
                    <div class="create-post-select-title">Select tags</div>
                    <div class="create-post-options-wrapper">
                        {critiqueTagList}
                    </div>
                </div>
                <button className="upload-button">Upload File</button>
            </div>
        </div>
    )
}

export default CreatePost;