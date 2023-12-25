const Consultant = () => {
    return (
        <div className={`h-[450px] bg-[url('./assets/images/ConsultantBG.png')] bg-center max600:bg-[-450px_center] flex justify-center items-center`}>
            <div>
                <h2 className={`text-[45px]/[61px] text-white font-audiowide mb-[18px] max750:px-5 max750:text-center max450:text-[35px]/[40px]`}>
                    Need a Fitness Consultant?
                </h2>
                <div className={` text-center text-[30px]/[31px] text-white font-openSans`}>
                    <span className={`text-[#AE0F0F]`}>Call:</span>+130-4044888
                </div>
            </div>
        </div>
    );
}

export default Consultant;