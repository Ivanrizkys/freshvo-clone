import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Input from "@/components/atoms/Input";
import { useRef } from "react";

const Header = ({location}) => {
    const btn = useRef(null)

    const focusHandler = () => {
        btn.current.focus()
    }
    
    return (
        <>
            <Box sx={{mx: "auto", position: "fixed", backgroundColor: "#FFFF", height: "150px", width: "100%", maxWidth: "442px", boxShadow: "rgb(0 0 0 / 10%) 0px 4px 4px", zIndex: "99", paddingTop: "5px",lineHeight: "1.5", top: "0px" }}>
                <Grid container sx={{p: 2}}>
                    <Grid item xs={12}>
                        <Typography sx={{color: "text.secondary", fontWeight: "600", fontSize: "10px"}}>Kamu berbelanja di</Typography>
                    </Grid>
                    <Grid item xs={9} sx={{mt: "6px"}}>
                        <Box sx={{display: "flex"}}>
                            <Image src="/toko-icon.svg" height={14} width={18} alt="toko-icon"/>
                            <Typography sx={{color: "text.primary", fontSize: "12px", fontWeight: "700", pl: "8px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{location[0].name}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{mt: "6px"}}>
                        <Box sx={{display: "flex", justifyContent: "flex-end", cursor: "pointer"}}>
                            <Typography sx={{fontSize: "11px", fontWeight: "500", color: "rgb(47, 156, 241)", pr: "3px"}}>Ubah</Typography>
                            <Image src="/change-location.svg" width={17} height={12} alt="change-location"/>
                        </Box>
                    </Grid>
                    <Input reff={btn} onClick={focusHandler}/>
                </Grid>
            </Box>
        </>
    );
};

export default Header;
