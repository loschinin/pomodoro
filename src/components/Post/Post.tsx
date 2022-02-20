import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import Comments from "../Comments/Comments";

const Post = (props: {title: string, onClose: () => void}) => {


    const ref = useRef<HTMLDivElement>(null)


    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                console.log('clicked')
                props.onClose()
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)


    }, [])
    const node = document.querySelector('#modal_root')
    if (!node) return null;
    return ReactDOM.createPortal((
        <div ref={ref} style={{position: 'absolute', width: '700px', backgroundColor: '#3d3d3d', zIndex: 1, padding: '16px'}}>
            <h2>{props.title}</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>


            <Comments />




        </div>
    ), node);
};

export default Post;