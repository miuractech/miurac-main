/* eslint-disable @typescript-eslint/ban-ts-comment */
export const ExpandedComponent = ({ data }: { data: threeBs }) => {
  
  return (
    <div className="flex flex-col gap-y-4 p-4">
      {Object.keys(data).map((item:string)=>(
        <div className="flex gap-x-3" >
          <div>
            <b>
              {item}
            </b>
          </div>
          <div>
            {/* 
            @ts-ignore */}
            {data[item]}
          </div>
        </div>
      ))}
    </div>
  );
};


interface threeBs {
  name: string;
  businessName: string;
  contact: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  message: string;
}
