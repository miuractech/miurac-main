import { applicantType } from "@miurac/resources";

export const ExpandedComponent = ({ data }: { data: applicantType & {DOB:number} }) => {
  console.log(data);
  return (
    <div className="bg-gray-200 py-5">
      <div className="grid  grid-cols-2 bg-white p-5 rounded-lg w-3/4 m-auto gap-3" >
        <div className="text-right" >
          Name:
        </div>
        <div className="text-left">
          {data.name}
        </div>
        <div className="text-right" >
          DOB:
        </div>
        <div className="text-left">
          {new Date(data.DOB).toLocaleString()}
        </div>
        <div className="text-right" >
          Email:
        </div>
        <div className="text-left">
          {data.email}
        </div>
        <div className="text-right" >
          Phone:
        </div>
        <div className="text-left">
          {data.phone}
        </div>
        <div className="text-right" >
          Father Name:
        </div>
        <div className="text-left">
          {data.fatherName}
        </div>
        <div className="text-right" >
          Profession:
        </div>
        <div className="text-left">
          {data.profession}
        </div>
        <div className="text-right" >
          Address:
        </div>
        <div className="text-left">
          {data.address1}, {data.address2}, 
        </div>
        <div className="text-right" >
          City:
        </div>
        <div className="text-left">
          {data.city}- {data.pincode}
        </div>
        <div className="text-right" >
          region:
        </div>
        <div className="text-left">
          {data.state}, {data.country}
        </div>
        <div className="text-right" >
          Marriage:
        </div>
        <div className="text-left">
          {data.maritalStatus}
        </div>
        <div className="text-right" >
          Interest:
        </div>
        <div className="text-left">
          {data.interest}
        </div>
        <div className="text-right" >
          Education:
        </div>
        <div className="text-left">
          {data.education?.map((element)=>(
            <div className="grid grid-cols-4" >
              <div>
                {element.from}
              </div>
              <div>
                {element.to}
              </div>
              <div>
                {element.title}
              </div>
              <div>
                {element.cgpa}
              </div>
            </div>
          ))}
        </div>
        <div className="text-right" >
          Why should you join Miurac:
        </div>
        <div className="text-left">
          {data.question1}
        </div>
        <div className="text-right" >
        Important Test:
        </div>
        <div className="text-left">
          {data.question2}
        </div>
        <div className="text-right" >
          Message:
        </div>
        <div className="text-left">
          {data.message}
        </div>
      </div>
    </div>
  );
};
