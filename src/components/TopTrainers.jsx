import trainer_1 from '../assets/images/trainer_1.png';
import trainer_2 from '../assets/images/trainer_2.png';
import trainer_3 from '../assets/images/trainer_3.png';
import trainer_4 from '../assets/images/trainer_4.png';
import facebookIcon from '../assets/images/facebookIcon.svg';
import instagramIcon from '../assets/images/instagramIcon.svg';
import twitterIcon from '../assets/images/twitterIcon.svg';
import basketballIcon from '../assets/images/basketballIcon.svg';

const TopTrainers = () => {

    return (
        <div className={`bg-[#F8F8F8] pt-[92px] pb-[110px] max800:pb-[50px] bg-[url('src/assets/images/weight.png')] bg-no-repeat bg-right-bottom`}>
            <div className={`flex justify-center mb-[29px]`}>
                <a href="" className={`w-[239px] h-[32px] bg-[url('src/assets/images/buttonBG.svg')] text-[14px]/[32px] text-white bg-no-repeat bg-cover flex justify-center items-center`}>
                    TOP TRAINERS
                </a>
            </div>
            <h2 className={`text-[45px]/[55px] text-[#484848] max-w-[565px] max600:max-w-[85%] max600:text-[30px]/[40px] font-audiowide mx-auto text-center mb-4`}>
                Meet Our Experienced Cool Trainers
            </h2>
            <p className={`text-[16px]/[26px] text-[#9E9E9E] font-openSans max-w-[522px] max600:max-w-[75%] text-center mx-auto mb-3`}>
                Gym an unknown printer took a gallery of type and scrambled. It has survived unknown printercenturies.
            </p>
            <div className={`flex max-w-[920px] max1000:max-w-[750px] max800:max-w-[400px] max800:justify-center mx-auto flex-wrap items-end justify-between`}>
                {
                    [
                        {
                            name: 'Stefi Cohen',
                            photo: trainer_1,
                        },
                        {
                            name: 'Dorian Yates',
                            photo: trainer_2,
                        },
                        {
                            name: 'Shawn Ray',
                            photo: trainer_3,
                        },
                        {
                            name: 'Flex Wheeler',
                            photo: trainer_4,
                        },
                    ].map((item, i) => {
                        return (
                            <div className={` relative mb-10`} key={i}>
                                <div className={` relative`}>
                                    <img src={item.photo} alt="img" />
                                    <div className={` absolute ${i === 0 ? 'bottom-[16px]' : 'bottom-[13px]'}  left-1/2 -translate-x-1/2 text-[16px]/[17px] text-[#EFEFEF] font-openSans font-semibold`}>
                                        {item.name}
                                    </div>
                                </div>
                                <div className={`text-center text-[#9E9E9E] text-[16px]/[26px] font-openSans mb-[10px]`}>
                                    Trainer
                                </div>
                                <div className={`flex w-[110px] mx-auto justify-between`}>
                                    <img src={facebookIcon} alt="img" className={` cursor-pointer`}/>
                                    <img src={instagramIcon} alt="img" className={` cursor-pointer`}/>
                                    <img src={twitterIcon} alt="img" className={` cursor-pointer`}/>
                                    <img src={basketballIcon} alt="img" className={` cursor-pointer`}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TopTrainers;