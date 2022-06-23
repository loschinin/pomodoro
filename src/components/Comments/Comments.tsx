import React, {useState} from 'react';
import Button from "../Card/Button/Button";
import useFocusTextarea from "../../hooks/useFocusTextarea";
import {CommentForm} from "./CommentForm";

const Comments = () => {

    // const [uncontrolledComment, setUncontrolledComment] = useState('')
    // const [valueForControlledForm, setValueForControlledForm] = useState('Михаил Рогов, ')
    // const [commentForControlledForm, setCommentForControlledForm] = useState('')
    const [isCommentsOpened, setIsCommentsOpened] = useState(false)

    // const ref = useRef<HTMLTextAreaElement>(null)
    const [textAreaRef] = useFocusTextarea()
    console.log(textAreaRef)

    /*const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        ref.current?.value && setUncontrolledComment(`Михаил Рогов, ${ref.current?.value}`)
    }*/

    function handleOpenComments() {
        setIsCommentsOpened(!isCommentsOpened)
    }


    return (
        <div>
            <h2>Comments</h2>
            <h3>First comment</h3>
            <h3>Second comment</h3>
            <Button text={!isCommentsOpened ? 'Скрыть комментарии' : 'Ответить'} onClick={handleOpenComments} />
            {!isCommentsOpened && (
                <>
                    {/* <h2>From uncontrolled form</h2>
                    {uncontrolledComment}
                    <br/>
                    <br/>
                    <form onSubmit={handleSubmit} style={formStyles}>
                        <textarea ref={ref} style={textAreaStyles} />
                        <button style={{backgroundColor: 'black', width: '70px', height: '30px'}}>Send</button>
                    </form>
                    <hr/> */}
                    <CommentForm />

                </>

            )}


        </div>
    );
};

export default Comments;