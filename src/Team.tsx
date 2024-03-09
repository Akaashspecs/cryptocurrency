import Heading from "./Pure Component/Heading";
import TeamMemberDetail from "./TeamDetail";
import { TeamDetail, memberDetails } from "./helper";

const Team = () => {
  return (
    <div className=" bg-white  rounded mt-5 p-7 pb-10 w-full relative">
      <Heading headingText="Team" />
      <p className="text-slate-700 my-4 font-semibold">{TeamDetail}</p>

      {memberDetails.map((item) => (
        <div className="mt-3">
          <TeamMemberDetail
            imgSrc={item.img}
            detail={item.detail}
            name={item.name}
            profile={item.profile}
            key={item.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Team;
