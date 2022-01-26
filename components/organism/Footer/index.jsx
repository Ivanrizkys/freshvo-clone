import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{width: "100%", pt: "6px", maxWidth: "442px", height: "56px", position: "fixed", bottom: "0", border: "0px solid #e0e0e0", zIndex: "1999", boxShadow: "0px 0px 2px #9e9e9e", backgroundColor: "#FFFF"}}>
            <Grid container>
                <Grid item xs sx={{display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer"}}>
                    <Image src="/belanja-icon.svg" width={24} height={24} alt="kaka" />
                    <Typography sx={{fontSize: "11px"}}>Belanja</Typography>
                </Grid>
                <Grid item xs sx={{display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer"}}>
                    <Image src="/belanja-icon.svg" width={24} height={24} alt="kaka" />
                    <Typography sx={{fontSize: "11px"}}>Transaksi</Typography>
                </Grid>
                <Grid item xs sx={{display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer"}}>
                    <Image src="/belanja-icon.svg" width={24} height={24} alt="kaka" />
                    <Typography sx={{fontSize: "11px"}}>Bantuan</Typography>
                </Grid>
                <Grid item xs sx={{display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer"}}>
                    <Image src="/belanja-icon.svg" width={24} height={24} alt="kaka" />
                    <Typography sx={{fontSize: "11px"}}>Profil</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;