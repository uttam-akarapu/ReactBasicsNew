import React from 'react';

const MemoEx = (props) => {
    console.log("Memo Component");
    return (
        <div>
            {props.name}
        </div>
    );
};

export default  React.memo(MemoEx);