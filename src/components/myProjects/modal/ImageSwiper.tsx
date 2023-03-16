import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper";

import { Box, useMediaQuery } from '@mui/material';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./imageSwiper.scss";

const ImageSwiper: React.FC<{ imageArray: Array<string> }> = ({ imageArray }) => {

    const matches = useMediaQuery('(min-width:1200px)');

    return (
        <Box>
            <Swiper
                pagination={true}
                navigation={matches ? true : false}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[Pagination, Navigation, EffectCreative]}
            >
                {imageArray.map((image, i) => (
                    <SwiperSlide key={i}>
                        <img src={image} alt={image} width='600px' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

export default ImageSwiper;