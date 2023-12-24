import Slider from "react-slick";
import RedButton from "./RedButton";

import nineNine from '../assets/images/nineNine.svg';
import sliderImage from '../assets/images/sliderImage.png';
import dots1 from '../assets/images/dots1.png';
import dots2 from '../assets/images/dots2.png';
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Reviews = () => {

    const countSlides = Array(2).fill('')

    const slickSlidesContent = countSlides.map((item, i) => {
        return (
            <div className={`w-full pt-[78px]`} key={i}>
                <div className={`flex justify-center mb-5`}>
                    <img src={nineNine} alt="img" />
                </div>
                <p className={`text-[16px]/[26px] text-[#1A1818] font-openSans text-center px-[46px] mb-[18px]`}>
                    “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable”.
                </p>
                <div className={`text-[19px]/[24px] text-[#AE0F0F] font-openSans ml-[46px] mb-[7px]`}>
                    kayn Williamsom
                </div>
                <div className={`text-[14px]/[15px] text-[#787878] font-openSans ml-[46px] mb-[76px]`}>
                    CEO, RT Team
                </div>
            </div>
        );
    });

    const slickSlidesImages = countSlides.map((item, i) => {
        return (
            <div className={`flex justify-center items-center`} key={i}>
                <img src={sliderImage} alt="img" />
            </div>
        );
    });

    let contentSlider = useRef(null);
    let imageSlider = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const settingsSliderImage = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(contentSlider);
        setNav2(imageSlider);
    }, []);

    return (
        <div className={`bg-[#F8F8F8] pt-[101px] pb-[115px]`}>
            <div className={`flex w-[1048px] mx-auto mb-[26px]`}>
                <div className={`w-1/2`}>

                </div>
                <div className={`w-1/2`}>
                    <RedButton style={`w-[239px] h-[32px] mx-auto mb-[25px]`} text={'TESTIMONIALS'} textStyle={'text-[14px]/[19px] text-white font-openSans font-semibold'} />
                    <h2 className={`text-[45px]/[55px] text-[#484848] font-audiowide text-center mb-5`}>
                        Some Reviews From Our Trusted Clients
                    </h2>
                    <p className={`text-[16px]/[25px] text-[#9E9E9E] font-openSans text-center px-6`}>
                        Gym an unknown printer took a gallery of type and scrambled. It has survived unknown printercenturies.
                    </p>
                </div>
            </div>
            <div className={`border-[17px] border-[#8DABDD] flex w-[1110px] mx-auto bg-[#F8F8F8] shadow-[0_6px_30px_rgba(0,0,0,0.15)] relative`}>
                <div className={`w-[477px]`}>

                </div>
                <div className={`w-full max-w-[600px] relative`}>
                    <Slider
                        {...settings}
                        asNavFor={nav2}
                        ref={slider => (contentSlider = slider)}
                    >
                        {
                            slickSlidesContent
                        }
                    </Slider>
                    <div className={` absolute right-[23px] bottom-[18px] w-[132px] flex justify-between z-10`}>
                        <button
                            className={`w-[54px] h-[40px] border-[1px] border-[#AE0F0F] bg-white bg-[url('src/assets/images/redArrow.svg')] bg-no-repeat bg-center hover:bg-[#AE0F0F] hover:bg-[url('src/assets/images/whiteArrow.svg')] hover:rotate-180`}
                            onClick={() => { contentSlider.slickPrev()}}
                        >

                        </button>
                        <button
                            className={` rotate-180 w-[54px] h-[40px] border-[1px] border-[#AE0F0F] bg-white bg-[url('src/assets/images/redArrow.svg')] bg-no-repeat bg-center hover:bg-[#AE0F0F] hover:bg-[url('src/assets/images/whiteArrow.svg')] hover:rotate-0`}
                            onClick={() => {contentSlider.slickNext()}}
                        >
                        </button>
                    </div>
                </div>
                <div
                    className={` absolute bottom-[10px] left-[17px] w-[467px] h-[586px] border-[3px] border-[#AE0F0F] shadow-[1px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#F8F8F8] rounded-tr-[200px] flex justify-center items-center`}
                >
                    <div className={`w-[425px] h-[543px] rounded-tr-[200px] overflow-hidden`}>
                        <Slider
                            {...settingsSliderImage}
                            asNavFor={nav1}
                            ref={slider => (imageSlider = slider)}
                        >
                            {slickSlidesImages}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;