import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Box, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import ContainerMini from "@/components/atoms/ContainerMini";
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { PaginationCustom } from './styles'

SwiperCore.use([Pagination, Autoplay]);
// slidesPerView={1.15} spaceBetween={30}
const NewInformation = ({banners}) => {    
    return (
        <ContainerMini sx={{mt: "28px", mb: "15px", position: "relative"}}>
            <Typography sx={{fontSize: "13px", fontWeight: "700"}}>Informasi Terbaru</Typography>
            <Typography sx={{fontSize: "10px", fontWeight: "400", color: "rgb(82, 87, 92)", mb: "12px"}}>Informasi terbaru hanya untukmu!</Typography>
            <Swiper pagination={{el: '.swiper-pagination',type: 'bullets'}} autoplay={{ "delay": 2500, "disableOnInteraction": false }} breakpoints={{100: {slidesPerView: 1}, 420: {slidesPerView: 1.15, spaceBetween: 30}}}>
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
            <Box sx={{mt: "10px"}}></Box>
            <PaginationCustom>
                <div className="swiper-pagination"></div>
            </PaginationCustom>
        </ContainerMini>
    )
}

export default NewInformation;