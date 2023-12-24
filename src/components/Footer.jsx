import mainLogoFooter from '../assets/images/mainLogoFooter.png';
import facebookIconFooter from '../assets/images/facebookIconFooter.svg';
import instagramIconFooter from '../assets/images/instagramIconFooter.svg';
import twitterIconFooter from '../assets/images/twitterIconFooter.svg';
import phoneIcon from '../assets/images/phoneIcon.svg';

const Footer = () => {

    const linkArray = [
        'Fitness Classes',
        'Aerobics Classes',
        'Power Yoga',
        'Lean Machines',
        'Full-Body Strength',
    ];

    return (
        <div className={`py-[100px] font-openSans`}>
            <div className={`max-w-[1110px] mx-auto flex justify-between`}>
                {/* left block */}
                <div className={`flex`}>
                    <div className={`w-[342px] mr-[39px]`}>
                        <div className={`mb-[7px]`}>
                            <img src={mainLogoFooter} alt="img" />
                        </div>
                        <p className={`text-[16px]/[26px] text-[#9E9E9E] mb-[23px]`}>
                            Gesent vel rutrum purus Nam vel dui eu risus duis dignissim dignissim Suspen disse at eros tempus
                        </p>
                        <div className={`flex`}>
                            {
                                [
                                    facebookIconFooter,
                                    instagramIconFooter,
                                    twitterIconFooter,
                                ].map((item, i, arr) => {
                                    return (
                                        <a href='' key={i} className={`w-[46px] h-[46px] border-[1px] border-[#C0C0C0] rounded-[4px] flex justify-center items-center ${i === arr.length - 1 ? 'mr-0' : 'mr-[22px]'}`}>
                                            <img src={item} alt="img" className={`w-[22px] h-[22px]`} />
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className={`text-[16px]/[26px] text-[#484848] font-semibold mb-[9px]`}>
                                Our Classes
                            </div>
                            <hr className={`h-[2px] bg-[#AE0F0F] w-[70px] mb-[13px]`} />
                        </div>
                        <ul>
                            {linkArray.map((item, i, arr) => (
                                <li className={`text-[16px]/[26px] text-[#A7A7A7] ${i === arr.length - 1 ? 'mb-0' : 'mb-[9px]'}`} key={i}>
                                    <a href="">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* right block */}
                <div className={`flex`}>
                    <div className={`mr-[90px]`}>
                        <div>
                            <div className={`text-[16px]/[26px] text-[#484848] font-semibold mb-[9px]`}>
                                Quick Links
                            </div>
                            <hr className={`h-[2px] bg-[#AE0F0F] w-[70px] mb-[13px]`} />
                        </div>
                        <ul>
                            {linkArray.map((item, i, arr) => (
                                <li className={`text-[16px]/[26px] text-[#A7A7A7] ${i === arr.length - 1 ? 'mb-0' : 'mb-[9px]'}`} key={i}>
                                    <a href="">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className={``}>
                            <div className={`text-[16px]/[26px] text-[#484848] font-semibold mb-[9px]`}>
                                Gymat Location
                            </div>
                            <hr className={`h-[2px] bg-[#AE0F0F] w-[70px] mb-[13px]`} />
                        </div>
                        <p className={`text-[16px]/[25px] text-[#676767] font-openSans max-w-[252px] mb-[13px]`}>
                            178 West 27th Street, Suite 527, New York NY 10012 United States
                        </p>
                        <div className={`flex items-center`}>
                            <img src={phoneIcon} alt='img' className={` inline-block`}/>
                            <span className={`text-[16px[]/[19px] text-[#AE0F0F] font-openSans font-semibold mb-[6px]`}>
                                +1-234-5678901
                            </span>
                        </div>
                        <div className={`text-[16px]/[26px] text-[#0094FF]`}>
                            gymat@yourname.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;