import React, {useEffect, useRef} from 'react';

const UseFocusTextarea = () => {

    const textarea = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (document.querySelectorAll('textarea').length == 2) {
            textarea.current?.focus()
        }

    }, [])
    return [textarea];
};

export default UseFocusTextarea;