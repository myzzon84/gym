import buttonBG from '../assets/images/buttonBG.svg';

import splide_1 from '../assets/images/splide_1.png';
import splide_2 from '../assets/images/splide_2.png';
import splide_3 from '../assets/images/splide_3.png';
import splideTriangle from '../assets/images/splideTriangle.svg';
import splideIcon_1 from '../assets/images/splideIcon_1.svg';
import splideIcon_2 from '../assets/images/splideIcon_2.svg';
import clockIcon from '../assets/images/clockIcon.svg';
import { useRef } from 'react';
import Slider from 'react-slick';
import '../assets/scss/slick.scss';
import '../assets/scss/slick-theme.scss';


const Changes = () => {

    const slickItems = [splide_1, splide_2, splide_3, splide_1, splide_2, splide_3];
    const slickIcons = [splideIcon_1, splideIcon_2, splideIcon_2];

    const slickList = slickItems.map((item, i) => {
        return (
            <div key={i} className={`w-[285px] h-[347px] mr-[33px] relatiive`}>
                <img src={item} alt="img" className={` relative`} />
                <img src={splideTriangle} alt="img" className={` absolute bottom-0`} />
                <img src={i === 0 || i % 3 === 0 ? splideIcon_1 : splideIcon_2} alt="img" className={` absolute bottom-[104px] ml-[163px]`} />
                <div className={` flex absolute bottom-[68px] ml-[100px] text-[14px]/[18px] font-openSans text-[#9E9E9E]`}>
                    <img src={clockIcon} alt="img" className={`mr-1`}/>
                    <span>
                        Wed: 1:00pm-2:00pm
                    </span>
                </div>
                <a href="" className={` absolute bottom-[27px] text-[14px]/[19px] text-[#AE0F0F] font-openSans font-semibold px-[16px] py-[6px] border-[1px] border-[#AE0F0F] ml-[123px] hover:bg-[#AE0F0F] hover:text-white`}>
                    JOIN NOW
                </a>
            </div>
        );
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    }

    const slickRef = useRef(null);

    return (
        <div className={`changesWrapper py-[96px] pl-[165px] flex bg-[#F8F8F8] relative overflow-x-hidden max1439:pl-[100px] max1200:pt-10 max1200:pb-[440px] max650:pl-10 max450:pl-0`}>
            <div className={`pt-[29px] max450:flex max450:flex-col max450:items-center`}>
                <div className={`relative`}>
                    <a
                        href=""
                        className={`w-[239px] text-[14px]/[32px] text-white font-openSans font-semibold inline-block text-center mb-[25px] z-10 relative`}
                    >
                        UPCOMMING CLASS
                    </a>
                    <img
                        src={buttonBG}
                        alt="image"
                        className={` absolute top-0 left-0`}
                    />
                </div>

                <h2 className={`text-[45px]/[56px] text-[#484848] font-audiowide max-w-[447px] mb-5 max550:text-[35px]/[45px] max450:text-center max400:px-3`}>
                    We Offer Body
                    Changes Classses
                </h2>
                <p className={`max-w-[393px] text-[16px]/[25px] text-[#9E9E9E] font-openSans mb-9 max550:max-w-[300px] max450:text-center`}>
                    Gym an unknown printer took a gallery of type and scrambled.It has survived unknown printercenturies.
                </p>
                <div className={`w-[160px] flex justify-between`}>
                    <button className={`prewArrow w-[65px] h-[50px] border-[1px] border-[#AE0F0F]`} onClick={() => slickRef.current.slickPrev()}>

                    </button>
                    <button className={`nextArrow w-[65px] h-[50px] border-[1px] border-[#AE0F0F]`} onClick={() => slickRef.current.slickNext()}>

                    </button>
                </div>
            </div>
            <div className={`w-[954px] absolute top-[96px] -right-[150px] h-[354px] max1370:-right-[250px] max1300:-right-[330px] max1200:top-[430px] max385:top-[500px] max1200:left-[100px] max650:left-10 max400:left-0`}>
                <Slider
                    {...settings}
                    ref={slickRef}
                >
                    {slickList}
                </Slider>
            </div>
        </div>
    );
}

export default Changes;