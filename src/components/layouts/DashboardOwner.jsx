import SidebarDashboard from './SidebarDashboard';
import { Outlet } from 'react-router-dom';

const DashboardOwner = () => {
    return (
        <div className='flex flex-row'>
            <SidebarDashboard/> 
            <Outlet/>
        </div>
    )
}

export default DashboardOwner;
