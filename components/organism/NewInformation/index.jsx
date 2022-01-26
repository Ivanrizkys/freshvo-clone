import "swiper/css";
import Image from "next/image";
import { Box, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import ContainerMini from "@/components/atoms/ContainerMini";
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { useEffect } from "react";


const NewInformation = ({banners}) => {
    useEffect(() => {
        SwiperCore.use([Pagination, Autoplay]);
    }, [])
    
    return (
        <ContainerMini sx={{mt: "28px", mb: "15px"}}>
            <Typography sx={{fontSize: "13px", fontWeight: "700"}}>Informasi Terbaru</Typography>
            <Typography sx={{fontSize: "10px", fontWeight: "400", color: "rgb(82, 87, 92)", mb: "12px"}}>Informasi terbaru hanya untukmu</Typography>
            <Swiper pagination={{type: 'bullets', el: '.swiper-pagination-custom'}} slidesPerView={1.15} spaceBetween={20} autoplay={{ "delay": 2500, "disableOnInteraction": false }}>
                {banners.map(data => {
                    return (
                        <SwiperSlide key={data.id}>
                            <Box sx={{cursor: "pointer"}}>
                                <Image src={data.image.url} width={360} height={150} alt="banner" />
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="swiper-pagination-custom"></div>
        </ContainerMini>
    )
}

export default NewInformation;