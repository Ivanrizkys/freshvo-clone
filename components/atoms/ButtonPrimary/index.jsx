import Button from '@mui/material/Button';

const ButtonPrimary = ({children}) => {
    return (
        <Button color='buttonPrimay' variant="contained" sx={{backgroundColor: "rgb(0, 167, 57)", fontSize: "13px", py: "2px", px: "50px"}}>{children}</Button>
    )
}

export default ButtonPrimary