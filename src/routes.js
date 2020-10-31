import {MdDashboard} from 'react-icons/md';
import AdminStratorSetting from './views/adminstartor/AdminStratorSetting';
import Dashboard from './views/Dashboard/Dashboard';
const routes = [
    {
        path:'/dashboard',
        name:'Dashboard',
        icon:MdDashboard,
        component:Dashboard,
        layout:'/admin',
        show:true

    },
    {
        path:'/adminsetting',
        name:'Adminstrator Setting',
        icon:MdDashboard,
        component:AdminStratorSetting,
        layout:'/admin',
        show:true

    },
]



export default routes;