import React from "react";

const ApprovalCard = ({ children }) => {
  console.log(children.props.author);
  return (
    <div className="ui card">
      <div className="content">
        {children.props?.author || "no author available"}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
