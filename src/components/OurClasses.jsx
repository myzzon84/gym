import buttonBG from '../assets/images/buttonBG.svg';
import mEquipment from '../assets/images/mEquipment.svg';
import balance from '../assets/images/balance.svg';
import classesIMG from '../assets/images/classesIMG.png';
import dumbbell from '../assets/images/dumbbell.png';

const OurClasses = () => {
    return (
        <div className={`ourClasses py-[96px] max800:py-10`}>
            <div className={`flex max-w-[1110px] max1150:max-w-[1030px] max1150:px-2 justify-between mx-auto max800:flex-col-reverse max800:items-center`}>
                <div className={`pt-[49px] max800:flex max800:flex-col max800:items-center`}>
                    <div className={` relative text-center mb-[31px] w-[239px]`}>
                        <a
                            href=""
                            className={` inline-block text-[14px]/[32px] relative z-[2] text-white font-openSans font-semibold`}
                        >
                            UPCOMMING CLASS
                        </a>
                        <img src={buttonBG} alt="img" className={` absolute top-0 left-0 z-[1]`} />
                    </div>
                    <h1 className={`w-[474px] max950:w-[350px] text-[45px]/[55px] font-audiowide text-[#484848] mb-4 max800:w-[80%] max800:text-center max500:w-[95%] max400:text-[35px]/[45px]`}>
                        Why Choose Us to Join Our Classes
                    </h1>
                    <p className={` font-openSans text-[16px]/[26px] max-w-[466px] max950:w-[320px] text-[#9E9E9E] mb-[22px] max800:w-[70%] max800:text-center`}>
                        Gym an unknown printer took a gallery of type and scrambled. It has survived unknown printercenturies.
                    </p>
                    <div className={`flex mb-[27px] max1050:flex-col max800:flex-row max750:flex-col`}>
                        {
                            [
                                {
                                    title: 'Modern Equipment',
                                    icon: mEquipment,
                                    description: 'Gymat an unknown printer took a gallery of type an scraey.',
                                },
                                {
                                    title: 'Weight Balance',
                                    icon: balance,
                                    description: 'Gymat an unknown printer took a gallery of type an scraey.',
                                },
                            ].map((item, i) => {
                                return (
                                    <div className={`flex justify-between items-center w-[285px] max400:flex-col ${i === 0 ? 'mr-[14px] max750:mr-0 max1050:mb-5 max800:mb-0 max750:mb-5' : ''}`} key={i}>
                                        <div className={`min-w-[50px] h-[50px] rounded-[25px] bg-[#FFE5DF] flex justify-center items-center`}>
                                            <img src={item.icon} alt="img" className={``}/>
                                        </div>
                                        <div className={`w-[227px]`}>
                                            <div className={`text-[16px]/[26px] font-openSans font-semibold max400:text-center`}>
                                                {item.title}
                                            </div>
                                            <p className={`text-[14px]/[24px] text-[#9E9E9E] font-openSans max400:text-center`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className={`flex`}>
                        {
                            [
                                {
                                    number: '10+',
                                    description: 'Expert Trainer',
                                },
                                {
                                    number: '100+',
                                    description: 'Trained Students',
                                },
                            ].map((item, i) => {
                                return (
                                    <div className={`flex flex-col items-center justify-center w-[160px] h-[94px] border-[1px] border-[#B9B9B9] ${i === 0 ? 'mr-[60px] max950:mr-4 max800:mr-[60px] max750:mr-4' : ''} rounded-tr-[28px] rounded-bl-[28px] max400:w-[130px] max400:h-[80px]`} key={i}>
                                        <div className={`text-[30px]/[55px] font-audiowide text-[#484848] max400:text-[25px]/[45px]`}>
                                            {item.number}
                                        </div>
                                        <div className={`text-[14px]/[24px] text-[#9E9E9E] font-openSans`}>
                                            {item.description}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={`max950:flex items-center`}>
                    <img src={classesIMG} alt="img" />
                </div>
            </div>

        </div>
    );
}

export default OurClasses;