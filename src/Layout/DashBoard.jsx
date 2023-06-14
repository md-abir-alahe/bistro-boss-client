import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaUser, FaUsers } from 'react-icons/fa'
import useCart from '../hooks/useCart';

const DashBoard = () => {
    const [cart] = useCart();


    // TODO: load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;

    return (
        <div>
            <div className="drawer md:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle checked:opacity-100" />
                <div className="drawer-content flex flex-col items-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content bg-[#D1A054]">
                        {
                            isAdmin ? <>
                                <li><NavLink to={`/dashboard/home`}><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to={`/dashboard/reservations`}><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to={`/dashboard/history`}><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to={`/dashboard/history`}><FaWallet></FaWallet> Manage Bookings</NavLink></li>
                                <li><NavLink to={`/dashboard/allusers`}><FaUsers></FaUsers> Manage Users</NavLink></li>
                                
                            </> : <>
                                <li><NavLink to={`/dashboard/home`}><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to={`/dashboard/reservations`}><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                <li><NavLink to={`/dashboard/history`}><FaWallet></FaWallet> Pricing History</NavLink></li>
                                <li>
                                    <NavLink to={`/dashboard/mycart`}><FaShoppingCart></FaShoppingCart> My Cart <div className="badge badge-secondary ms-2">+{cart?.length || 0}</div></NavLink>
                                </li>
                            </>
                        }




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