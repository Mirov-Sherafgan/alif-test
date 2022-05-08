import React from 'react';
import SpringModal from "./Modal";

const ModalContainer = ({open, setOpen}) => {
    console.log('modaaalcontainer')
    return (
        <SpringModal open={open} setOpen={setOpen}/>
    );
};

export default ModalContainer;