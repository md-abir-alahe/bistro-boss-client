import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover
                img={menuImg}
                title={"Our Menu"}
            ></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu item */}
            <MenuCategory coverImg={dessertBg} items={desserts} title={"Dessert"}></MenuCategory>
            {/* pizza menu item */}
            <MenuCategory coverImg={pizzaImg} items={pizza} title={"Pizza"}></MenuCategory>
            {/* salad menu item */}
            <MenuCategory coverImg={saladImg} items={salad} title={"Salad"}></MenuCategory>
            { }
            <MenuCategory coverImg={soupImg} items={soup} title={"Soup"}></MenuCategory>
        </div>
    );
};

export default Menu;