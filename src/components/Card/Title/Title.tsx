import React, {FC} from 'react';

const Title:FC<{title: string; id?: number }> = ({title}) => {
    return (
        <h2>
            {title}
        </h2>
    );
};

export default Title;