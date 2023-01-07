import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Lists = ({ users, value, isInvited, changeInvites }) => {
    
    return (
        <List>

            {users.filter(user=>{

                const fullname = `${user.first_name} ${user.last_name}`.toLowerCase()
                
                return fullname.includes(value.toLowerCase())|| user.email.includes(value.toLowerCase())
            }).map(user => {
                return (<ListItem key={user.id} sx={{ padding: 0 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src={user.avatarUrl} />
                    </ListItemAvatar>
                    <ListItemText sx={{ cursor: 'pointer' }}
                        primary={`${user.first_name} ${user.last_name}`}
                        secondary={
                            <React.Fragment>
                                {user.email}

                            </React.Fragment>
                        }
                    />
                    <Button onClick={()=>{
                        changeInvites(user.id)
                    }}>
                        {
                            isInvited.includes(user.id) ? <RemoveIcon /> :  <AddIcon /> 
                        }
                        
                    </Button>
                </ListItem>
            )})}







        </List>
    )
}

export default Lists