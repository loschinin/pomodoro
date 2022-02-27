import React, {FC, useState} from 'react';
import Post from "../../Post/Post";

const Title:FC<{title: string; id?: number }> = ({title}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
            <>
                <h2>
                    <a href="#post-modal" onClick={() => setIsModalOpen(true)}>{title}</a>
                </h2>
                {isModalOpen && <Post title={title} onClose={() => setIsModalOpen(false)}/>}
            </>
        );
};

export default Title;