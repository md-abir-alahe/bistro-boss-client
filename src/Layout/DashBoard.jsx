import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {FaShoppingCart, FaWallet, FaCalendarAlt, FaHome} from 'react-icons/fa'

const DashBoard = () => {
    return (
        <div>
            <div className="drawer md:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to={``}><FaHome></FaHome> User Home</Link></li>
                        <li><Link to={``}><FaCalendarAlt></FaCalendarAlt> Reservations</Link></li>
                        <li><Link to={``}><FaWallet></FaWallet> Pricing History</Link></li>
                        <li><Link to={`/dashboard/mycart`}><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
                        <div className='divider'></div>
                        <li><Link to={`/`}><FaHome></FaHome> Home</Link></li>
                        <li><Link to={`/menu`}> Our Menu</Link></li>
                        <li><Link to={`/order/salad`}>Order</Link></li>
                    </ul>

                </div>
            </div>
        </div>
        
    );
};

export default DashBoard;