import { FunctionComponent } from "react";
import AdminMenu from "./adminMenu/AdminMenu";
import AdminItems from './adminItems/AdminItems'
import AdminDetails from "./adminDetails/AdminDetails";
interface AdminPageProps {
    
}
 
const AdminPage: FunctionComponent<AdminPageProps> = () => {
    return (  
        <>
        <div className='bg-adminbgColor'>
        <div className='relative gap-10 h-screen flex flex-col-reverse md:flex-row  justify-between text-white '>
            {/* Admin Menus */}
            <div className='flex-1 bg-admindarkColor flex  md:relative top-0'>
                <AdminMenu />
            </div>

            {/* Admin Items */}
            <div className='admin-items flex-[7_7_0%]  overflow-scroll'>
                <AdminItems />
            </div>
            <div className='flex-[4_4_0%] '>
                <AdminDetails />
            </div>
        </div>
        </div>
        </>
    );
}
 
export default AdminPage;