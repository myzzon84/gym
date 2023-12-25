import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

const Calculator = () => {

    const [selectedUnit, setSelectedUnit] = useState('metric');
    const [bmi, setBmi] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'all' });

    const onSubmit = (data) => {
        console.log(errors);
        let temp = data.weight / Math.pow(data.height / 100, 2);
        setBmi(temp.toFixed(1));
    };

    useEffect(() => {
        console.log(errors.weight?.type)
    }, [errors.weight]);

    return (
        <div className={`bg-[url('./assets/images/calculatorBG.svg')] bg-no-repeat`}>
            <div className={`max-w-[1110px] mx-auto flex h-[367px] max600:h-auto items-center justify-between max1150:px-3 max1080:flex-col max1080:py-5`}>
                <div className={`max-w-[486px]`}>
                    <h2 className={`text-[45px]/[55px] text-[#484848] font-audiowide mb-[11px] max550:text-[35px]/[40px] max550:text-center`}>
                        Calculate Your BMI
                    </h2>
                    <p className={`text-[16px]/[26px] text-[#9E9E9E] font-openSans max-w-[466px] max1080:text-center max600:mb-10 max550:w-[70%] max550:mx-auto`}>
                        Gym an unknown printer took a gallery of type and scrambled.
                        It has survived unknown printercenturies.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={`max-w-[540px] flex flex-wrap justify-between max500:justify-start max600:max-w-[400px] max500:w-[75%]`}>
                    <div className={` w-[255px] mb-5`}>
                        <div className={` w-max flex items-center cursor-pointer`} onClick={() => setSelectedUnit('metric')}>
                            <div className={`w-[19px] h-[19px] border-[1px] border-[#797979] rounded-[10px] flex justify-center items-center mr-2`}>
                                <div className={`w-[15px] h-[15px] ${selectedUnit === 'metric' ? 'bg-[#AE0F0F]' : 'bg-[#BCBCBC]'}  rounded-[10px]`}>

                                </div>
                            </div>
                            <div className={`text-[16px]/[19px] text-[#9E9E9E] font-openSans`}>
                                Metric Units
                            </div>
                        </div>
                    </div>
                    <div className={` w-[255px] mb-5`}>
                        <div className={` w-max flex items-center cursor-pointer`} onClick={() => setSelectedUnit('imperial')}>
                            <div className={`w-[19px] h-[19px] border-[1px] border-[#797979] rounded-[10px] flex justify-center items-center mr-2`}>
                                <div className={`w-[15px] h-[15px] ${selectedUnit === 'imperial' ? 'bg-[#AE0F0F]' : 'bg-[#BCBCBC]'} rounded-[10px]`}>

                                </div>
                            </div>
                            <div className={`text-[16px]/[19px] text-[#9E9E9E] font-openSans`}>
                                Imperial Units
                            </div>
                        </div>
                    </div>
                    <div className={` relative overflow-hidden max600:w-full`}>
                        <input
                            className={`w-[255px] h-[76px] max550:h-10 border-[1px] border-black placeholder:text-[24px]/[30px] placeholder:max550:text-[20px]/[25px] placeholder:text-[#6C6C6C] placeholder:font-openSans pl-[25px] mb-5 max600:w-full`}
                            placeholder={`Weight / ${selectedUnit === 'metric' ? 'kg' : 'lb'}`}
                            type='text'
                            {...register('weight', { required: true, pattern: /\d+/g })}
                        />
                        <span className={`${errors.weight?.type === 'required' ? 'left-2' : '-left-[150px]'} absolute bottom-3 bg-white text-xs px-3 text-red-700 duration-300`}>This field is required</span>
                        <span className={`${errors.weight?.type === 'pattern' ? 'left-2' : '-left-[150px]'} absolute bottom-3 bg-white text-xs px-3 text-red-700 duration-300`}>Only numbers</span>
                    </div>
                    <div className={` relative overflow-hidden max600:w-full`}>
                        <input
                            className={`w-[255px] h-[76px] max550:h-10 border-[1px] border-black placeholder:text-[24px]/[30px] placeholder:max550:text-[20px]/[25px] placeholder:text-[#6C6C6C] placeholder:font-openSans pl-[25px] mb-5 max600:w-full`}
                            placeholder={`Height / ${selectedUnit === 'metric' ? 'sm' : 'ft'}`}
                            type='text'
                            {...register('height', { required: true, pattern: /\d+/g })}
                        />
                        <span className={`${errors.height?.type === 'required' ? 'left-2' : '-left-[150px]'} absolute bottom-3 bg-white text-xs px-3 text-red-700 duration-300`}>This field is required</span>
                        <span className={`${errors.height?.type === 'pattern' ? 'left-2' : '-left-[150px]'} absolute bottom-3 bg-white text-xs px-3 text-red-700 duration-300`}>Only numbers</span>
                    </div>
                    <button
                        className={`w-[134px] h-[38px] bg-[#AE0F0F] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)] text-[14px]/[19px] text-white font-openSans font-semibold max500:mr-4`}
                        type='submit'
                    >
                        CALCULATE
                    </button>
                    <div className={`w-[255px] max500:w-max`}>
                        {bmi}
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Calculator;