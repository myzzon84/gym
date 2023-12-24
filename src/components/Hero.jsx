import '../assets/scss/style.scss';
import appStore from './appStore';

const Hero = () => {

    const showSearchInput = appStore(state => state.showSearchInput);

    return (
        <div className={`heroWrapper relative pt-[315px] pl-[169px] pb-[237px] max1200:pt-[200px] max1200:pb-[150px] max900:pl-[50px] max500:pl-0 max500:text-center max500:pb-[50px] ${showSearchInput ? 'max500:pt-[220px]' : 'max500:pt-[170px]'} duration-300`}>
            <h1 className={` text-white font-audiowide  mb-[29px] text-[55px]/[69px] max600:text-[40px]/[50px] max400:text-[35px]/[40px] max-w-[505px]`}>
                Make Your Body
                HeALTHY & Fit
            </h1>
            <p className={`text-[16px]/[25px] text-[#CDCDCD] font-openSans  mb-[43px] max-w-[509px] max600:max-w-[350px] max500:mx-auto max400:px-5`}>
                Gym an unknown printer took a gallery of type and scrambled.It has survived unknown printercenturies.
            </p>
            <a
                href=""
                className={` text-[14px]/[40px] text-white font-openSans font-semibold bg-[#AE0F0F] inline-block px-[24px]`}
            >
                OUR CLASSES
            </a>
        </div>
    );
}

export default Hero;