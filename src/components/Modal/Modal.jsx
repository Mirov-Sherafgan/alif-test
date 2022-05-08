import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {useSpring, animated} from "react-spring";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSinglePostApi} from "../../http/posts";

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SpringModal({open, setOpen}) {
    const dispatch = useDispatch()
    const {id, singlePostData} = useSelector(state => state.post);

    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (id) {
            dispatch(getSinglePostApi(id))
        }
    }, [id, dispatch])

    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            Пост #{singlePostData?.id}
                        </Typography>
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                            {singlePostData?.body}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
