import Button from "@mui/material/Button"

const ButtonMini = ({variant,children, ...nativeProps}) => {
    const variants = {
        "buttonPrimay": "buttonPrimay",
        "buttonTransparant": "buttonTransparant",
        "buttonDisable": "buttonDisable"
    }
    return (
        <Button color={variants[variant]} variant="contained" sx={{px: "9px", py: "3px", minWidth: "0"}} {...nativeProps}>{children}</Button>
    )
}

export default ButtonMini;