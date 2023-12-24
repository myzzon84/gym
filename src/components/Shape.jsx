import shapeBlock from '../assets/images/shapeBlock.png';
import buttonBG from '../assets/images/buttonBG.svg';
import equipment from '../assets/images/equipment.svg';
import fitness from '../assets/images/fitness.svg';

const Shape = () => {

    return (
        <div className={`pt-[96px] flex max-w-[1110px] justify-between mx-auto pb-[95px] max800:flex-col max600:pb-10`}>
            <div className={` max1150:pl-5 max1150:flex max1150:items-center max800:justify-center max800:pl-0 max800:mb-5`}>
                <img src={shapeBlock} alt="image" className={` max1150:w-[90%] max850:min-w-[340px] max800:w-[60%] max600:min-w-[250px]`}/>
            </div>
            <div className={` max1150:pr-5 max800:pr-0 max800:flex max800:flex-col max800:items-center`}>
                <a href="" className={`flex justify-center items-center text-[14px]/[14px] text-white w-[221px] h-[32px] relative mt-[24px] mb-[27px] -z-[1] max600:scale-[.85]`}>
                    ABOUT GYMAT
                    <img src={buttonBG} alt="link" className={` absolute top-0 left-0 -z-[1] `} />
                </a>
                <h2 className={`text-[45px]/[60px] font-audiowide max-w-[541px] text-[#484848] mb-[7px] max900:text-[35px]/[45px] max800:text-center max600:text-[30px]/[40px] max600:max-w-[400px] max400:px-3`}>
                    We Can Give A Shape Of Your Body Here!
                </h2>
                <p className={`max-w-[509px] font-openSans text-[16px]/[25px] text-[#9E9E9E] mb-[24px] max800:text-center max600:max-w-[350px] max400:px-3`}>
                    Gym an unknown printer took a gallery of type and scrambled.It has survived unknown printercenturies.
                </p>
                <div className={`flex font-openSans items-center mb-[29px] max800:flex-col`}>
                    <div>
                        <img src={equipment} alt="image" className={`mr-[8px] max800:mr-0 max800:mb-3`}/>
                    </div>
                    <div>
                        <div className={`text-[16px]/[22px] font-semibold max800:text-center max800:mb-3`}>
                            Modern Equipment
                        </div>
                        <div className={`text-[14px]/[22px] text-[#9E9E9E] max-w-[338px] max800:text-center max800:max-w-[250px]`}>
                            Gymat an unknown printer took a gallery of type an
                            scraey.
                        </div>
                    </div>
                </div>
                <div className={`flex font-openSans items-center max800:flex-col`}>
                    <div>
                        <img src={fitness} alt="image" className={`mr-[8px] max800:mr-0 max800:mb-3`}/>
                    </div>
                    <div>
                        <div className={`text-[16px]/[22px] font-semibold max800:text-center max800:mb-3`}>
                        Body Fitness
                        </div>
                        <div className={`text-[14px]/[22px] text-[#9E9E9E] max-w-[338px] max800:text-center max800:w-[250px]`}>
                            Gymat an unknown printer took a gallery of type an
                            scraey.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shape;