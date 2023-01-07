import * as React from 'react';
import Box from '@mui/material/Box/Box';
import SearchField from './searchField';
import Lists from './List';
import { Button } from '@mui/material';

export default function Users({users, value, changeValue, changeInvites, invites, clickContinue}) {
    
    return (
        <Box sx={{ backgroundColor: '#eee', padding: 4, width: '100%', maxWidth: 360, borderRadius: 5 }}>
            
            <SearchField value = {value} changeValue = {changeValue} />
            <Lists isInvited={invites} changeInvites = {changeInvites}  users = {users} value = {value} />
            
            <Button onClick={clickContinue}  fullWidth variant='contained' >пригласить</Button>

        </Box>
    );
}