import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="totalmembers" />
          <Widget type="controlmembers" />
          <Widget type="studymembers" />
          <Widget type="caseidperiod" />
        </div>
        <div className="charts">
    
        </div>
        <div className="listContainer">
          <div className="listTitle">IN PROGRESS(0)</div>
          <Table />
        </div>
        <div className="listContainer">
          <div className="listTitle">COMPLETED(5)</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
