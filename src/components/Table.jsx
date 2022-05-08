import * as React from 'react';
import {useEffect} from "react";
import {getAllPosts} from "../http/posts";
import {useDispatch, useSelector} from "react-redux";
import {dataAC, idAC} from "../store/post/post";
import ModalContainer from "./Modal/ModalContainer";
import TableData from "./Table/TableContainer";
import InputContainer from "./InputContainer";


export default function StickyTable() {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.post)
    const [open, setOpen] = React.useState(false);
    const [sort, setSort] = React.useState('');

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    const handleRowClick = (id) => {
        setOpen(open => !open)
        dispatch(idAC(id))
    }

    const handleSort = (sort) => {
        setSort(sort)
        if (sort === 'По популярности') {
            dispatch(dataAC([...data].sort((a, b) => b.likes - a.likes)))
        }
        if (sort === 'По имени') {
            dispatch(dataAC([...data].sort((a, b) => a.name.localeCompare(b.name))))
        }
        if (sort === 'clear') {
            dispatch(dataAC([...data].sort((a, b) => a.likes - b.likes)))
        }
    }

    if (!data) return <h1>loading...</h1>

    return (
        <>
            <InputContainer
                sort={sort}
                handleSort={handleSort}
            />
            <TableData
                data={data}
                handleRowClick={handleRowClick}
            />
            <ModalContainer
                open={open}
                setOpen={setOpen}
            />
        </>
    );
}
