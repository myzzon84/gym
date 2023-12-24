import RedButton from "./RedButton";
import flag from '../assets/images/flag.svg';
import dumble from '../assets/images/dumble.png';
import equipment from '../assets/images/equipment.png';
import sneaker from '../assets/images/sneaker.png';
import yellowStar from '../assets/images/yellowStar.svg';
import emptyStar from '../assets/images/emptyStar.svg';
import cart from '../assets/images/cart.svg';

const itemStore = [
    {
        title: 'Working Dumble',
        promotion: '20% OFF',
        image: dumble,
        price: 80,
        rate: 4,

    },
    {
        title: 'Gym Equipment',
        promotion: 'NEW',
        image: equipment,
        price: 60,
        rate: 4,

    },
    {
        title: 'Gym Nike Sneaker',
        promotion: '5% OFF',
        image: sneaker,
        price: 70,
        rate: 4,

    },
];

const rateStar = Array(5).fill('');

const GymStore = () => {
    return (
        <div className={`pt-[96px] pb-[112px]`}>
            <RedButton style={'w-[239px] h-[32px] mx-auto mb-[27px]'} text={'SHOP ONLINE'} textStyle={'text-[14px]/[19px] text-white font-openSans font-semibold'} />
            <h2 className={`text-[45px]/[55px] text-[#484848] font-audiowide text-center mb-[27px]`}>
                Our Online Gym Store
            </h2>
            <p className={`text-[16px]/[26px] text-[#9E9E9E] font-openSans max-w-[517px] text-center mx-auto mb-[33px]`}>
                Gym an unknown printer took a gallery of type and scrambled. It has survived unknown printercenturies.
            </p>
            <div className={`max-w-[1110px] mx-auto flex justify-between`}>
                {
                    itemStore.map((item, i) => {
                        return (
                            <StoreItem promotion={item.promotion} price={item.price} rate={item.rate} title={item.title} image={item.image} key={i} />
                        );
                    })
                }
            </div>
        </div>
    );
}

const StoreItem = ({ promotion, price, rate, title, image }) => {
    return (
        <div className={`w-[350px]`}>
            <div className={`h-[342px] bg-[#E9E9E9] relative flex pb-[15px] items-end pl-6`}>
                <div className={` absolute -top-[6px] left-[30px]`}>
                    <img src={flag} alt="img" />
                    <span className={`flex w-[35px] relative bottom-[70px] -right-[45px] text-[14px]/[18px] text-white font-openSans font-semibold`}>
                        {promotion}
                    </span>
                </div>
                <div className={` absolute bottom-[70px] left-1/2 -translate-x-1/2`}>
                    <img src={image} alt="" />
                </div>
                <div className={`text-[14px]/[24px] text-[#242323] font-openSans`}>
                    {title}
                </div>
            </div>
            <div className={`h-[54px] flex justify-between items-center`}>
                <div className={`text-[25px]/[35px] text-[#242323] font-openSans font-semibold`}>
                    {`$` + price}
                </div>
                <div className={`w-[120px] flex justify-between`}>
                    {
                        rateStar.map((item, i) => {
                            return (
                                <img src={i + 1 <= rate ? yellowStar : emptyStar} alt="img" key={i} className={`w-[18px] h-[18px]`} />
                            );
                        })
                    }
                </div>
            </div>
            <div className={` h-[48px] bg-[#AE0F0F] flex items-center justify-center cursor-pointer`}>
                <img src={cart} alt="img" className={`mr-[7px]`}/>
                <span className={` text-[14px]/[19px] text-white font-openSans font-semibold`}>
                    Add to cart
                </span>
            </div>
        </div>
    );
}

export default GymStore;