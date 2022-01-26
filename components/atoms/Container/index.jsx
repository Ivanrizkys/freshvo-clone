import { Container } from "@mui/material";

const containerSyle = {
    height: "100%",
    minHeight: "100vh",
    p: 0,
    fontFamily: "Montserrat",
    fontWeight: 400,
    borderRight: 1,
    borderLeft: 1,
    borderColor: "#f1f1f1",
    backgroundColor: "#FFFF"
}

const ContainerXS = ({children}) => {
    return(
        <Container sx={containerSyle} maxWidth="xs" disableGutters={true} >{children}</Container>
    )
}

export default ContainerXS;