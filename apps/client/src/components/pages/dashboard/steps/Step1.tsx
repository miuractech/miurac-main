export default function Step1(){
    return(
        <div>
            <div className="w-full rounded-[15px] flex flex-col bg-[#802EEA] p-3 justify-center text-center items-center">
                <h3 className="p-3 font-bold text-[22px] text-white">Welcome To Miurac</h3>
                <p className="font-[500] text-[14px]">We build your requirements into apps!</p>
                <button className="bg-white text-[14px] text-black px-3 py-2 rounded-[10px] my-2">Start New Project</button>
            </div>
            <div className="my-3 mx-2">
                <h2>Your Projects:</h2>
                <button className="w-[180px] h-[180px] my-3 flex flex-col justify-center items-center border-[#782DED] rounded-[20px] border-2 border-dashed">
                    <h2 className="text-[#782DED] text-[32px] p-2">+</h2>
                    <p className="text-[#782DED] text-[18px] p-2">Add Project</p>
                </button>
            </div>
        </div>
    );
}