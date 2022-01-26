import { Box } from "@mui/material"

const ContainerMini = ({sx, children}) => {
    return (
        <Box sx={{width: "92%", mx: "auto", ...sx}}>{children}</Box>
    )
}

export default ContainerMini;