import React from "react";

type TeamDetailType = {
  imgSrc: string;
  name: string;
  profile: string;
  detail: string;
};

const TeamMemberDetail: React.FC<TeamDetailType> = ({
  imgSrc,
  name,
  profile,
  detail,
}) => {
  return (
    <div className="bg-sky-100 w-full flex px-6 py-3 rounded flex-col sm:flex-row items-center ">
      <div className="flex flex-col items-center w-64 ">
        <img src={imgSrc} alt="" className="rounded font-medium" />
        <div>{name}</div>
        <div className="text-xs">{profile}</div>
      </div>
      <div className="grow pl-3 text-slate-800 font-normal mt-2 sm:mt-0">
        {detail}
      </div>
    </div>
  );
};

export default TeamMemberDetail;
