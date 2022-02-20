import React, {FormEvent, useRef, useState} from 'react';
import Button from "../Card/Button/Button";

const Comments = () => {

    const [uncontrolledComment, setUncontrolledComment] = useState('')
    const [valueForControlledForm, setValueForControlledForm] = useState('Михаил Рогов, ')
    const [commentForControlledForm, setCommentForControlledForm] = useState('')
    const [isCommentsOpened, setIsCommentsOpened] = useState(false)

    const ref = useRef<HTMLInputElement>(null)
    const textAreaRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        ref.current?.value && setUncontrolledComment(`Михаил Рогов, ${ref.current?.value}`)

    }

    function handleOpenComments() {
        setIsCommentsOpened(!isCommentsOpened)
        textAreaRef.current && textAreaRef.current?.focus();
    }



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
                    <h2>From uncontrolled form</h2>
                    {uncontrolledComment}
                    <br/>
                    <br/>
                    <form onSubmit={handleSubmit} style={formStyles}>
                        <input type="text" ref={ref} style={textAreaStyles} />
                        <button style={{backgroundColor: 'black', width: '70px', height: '30px'}}>Send</button>
                    </form>
                    <hr/>
                    <h2>From controlled form</h2>
                    {commentForControlledForm}
                    <br/>
                    <br/>
                    <form style={formStyles}>
                        <input ref={textAreaRef} value={valueForControlledForm} style={textAreaStyles} onChange={(event) => setValueForControlledForm(event.target.value)}/>
                        <Button text={'Send'} onClick={() => setCommentForControlledForm(valueForControlledForm)} />
                    </form>
                </>

            )}


        </div>
    );
};

export default Comments;