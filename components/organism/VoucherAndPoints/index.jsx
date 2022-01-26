import Image from "next/image"
import { Box, Divider, Grid, Typography } from "@mui/material"
import ContainerMini from "@/components/atoms/ContainerMini"

const VoucherAndPoints = () => {
    return (
        <ContainerMini sx={{mt: "170px",py: "12px", borderRadius: "8px", boxShadow: "0px 2px 8px rgb(0 0 0 / 4%)"}}>
            <Grid container>
                <Grid item xs sx={{height: "50px", display: "flex", alignItems: "start", padding: "0 12px"}}>
                    <Image src="/voucher-icon.svg" width={16} height={16} alt="voucher-icon" />
                    <Box sx={{ml: "12px"}}>
                        <Typography sx={{fontSize: "12px",color: "text.gray", fontWeight: "500"}}>Voucher Kamu</Typography>
                        <Typography sx={{fontSize: "14px", color: "text.green", fontWeight: "500", cursor: "pointer"}}>Masuk Akun</Typography>
                    </Box>
                </Grid>
                <Divider orientation="vertical" flexItem></Divider>
                <Grid item xs sx={{height: "50px", display: "flex", alignItems: "start", padding: "0 12px"}}>
                    <Image src="/point-icon.svg" width={16} height={16} alt="point-icon" />
                    <Box sx={{ml: "12px"}}>
                        <Typography sx={{fontSize: "12px",color: "text.gray", fontWeight: "500"}}>Point Kamu</Typography>
                        <Typography sx={{fontSize: "14px", color: "text.green", fontWeight: "500", cursor: "pointer"}}>Masuk Akun</Typography>
                    </Box>
                </Grid>
            </Grid>
        </ContainerMini>
    )
}

export default VoucherAndPoints