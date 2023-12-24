import { useState } from "react";
import RedButton from "./RedButton";
import basicPlan from '../assets/images/basicPlan.png';
import premiumPlan from '../assets/images/premiumPlan.png';
import tick from '../assets/images/tick.svg';

const PricingPlans = () => {

    const [monthYear, setMonthYear] = useState('month');
    const imagePlan = [basicPlan, premiumPlan];
    const costPlan = [100, 200];
    const servicesArr = [
        'Unlimited Access to Home Club.',
        'Free Fitness Training.',
        'Free training session with a Club.',
        'Over 16 free group fitness classes.',
        'Free functional movement screen.',
        'Movement screen.',
    ];

    const listOfServices = servicesArr.map((item, i, arr) => {
        return (
            <li key={i} className={`flex  ${i === arr.length - 1 ? 'mb-0' : 'mb-[11px]'}`}>
                <img src={tick} alt="img" />
                <span className={`text-[16px]/[26px] text-white font-openSans`}>
                    {item}
                </span>
            </li>
        );
    })

    return (
        <div className={`py-[96px] bg-[#F8F8F8]`}>
            <div className={`max-w-[1110px] flex mx-auto`}>
                <div className={`w-[323px] pt-[136px] mr-[57px]`}>
                    <RedButton style={'w-[239px] h-[32px] mb-[30px]'} text={'PRICING CHART'} textStyle={'text-[14px]/[19px] text-white font-openSans font-semibold'} />
                    <h2 className={`text-[45px]/[55px] text-[#484848] font-audiowide mb-[14px]`}>
                        Our Simple Pricing plans
                    </h2>
                    <div className={`text-[16px]/[26px] text-[#9E9E9E] font-openSans mb-5`}>
                        Save <span className={`text-[#484848] font-semibold`}>25%</span> on yearly Subscription Plan.
                    </div>
                    <div className={`w-[145px] text-[14px]/[17px] font-openSans font-semibold flex justify-between`}>
                        <div className={`${monthYear === 'month' ? 'text-[#AE0F0F]' : 'text-[#C8C8C8]'} cursor-pointer duration-500`} onClick={() => setMonthYear('month')}>
                            Monthly
                        </div>
                        <div className={`w-[34px] h-[14px] rounded-[16px] bg-[#C8C8C8] relative`}>
                            <div className={` absolute w-3 h-3 top-[1px] ${monthYear === 'month' ? 'left-[1px]' : 'left-[20px]'} bg-[#AE0F0F] rounded-[6px] duration-500`}>

                            </div>
                        </div>
                        <div className={`${monthYear === 'year' ? 'text-[#AE0F0F]' : 'text-[#C8C8C8]'} cursor-pointer duration-500`} onClick={() => setMonthYear('year')}>
                            Yearly
                        </div>
                    </div>
                </div>
                <div className={`flex`}>
                    {
                        costPlan.map((item, i) => {
                            return(
                                <PricingPlan listOfServices={listOfServices} index={i} image={imagePlan[i]} price={item} monthYear={monthYear} key={i}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const PricingPlan = ({ listOfServices, index, image, price, monthYear }) => {
    
    return (
        <div className={`w-[350px]  pb-[32px] ${index === 0 ? 'mr-[30px] bg-[#100F0F]' : 'bg-[#B6B6B6]'} shadow-[0px_0px_29px_4px_rgba(0,0,0,0.29)]`}>
            <div className={`mb-3`}>
                <img src={image} alt="img" />
            </div>
            <div className={`text-[30px]/[33px] font-openSans font-semibold pl-[35px]`}>
                <span className={`text-[#AE0F0F] mr-[10px]`}>
                    {`$${monthYear === 'month' ? price : (price * 12) * 0.75}`}
                </span>
                <span className={` text-[14px] text-[#E3E3E3]`}>
                    {`/${monthYear === 'month' ? 'Month' : 'Year'} `}
                </span>
            </div>
            <ul className={`pl-[35px] pb-[22px]`}>
                {listOfServices}
            </ul>
            <a href="" className={`block text-[14px]/[19px] text-white font-openSans font-semibold p-[10px] bg-[#AE0F0F] mx-auto w-max`}>
                PURCHASE NOW
            </a>
        </div>
    );
}

export default PricingPlans;