import React , {Fragment} from 'react';

const FragmentDemo = () => {
    return (
        /* Frgment is used to wrap multiple jsx elements without a parent node*/ 
        <Fragment>
            <hr/>
             <h2> Fragment Demo </h2>
             <p> This section doesnt have an enclosing div , since we have enclosed the jsx with "Fragment" </p>
             <p><b>Fragment:</b> Lets you group list of children elements without adding extra element to the DOM</p>
        </Fragment>
    );
};

export default FragmentDemo;