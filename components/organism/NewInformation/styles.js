import styled from 'styled-components'

const PaginationCustom = styled.div`
    .test {
        color: blue;
    }
    .swiper-pagination {
        position: static;
        display: flex;
        justify-content: start;
        margin-top: 15px;
    }
    .swiper-pagination .swiper-pagination-bullet-active {
        width: 30px;
        border-radius: 99px;
        background: rgb(0, 167, 57);
    }
    .swiper-pagination .swiper-pagination-bullet {
        background: rgb(0, 167, 57);
        opacity: 0.5;
    }
`

export { PaginationCustom }