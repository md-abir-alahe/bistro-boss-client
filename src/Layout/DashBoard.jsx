import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {FaShoppingCart, FaWallet, FaCalendarAlt, FaHome} from 'react-icons/fa'

const DashBoard = () => {
    return (
        <div>
            <div className="drawer md:drawer-open bg-[#D1A054]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle checked:opacity-100" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to={``}><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to={``}><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                        <li><NavLink to={``}><FaWallet></FaWallet> Pricing History</NavLink></li>
                        <li><NavLink to={`/dashboard/mycart`}><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                        <div className='divider'></div>
                        <li><NavLink to={`/`}><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to={`/menu`}> Our Menu</NavLink></li>
                        <li><NavLink to={`/order/salad`}>Order</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
        
    );
};

export default DashBoard;