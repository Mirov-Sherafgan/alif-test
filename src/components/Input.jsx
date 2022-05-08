import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({sort, setSort}) {

    const handleChange = (event) => {
        setSort(event.target.value);
    };
    const sortItems = ['По имени', 'По популярности']
    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Сортировка"
                    onChange={handleChange}
                >
                    {sortItems.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}
