import RedButton from "./RedButton";
// import { Scrollbars } from 'react-custom-scrollbars-2';
import { Scrollbar } from 'react-scrollbars-custom';

const Schedule = () => {

    const firstRowArr = ['', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
    const firstColumnArr = ['9:00am', '10:00am', '11:00am', '1:00pm', '4:00pm', '6:00pm'];

    const schedule = [
        {
            day: '',
            time: []
        },
        {
            day: 'MON',
            time: {
                '9:00am': ['9:00am - 10:00am', 'FITNESS', 'text-[#E29235]'],
                '10:00am': ['10:00am - 11:00pm', 'BODY BUILDING', 'text-[#1BB6D7]'],
                '4:00pm': ['4:00pm - 5:00pm', 'RUNNING', 'text-[#B39DCE]'],
                '6:00pm': ['6:00pm - 7:00pm', 'FITNESS', 'text-[#E29235]'],
            }
        },
        {
            day: 'TUE',
            time: {
                '9:00am': ['9:00am - 10:00am', 'BOXING', 'text-[#AE0F0F]'],
            }
        },
        {
            day: 'WED',
            time: {
                '9:00am': ['9:00am - 10:00am', 'CYCLING', 'text-[#90D83E]'],
                '11:00am': ['11:00am - 12:00pm', 'BODY BUILDING', 'text-[#1BB6D7]'],
                '1:00pm': ['1:00pm - 2:00pm', 'FITNESS', 'text-[#E29235]'],
                '4:00pm': ['4:00pm - 5:00pm', 'RUNNING', 'text-[#B39DCE]'],
            }
        },
        {
            day: 'THUR',
            time: {
                '1:00pm': ['1:00pm - 2:00pm', 'BOXING', 'text-[#AE0F0F]']
            }
        },
        {
            day: 'FRI',
            time: {
                '10:00am': ['10:00am - 11:00pm', 'KARATE', 'text-[#FAD30A]'],
                '1:00pm': ['1:00pm - 2:00pm', 'MEDITATION', 'text-[#058E89]'],
            }
        },
        {
            day: 'SAT',
            time: {
                '1:00pm': ['1:00pm - 2:00pm', 'BOXING', 'text-[#AE0F0F]'],
            }
        },
        {
            day: 'SUN',
            time: {
                '10:00am': ['10:00am - 11:00pm', 'BODY BUILDING', 'text-[#1BB6D7]'],
                '4:00pm': ['4:00pm - 5:00pm', 'RUNNING', 'text-[#B39DCE]'],
            }
        }
    ]

    const headerTable = firstRowArr.map((item, i) => {
        return (
            <div className={`h-[80px] ${i === 0 ? 'w-[77px]' : 'w-[150px]'} flex justify-center items-center border-b-[1px] border-b-[rgba(174,15,15,0.25)] ${i > 0 ? ' border-l-[1px] border-l-[rgba(174,15,15,0.25)]' : ''} text-[16px]/[24px] text-[#AE0F0F] font-openSans font-semibold`} key={i}>
                {item}
            </div>
        );
    })
    const bodyTable = firstColumnArr.map((itemArr1, iArr1) => {

        return (
            <div className={`h-[70px] flex ${iArr1 === firstColumnArr.length - 1 ? '' : 'border-b-[1px] border-b-[rgba(174,15,15,0.25)]'}`} key={iArr1}>
                {firstRowArr.map((itemArr2, iArr2) => {
                    return (
                        <div className={`h-full ${iArr2 === 0 ? 'w-[77px] text-[14px]/[19px] font-openSans' : 'w-[150px] border-l-[1px] border-l-[rgba(174,15,15,0.25)]'} flex justify-center items-center hover:bg-[#E4E4E4]`} key={iArr2}>
                            {iArr2 === 0 ? itemArr1 : <ScheduleItem time={schedule[iArr2].time[itemArr1] ? schedule[iArr2].time[itemArr1][0] : ''} action={schedule[iArr2].time[itemArr1] ? schedule[iArr2].time[itemArr1][1] : ''} color={schedule[iArr2].time[itemArr1] ? schedule[iArr2].time[itemArr1][2] : ''} />}
                        </div>
                    );
                })}
            </div>
        );
    })

    return (
        <div className={`pt-[105px] pb-[118px]`}>
            <RedButton
                style={'w-[239px] h-[32px] mx-auto mb-[30px]'}
                text={'TIME & TABLE'}
                textStyle={'text-[14px]/[19px] text-white font-openSans font-semibold'}
            />
            <h2 className={`text-[45px]/[55px] text-[#484848] font-audiowide text-center mb-[14px] max650:w-[80%] max650:mx-auto max650:text-[35px]/[40px]`}>
                Weekly Class Schedule
            </h2>
            <p className={`w-[514px] text-center mx-auto text-[16px]/[26px] text-[#9E9E9E] font-openSans mb-[37px] max650:w-[70%]`}>
                Gym an unknown printer took a gallery of type and scrambled. It has survived unknown printercenturies.
            </p>
            <Scrollbar
                style={{ width: window.innerWidth >= 1130 ? 1130 : window.innerWidth - 15, height: 512, margin: '0 auto' }}
                trackXProps={{
                    renderer: (props) => {
                        const { elementRef, ...restProps } = props;
                        return <span {...restProps} ref={elementRef} className="TrackX" />;
                    },
                }}
                thumbXProps={{ className: 'thumbX' }}
            >
                <div className={`w-[1130px] h-[502px] bg-[#F8F8F8] border-[1px] border-[rgba(174,15,15,0.25)]`}>
                    <div className={`flex`}>
                        {headerTable}
                    </div>
                    <div>
                        {bodyTable}
                    </div>
                </div>
            </Scrollbar>
        </div>
    );
}

const ScheduleItem = ({ time, action, color }) => {
    return (
        <div>
            <div className={`text-[14px]/[23px] font-openSans font-light`}>
                {time}
            </div>
            <div className={` text-center text-[16px]/[23px] font-openSans ${color}`}>
                {action}
            </div>
        </div>
    );
}

export default Schedule;