import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          <br />
          You sure you want this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sammy"
          timeAgo="Today at 5:00PM"
          commentText={"Finally"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kim"
          timeAgo="Yesterday at 15:00PM"
          commentText={"yes"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Lee"
          timeAgo="Tomorrow at 25:00PM"
          commentText={"haahahahaha"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
