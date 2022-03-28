import React from 'react';
import Spinnerlogo from '../../images/200w.gif';

const Spinner = () => {
    return (
        <div className='text-center' style={{height:'40vh'}}>
            <img src={Spinnerlogo} alt='Loading ....'/>
        </div>
    );
};

export default Spinner;