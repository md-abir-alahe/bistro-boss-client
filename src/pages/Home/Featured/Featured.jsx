import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <div className='bg-slate-950 bg-opacity-30 mt-0'>
                <SectionTitle
                
                    heading={"Featured Items"}
                    subHeading={"check it out"}
                ></SectionTitle>
                <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p>Aug 20, 2029</p>
                        <p className='uppercase'>Where can I get some ?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae a corporis, magni magnam facere dolores recusandae illum voluptates laborum, cupiditate veritatis nemo fugit deserunt nihil alias itaque sed blanditiis repellendus! Inventore accusantium, laudantium debitis perspiciatis nesciunt, delectus vero aliquam nihil molestiae consequatur ab sunt quasi, ad minus. Ipsum, provident voluptas!</p>
                        <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;