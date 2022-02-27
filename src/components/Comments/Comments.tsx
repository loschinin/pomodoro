import React, {useState} from 'react';
import Button from "../Card/Button/Button";
import useFocusTextarea from "../../hooks/useFocusTextarea";
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../store";

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


    const commentTitle = useSelector<RootState, string>(state => state.commentTitle)
    const dispatch = useDispatch()


    const formStyles = {display: "flex", justifyContent: 'center', alignItems: 'center', columnGap: '8px' }
    const textAreaStyles = {backgroundColor: '#d3d3d3', width: '400px', color: 'black'}

    return (
        <div>
            <h2>Comments</h2>
            <h3>First comment</h3>
            <h3>Second comment</h3>
            <Button text={isCommentsOpened ? 'Скрыть комментарии' : 'Ответить'} onClick={handleOpenComments} />
            {isCommentsOpened && (
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
                    <h2>From controlled form</h2>
                    {commentTitle}
                    <br/>
                    <br/>
                    <form style={formStyles}>
                        <textarea ref={input => input && input.focus()} value={commentTitle} style={textAreaStyles} onChange={(event) => dispatch(updateComment(event.target.value))}/>
                        {/*<Button text={'Send'} onClick={() => setCommentForControlledForm(valueForControlledForm)} />*/}
                    </form>
                </>

            )}


        </div>
    );
};

export default Comments;