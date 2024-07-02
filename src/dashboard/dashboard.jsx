import { Outlet } from 'react-router-dom';
import { DashboardProvider } from '../context/DashboardContext';


const Dashboard = ({ children }) => (
    <>
        <DashboardProvider>
            <div className=' block lg:flex mx-4 max-h-screen gap-8 justify-between transition-all'>
                Dashboard
            </div>
            {children}
        </DashboardProvider>
    </>
);

export default Dashboard;
