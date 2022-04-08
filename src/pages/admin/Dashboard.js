import Chartline from "../../components/admin/charts/ChartLine";
import Barchart from "../../components/admin/charts/BarChart"
import Counter from "../../components/counter"
import './css/Dashboard.css'

const Dashboard = () => {
    return (
        <div className="container_dashboard">
            <div className="title"> 
                Dashboard  
            </div>
            <Counter/>
            <Chartline/>
            <Barchart/>
        </div>
    );
  };
  
export default Dashboard;