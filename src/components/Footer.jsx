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
            <div className={`max-w-[1110px] mx-auto flex justify-between max1150:flex-col max1150:items-center`}>
                {/* left block */}
                <div className={`flex max1150:mb-[50px] max600:flex-col`}>
                    <div className={`w-[342px] mr-[39px] max600:mr-0 max600:flex max600:flex-col max600:items-center max600:mb-10 max400:w-[85%] max400:mx-auto`}>
                        <div className={`mb-[7px]`}>
                            <img src={mainLogoFooter} alt="img" />
                        </div>
                        <p className={`text-[16px]/[26px] text-[#9E9E9E] mb-[23px] max600:text-center`}>
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
                    <div className={` max600:flex max600:flex-col max600:items-center`}>
                        <div>
                            <div className={`text-[16px]/[26px] text-[#484848] font-semibold mb-[9px]`}>
                                Our Classes
                            </div>
                            <hr className={`h-[2px] bg-[#AE0F0F] w-[70px] mb-[13px]`} />
                        </div>
                        <ul>
                            {linkArray.map((item, i, arr) => (
                                <li className={`text-[16px]/[26px] text-[#A7A7A7] max600:text-center ${i === arr.length - 1 ? 'mb-0' : 'mb-[9px]'}`} key={i}>
                                    <a href="">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* right block */}
                <div className={`flex max1150:flex-row-reverse max1150:w-[520px] max1150:justify-between max600:flex-col max600:items-center`}>
                    <div className={`mr-[90px] max1150:mr-0 max600:flex max600:flex-col max600:items-center max600:mb-10`}>
                        <div>
                            <div className={`text-[16px]/[26px] text-[#484848] font-semibold mb-[9px]`}>
                                Quick Links
                            </div>
                            <hr className={`h-[2px] bg-[#AE0F0F] w-[70px] mb-[13px]`} />
                        </div>
                        <ul>
                            {linkArray.map((item, i, arr) => (
                                <li className={`text-[16px]/[26px] text-[#A7A7A7] max600:text-center ${i === arr.length - 1 ? 'mb-0' : 'mb-[9px]'}`} key={i}>
                                    <a href="">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={` max600:flex max600:flex-col max600:items-center`}>
                        <div className={``}>
                            <div className={`text-[16px]/[26px] text-[#484848] font-semibold mb-[9px]`}>
                                Gymat Location
                            </div>
                            <hr className={`h-[2px] bg-[#AE0F0F] w-[70px] mb-[13px]`} />
                        </div>
                        <p className={`text-[16px]/[25px] text-[#676767] font-openSans max-w-[252px] mb-[13px] max600:text-center`}>
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