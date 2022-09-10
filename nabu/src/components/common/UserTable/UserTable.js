import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../DataTable/DataTable';


const columns = [
    { field: 'id', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 150 },
];

const userTableStyles = {
    height: '650px',
};

const UserTable = ({ onError }) => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => res.data)
            .then((res) => setUsers(res))
            .catch(() => onError())
    }, []);

    return (
        <DataTable
            rows={users}
            columns={columns}
            loading={!users.length}
            sx={userTableStyles}
        />
    );
};

export default UserTable