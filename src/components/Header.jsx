import mainLogo from '../assets/images/mainLogo.png';
import searchIcon from '../assets/images/searchIcon.svg';
import buttonIcon from '../assets/images/buttonIcon.svg';
import appStore from './appStore';
import { useEffect, useRef, useState } from 'react';

const Header = () => {

    const menuItems = ['Home', 'About', 'Page', 'Class', 'Schedule', 'Blog', 'Shop', 'Contact'];
    const showMobileMenu = appStore(state => state.showMobileMenu);
    const setShowMobileMenu = appStore(state => state.setShowMobileMenu);
    const showSearchInput = appStore(state => state.showSearchInput);
    const setShowSearchInput = appStore(state => state.setShowSearchInput);
    const refSearchInput = useRef(null);

    const menuList = menuItems.map((item, i) => {
        return (
            <li
                key={i}
                className={`h-[26px] cursor-pointer hover:border-b-[2px] hover:border-b-[#AE0F0F] relative max800:mb-5 max800:text-[20px]/[24px]`}
                onClick={(e) => {
                    e.preventDefault();
                    setShowMobileMenu(!showMobileMenu);
                }}
            >
                <a href="">
                    {item}
                </a>
            </li>
        );
    });

    useEffect(() => {
        if (showSearchInput) {
            setTimeout(() => {
                refSearchInput.current.focus();
            }, 300);
        }
    }, [showSearchInput]);

    return (
        <div className={` absolute top-0 left-1/2 -translate-x-1/2 max-w-[1110px] flex justify-between items-center w-full mt-[34px] max1200:px-5`}>
            <a href='' className={`h-[43px] min-w-[124px] block`}>
                <img src={mainLogo} alt="logo" className={``} />
            </a>
            <ul className={`flex justify-between items-center  grow text-white text-[16px]/[25px] font-openSans max-w-[600px] max1200:px-3 max800:absolute max800:flex-col  max800:bg-[rgba(0,0,0,.9)] max800:z-[10] max800:max-w-full max800:w-[96%] max800:h-[97vh] max800:mt-2 max800:-top-[34px] max800:justify-start max800:pt-10 max800:rounded-[20px] ${showMobileMenu ? ' max800:right-[2%]' : 'max800:right-full'}  relative duration-500`}>
                {menuList}
                <div
                    className={`absolute top-5 right-10 w-10 h-10 rounded-[20px] bg-white hidden max800:block rotate-45 cursor-pointer`}
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <div className={`absolute top-1/2 -translate-y-1/2 w-9 left-1/2 -translate-x-1/2 h-[6px] bg-black rounded`}></div>
                    <div className={`absolute top-1/2 -translate-y-1/2 w-9 left-1/2 -translate-x-1/2 h-[6px] bg-black rounded rotate-90`}></div>
                </div>
            </ul>
            <div className={`flex justify-between relative w-[200px] max800:w-[260px] items-center max500:absolute max500:left-5 max500:top-[70px] max500:flex-row-reverse max500:w-[230px]`}>
                <img src={searchIcon} alt="search" className={` cursor-pointer max500:scale-125`} onClick={() => setShowSearchInput(!showSearchInput)} />
                <div className={`w-10 h-8 hidden max800:block relative cursor-pointer`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <div className={` absolute w-10 top-0 left-0 h-[6px] bg-white rounded`}></div>
                    <div className={` absolute w-10 top-1/2 -translate-y-1/2 h-[6px] bg-white rounded ${showMobileMenu}`}></div>
                    <div className={` absolute w-10 bottom-0 left-0 h-[6px] bg-white rounded`}></div>
                </div>
                <a href="" className={`text-[14px]/[40px] text-[#AE0F0F] bg-[#D9D9D9] pr-[10px] pl-[49px] relative`}>
                    JOIN CLASS
                    <img src={buttonIcon} alt="button icon" className={`absolute top-1/2 -translate-y-1/2 left-[5px]`} />
                </a>
                <input type="text" className={` absolute top-[60px] left-0 w-full h-10 rounded-[15px] px-5 outline-none bg-[rgba(255,255,255,.7)] ${showSearchInput ? ' opacity-100 visible' : ' opacity-0 invisible'} duration-500`} ref={refSearchInput} onBlur={() => setShowSearchInput(!showSearchInput)} />
            </div>
        </div>
    );
}

export default Header;