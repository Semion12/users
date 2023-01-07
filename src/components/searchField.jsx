import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
const SearchField = ({value, changeValue}) => {
    return (
        <TextField
            onChange={(e)=>changeValue(e.target.value)}
            value={value}
            placeholder='найти пользователя'
            size='small'
            id="input-with-icon-textfield"
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
        />
    )
}

export default SearchField