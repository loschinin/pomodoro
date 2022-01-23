import React, {FC} from 'react';

const Title:FC<{title: string; id: number }> = ({title, id}) => {
    return (
        <h2>
            № {id}. {title}
        </h2>
    );
};

export default Title;