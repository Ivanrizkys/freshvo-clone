import "swiper/css";
import Image from "next/image";
import { getIndex } from "@/utils/helper"
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ButtonMini from "@/components/atoms/ButtonMini";
import ContainerMini from "@/components/atoms/ContainerMini";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import { getDiscount, formatRupiah } from "@/utils/convertion";

SwiperCore.use([Pagination]);

const Product = ({product}) => {
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState({
        totalItem: 0,
        totalPrice: 0,
    })
    const didMountRef = useRef(false)

    useEffect(() => {
        switch(didMountRef.current) {
            case true:
                const items = JSON.stringify(cart)
                localStorage.setItem('items', items)
                const totalItems = JSON.stringify(cartTotal)
                localStorage.setItem('totalItems', totalItems)
                return
            default:
                // * only run when initial render
                // * get data in localstorege if exist and set to state
                const getItem = JSON.parse(localStorage.getItem('items'))
                const getTotalItem = JSON.parse(localStorage.getItem('totalItems'))
                if (getItem && getTotalItem) {
                    setCart(getItem)
                    setCartTotal(getTotalItem)
                }
        }
        didMountRef.current = true
    },[cart, cartTotal])

    // * handle the addition of the first item
    const addItemHandler = (id, name, price, maximumOrder, e) => {
        e.preventDefault();
        setCart([
            ...cart,
            {
                id_product: id,
                product_name: name,
                product_price: price,
                total_price: price,
                totalItem: 1,
                inOrder: true,
                maximumOrder
            }
        ])
        setCartTotal({
            totalItem: cartTotal.totalItem + 1,
            totalPrice: cartTotal.totalPrice + price
        })
    }

    // * handle remove or reduction items
    const removeItemHandler = (id, price, e) => {
        e.preventDefault();

        const index = getIndex(cart, id)
        const currentValue = cart[index].totalItem
        if (currentValue === 1) {
            cart.splice(index, 1)
            setCart([...cart])
            setCartTotal({
                totalItem: cart.length,
                totalPrice: cartTotal.totalPrice - price
            })
            return
        }
        cart[index].total_price -= price
        cart[index].totalItem -= 1
        setCart([...cart])
        setCartTotal({
            ...cartTotal,
            totalPrice: cartTotal.totalPrice - price
        })
    }

    // * handle addition item
    const addItemsHandler = (id, price, e) => {
        e.preventDefault()

        const index = getIndex(cart, id)
        const getMaimumOrder = cart[index].maximumOrder
        if (getMaimumOrder === cart[index].totalItem) {
            return
        }
        // * update data in state
        cart[index].total_price += price
        cart[index].totalItem += 1
        setCart([...cart])
        setCartTotal({
            ...cartTotal,
            totalPrice: cartTotal.totalPrice + price
        })
    }
    
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
                                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {cart[getIndex(cart, data.id)] ?
                                        <>
                                            <ButtonMini variant="buttonTransparant" onClick={removeItemHandler.bind(this, data.id, data.price)}>-</ButtonMini>
                                            <Typography sx={{width: "58px", textAlign: "center", fontSize: "13px", fontWeight: "800"}}>{cart[getIndex(cart, data.id)].totalItem}</Typography>
                                            {cart[getIndex(cart, data.id)].totalItem === data.maximumOrderQuantity ? 
                                                <ButtonMini variant="buttonDisable" onClick={addItemsHandler.bind(this, data.id, data.price)}>+</ButtonMini>
                                                :
                                                <ButtonMini variant="buttonPrimay" onClick={addItemsHandler.bind(this, data.id, data.price)}>+</ButtonMini>
                                            }
                                        </>
                                        :
                                        <ButtonPrimary onClick={addItemHandler.bind(this, data.id, data.name, data.price, data.maximumOrderQuantity)}>Beli</ButtonPrimary>
                                    }
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
            {cartTotal.totalItem > 0 &&
                <Box sx={{width: "92%", maxWidth: "442px", position: "fixed", bottom: "70px", zIndex: "100"}}>
                    <ContainerMini sx={{backgroundColor: "rgb(0, 167, 57)", padding: "8px 16px", borderRadius: "5px"}}>
                        <Grid container sx={{alignItems: "center"}}>
                            <Grid item xs={2}>
                                <Image src="/cart-icon.svg" height={24} width={24} alt="cart-icon" />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{fontSize: "14px", fontWeight: "bold", color: "#FFFF"}}>{cartTotal.totalItem} Item</Typography>
                                <Typography sx={{fontSize: "12px", color: "#FFFF", width: "103px"}}>Freshvo Cilandak (Jabodetabek)</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{display: "flex", alignItems: "center"}}>
                                <Typography sx={{fontSize: "14px", fontWeight: "bold", color: "#FFFF", textAlign: "center"}}>{formatRupiah(cartTotal.totalPrice)}</Typography>
                            </Grid>
                        </Grid>
                    </ContainerMini>    
                </Box>
            }
            {cartTotal.totalItem > 0 ?
                <Box sx={{width: "150px", height: "120px",mt: "5px", visibility: "visible"}}></Box>
                :
                <Box sx={{width: "150px", height: "60px",mt: "5px", visibility: "visible"}}></Box>
            }
        </>
    )
}

export default Product;