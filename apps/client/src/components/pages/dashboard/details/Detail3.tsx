import messageIcon from '../../../images/mesage.svg';
import backBtn from '../../../images/icons/backbtn.svg';
import { Button , CloseButton , TextInput } from '@mantine/core';

interface Detail3Props {
    nextStep: () => void;
    prevStep: () => void;
}


export default function Detail3(props: Detail3Props) {
    return(
        <div>
            <div className="bg-[#7E4EFB] h-[500px] relative rounded-[20px] p-3">
                    <button onClick={props.prevStep}>
                        <img src={backBtn} alt='backBtn' className='absolute left-3 top-3'/>
                    </button>
                    <CloseButton size={45} color='black' className='absolute right-3 top-2'/>
                <div>
                    <h5 className="text-center text-black text-[12px] p-2">3/7</h5>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                    <div className="flex justify-center items-center">
                        <div>
                            <img src={messageIcon} alt="paintBrushImg" />
                        </div>
                        <div>
                            <h3 className="text-white text-[24px] font-bold">Describe your business: </h3>
                            <TextInput 
                                placeholder="ex: IT & Software" 
                                className="w-[300px] h-[40px] p-3 rounded-[20px]" 
                            />
                            <Button 
                                onClick={props.nextStep}
                                className="w-[80%] h-[40px] mt-[80px] block mx-auto bg-black text-[16px] text-white px-5 rounded-[10px] hover:bg-black">
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}