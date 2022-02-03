import "swiper/css";
import Image from "next/image";
import { Box, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import ContainerMini from "@/components/atoms/ContainerMini";
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);


// autoplay={{ "delay": 2500, "disableOnInteraction": false }}

const NewInformation = ({banners}) => {    
    return (
        <ContainerMini sx={{mt: "28px", mb: "15px", position: "relative"}}>
            <Typography sx={{fontSize: "13px", fontWeight: "700"}}>Informasi Terbaru</Typography>
            <Typography sx={{fontSize: "10px", fontWeight: "400", color: "rgb(82, 87, 92)", mb: "12px"}}>Informasi terbaru hanya untukmu!</Typography>
            <Swiper pagination={{type: 'bullets', el: '.swiper-pagination-custom'}} slidesPerView={1.15} spaceBetween={20}>
                {banners.map(data => {
                    return (
                        <SwiperSlide key={data.id}>
                            <Box sx={{width: "360px", height: "150px",cursor: "pointer", borderRadius: "7px 0 0 7px", overflow: "hidden"}}>
                                <Image src={data.image.url} width={360} height={150} alt="banner" />
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Box className="swiper-pagination-custom" sx={{mt: "10px"}}></Box>
            {/* <div className="swiper-pagination-custom"></div> */}
            {/* <p>Hallo sayang</p> */}
        </ContainerMini>
    )
}

export default NewInformation;