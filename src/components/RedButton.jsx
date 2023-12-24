import buttonBG from '../assets/images/buttonBG.svg';

const RedButton = ({style, text, textStyle}) => {
    return(
        <div className={`${style} relative flex justify-center items-center`}>
            <img src={buttonBG} alt="img" className={`w-full h-full absolute top-0 left-0`}/>
            <div className={`relative ${textStyle}`}>
                {text}
            </div>
        </div>
    );
}

export default RedButton;