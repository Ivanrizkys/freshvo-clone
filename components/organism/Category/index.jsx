import Image from "next/image";
import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import ContainerMini from "@/components/atoms/ContainerMini";

const Category = ({category}) => {
    return (
        <Box sx={{backgroundColor: "#FAFAFA", py: "8px"}}>
            <Box sx={{backgroundColor: "#FFFF", py: "16px"}}>
                <ContainerMini>
                    <Grid container >
                        {category.map(data => {
                            return (
                                <Grid key={data.id} item xs sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <Box sx={{padding: "10px", width: "64px", width: "64px", border: "1px solid #E8E8E8", borderRadius: "10px", cursor: "pointer"}}>
                                        <Image src={data.image.url} width={42} height={42} alt="buah" />
                                    </Box>
                                    <Typography sx={{fontSize: "13px", mt:"10px", cursor: "pointer"}}>{data.name}</Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                </ContainerMini>
            </Box>
        </Box>
    )
}

export default Category;