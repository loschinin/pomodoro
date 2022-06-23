import React from 'react';
import {RootState, updateComment} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import Button from "../Card/Button/Button";
import { Formik } from 'formik';

export const CommentForm = () => {

    const dispatch = useDispatch()

    const formStyles = {display: "flex", alignItems: 'center', columnGap: '8px' }
    const commentTitle = useSelector<RootState, string>(state => state.commentTitle)

    return (
        <div>
            <h2>From controlled form</h2>
            {commentTitle}
            <br/>
            <br/>
            <Formik
                initialValues={{ comment: commentTitle}}
                validate={values => {
                    const errors: { comment: string } = { comment: '' };
                    if (values.comment.length < 3) {
                        errors.comment = 'Set more than 3 symbols';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      /* and other goodies */
                  }) => {
                    const isError = errors.comment && touched.comment
                    return (
                        <form onSubmit={handleSubmit}>
                            <div style={formStyles}>
                            <textarea
                                ref={input => input && input.focus()}
                                style={{
                                    backgroundColor: `${isError ? '#CB8888' : '#d3d3d3'}`,
                                    width: '400px',
                                    color: 'black',
                                }}
                                name="comment"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comment}
                                aria-invalid={isError ? true : undefined}
                            />
                                <Button
                                    text={'Send'}
                                    onClick={() => {
                                        if (!isError) {
                                            console.log('sent', values.comment)
                                            alert(values.comment);
                                            dispatch(updateComment(values.comment))
                                        }
                                    }}
                                    disabled={isError ? true : undefined}/>
                            </div>
                            <div style={{color: "red"}}>
                                {isError && errors.comment}
                            </div>

                        </form>
                    )
                }}
            </Formik>

        </div>
    );
};