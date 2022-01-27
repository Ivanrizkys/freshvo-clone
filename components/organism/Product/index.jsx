import "swiper/css";
import Image from "next/image";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Grid, Typography } from "@mui/material";
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import ContainerMini from "@/components/atoms/ContainerMini";
import { getDiscount, formatRupiah } from "@/utils/convertion";


const Product = ({product}) => {
    useEffect(() => {
        SwiperCore.use([Pagination]);
    }, [])
    
    return (
        <>
            <ContainerMini sx={{mb: "20px"}}>
                <Grid container sx={{alignItems: "center"}}>
                    <Grid item xs={9}>
                        <Typography sx={{fontSize: "13px", fontWeight: "700"}}>Produk Pilihan</Typography>
                        <Typography sx={{fontSize: "10px", color: "rgb(37, 37, 37)"}}>Produk pilihan terbaik hanya untukmu!</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{fontSize: "10px", fontWeight: "bold", color: "#2F9CF1", textAlign: "right", cursor: "pointer"}}>Lihat Semua</Typography>
                    </Grid>
                </Grid>
            </ContainerMini>
            <Swiper pagination={{type: 'bullets', el: '.swiper-pagination-custom'}} slidesPerView={2.60} spaceBetween={20}>
                {product.map(data => {
                    return(
                        <SwiperSlide key={data.id}>
                            <Box sx={{width: "150px",mb: "30px", borderRadius: "7px", pb: "16px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)", cursor: "pointer", position: "relative", overflow: "hidden"}}>
                                <Box sx={{height: "140px", width: "100%", backgroundColor: "white"}}>
                                    <Image src={data.image.url} width={150} height={140} alt="buah-naga" />
                                </Box>
                                <Box sx={{pl: "10px"}}>
                                    <Typography sx={{fontSize: "14px", fontWeight: "600", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{data.name}</Typography>
                                    <Typography sx={{fontSize: "10px", color: "rgb(204, 204, 204)"}}>Min order 1 x kg</Typography>
                                    {data.isPromo ? 
                                        <del style={{fontSize: "10px", color: "#252525"}}>{formatRupiah(data.regularPrice)}</del>
                                        :
                                        <del style={{fontSize: "10px", color: "#FFFF", display: "hidden"}}>35.500</del>
                                    }
                                    <Box sx={{display: "flex", alignItems: "start", mb: "23px"}}>
                                        <Typography sx={{fontSize: "13px", fontWeight: "bold", color: "#25282B"}}>{formatRupiah(data.price)}</Typography>
                                        <Typography sx={{fontSize: "10px"}}>/kg</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{display: "flex", justifyContent: "center"}}>
                                    <ButtonPrimary>Beli</ButtonPrimary>
                                </Box>
                                {data.isPromo &&
                                    <Box sx={{position: "absolute", top: "0", left: "0", backgroundColor: "#00A739", opacity: "0.8"}}>
                                        <Typography sx={{fontSize: "10px", fontWeight: "bold", textAlign: "center", color: "#FFFF", padding: "8px"}}>Disk. {getDiscount(data.regularPrice, data.price)}%</Typography>
                                    </Box>
                                }
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            {/* <Box sx={{width: "92%", maxWidth: "442px", height: "75px", backgroundColor: "rgb(0, 167, 57)", position: "fixed", bottom: "70px", mb: "auto"}}></Box>     */}
            <Box sx={{width: "150px", height: "60px",mt: "5px", visibility: "visible"}}></Box>
        </>
    )
}

export default Product;