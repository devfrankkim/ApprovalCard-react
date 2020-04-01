import React from "react";
import ReactDOM from "react-dom";

const Segment = props => {
  console.log(props.children);
  return <div className="ui placeholder segment">{props.children}</div>;
};
const Document = ({ nodoc, add }) => {
  return (
    <>
      <div className="ui icon header">
        <i className="pdf file outline icon"></i>
        {nodoc}
      </div>
      <div className="ui primary button">{add}</div>
    </>
  );
};

const Information = ({ info, page }) => {
  return (
    <>
      <h4 className="ui header">{info}</h4>
      <p>{page}</p>
    </>
  );
};
const App1 = () => {
  return (
    <div>
      <Segment>
        <Document
          nodoc="No documents are listed for this customer."
          add="Add Document"
        />
      </Segment>
      <Segment>
        <Information
          info="For Your Information"
          page="Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo."
        />
      </Segment>
    </div>
  );
};

export default App1;
ReactDOM.render(<App1 />, document.querySelector("#root"));
