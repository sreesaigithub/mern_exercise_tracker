import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  //temporary
  const memberCount = 100;

  switch (type) {
    case "totalmembers":
      data = {
        title: "TOTAL MEMBERS",
        members: memberCount,
      };
      break;
    case "controlmembers":
      data = {
        title: "CONTROL GROUP MEMBERS",
        members: memberCount,
      };
      break;
    case "studymembers":
      data = {
        title: "STUDY GROUP MEMBERS",
        members: memberCount,
      };
      break;
    case "caseidperiod":
      data = {
        title: "CASE ID PERIOD",
        members: memberCount,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
        {data.members}
        </span>
      </div>
    </div>
  );
};

export default Widget;
