import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const WidgetSm = ({ members }) => {
  return (
    <div className="shadow-lg shadow-primary-light mt-7 rounded-lg p-2 basis-1/2">
      <h2 className="text-xl font-bold ml-2 my-6">New Join Members</h2>
      <ul className="ml-2">
        {members.map((member) => (
          <li key={member.id}>
            <div className="flex flex-row justify-between my-4 bg-primary-light rounded-full p-1">
              <img
                className="rounded-full w-14 h-14 object-cover"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="flex flex-col justify-start">
                <h2 className="font-bold text-lg">{member.name}</h2>
                <span className="text-sm">{member.job}</span>
              </div>
              <Link className="flex justify-center items-center mr-4">
                <VisibilityIcon className="text-xl" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
