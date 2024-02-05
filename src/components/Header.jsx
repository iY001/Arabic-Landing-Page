import React from 'react'
import bg from '../assets/background.png'
import search from '../assets/Search.png'
import Location from '../assets/Location.png'
import Price from '../assets/Price.png'
import Duration from '../assets/Duration.png'
function Header() {
    return (
        <>
            <div className='relative w-full h-[900px] items-center' >
                <img src={bg} className='object-cover w-full h-full' alt="" />

                <div className='absolute lg:top-1/4 top-20 md:top-1/4 lg:right-24 md:right-10'>
                    <section className='space-y-12'>
                        <h1 className='lg:text-8xl md:text-6xl text-6xl font-bold text-black space-y-6'>
                            عقارك المثالي<br />على بعـد خطـــوة
                        </h1>
                        <p className='lg:text-3xl md:text-2xl text-3xl font-semibold text-gray-600'>
                            نحن نسعى لتوفير خدمة متميزة للعملاء وتسهيل عملية البحث <br />عن المنازل والشقق والفيلات والمكاتب التجارية.
                        </p>
                    </section>
                </div>
                
                <div className='absolute lg:top-3/4 md:top-3/4 top-2/4 lg:right-24 md:right-4 right-12 lg:w-2/4 md:w-[90%] w-3/4 mt-8'>
                    <div className='bg-white p-4 rounded-2xl flex md:flex-row flex-col-reverse items-center'>

                        <section className='bg-black p-8 rounded-3xl text-center lg:ml-12'>
                            <img src={search} className='' alt="" />
                        </section>
                        {/*Search*/}
                        <div className='flex md:flex-row flex-col w-full justify-center text-center'>

                        <section className='flex items-center md:mx-4 md:my-0 my-4'>
                            <img src={Location} className='px-4 h-16' alt="" />
                            <section className='flex flex-col'>
                                <p className='text-2xl font-bold'>حسب المكان</p>
                                <p className='text-xl text-gray-600'>فرنســـــا</p>
                            </section>
                        </section>

                        <section className='flex items-center md:mx-4 md:my-0 my-6'>
                            <img src={Price} className='px-4 h-16' alt="" />
                            <section className='flex flex-col mx-4'>
                                <p className='text-2xl font-bold'>السعر</p>
                                <p className='text-xl text-gray-600'>2000$</p>
                            </section>
                        </section>

                        <section className='flex items-center md:mx-4 md:my-0 my-6'>
                            <img src={Duration} className='px-4 h-16' alt="" />
                            <section className='flex flex-col mx-4'>
                                <p className='text-2xl font-bold'>المدة</p>
                                <p className='text-xl text-gray-600'>30 يوما</p>
                            </section>
                        </section>

                

                        </div>
                        {/*input*/}
                    </div>
                </div>


            </div>

            {/*Header*/}
            <div className='flex md:flex-row flex-col flex-wrap md:justify-between md:px-40 md:py-0 py-12 bg-black'>
                <section className='flex flex-col md:p-8 md:items-right text-center p-4'>
                    <p className='text-3xl font-bold text-white'>1000 +</p>
                    <p className='text-2xl text-gray-600'>عقار تم بيعه</p>
                </section>
                <section className='flex flex-col md:p-8 md:items-right text-center p-4'>
                    <p className='text-3xl font-bold text-white'>350 +</p>
                    <p className='text-2xl text-gray-600'>عملية تسيير</p>
                </section>
                <section className='flex flex-col md:p-8 md:items-right text-center p-4'>
                    <p className='text-3xl font-bold text-white'>400 +</p>
                    <p className='text-2xl text-gray-600'>زبون وفيّ</p>
                </section>
                <section className='flex flex-col md:p-8 md:items-right text-center p-4'>
                    <p className='text-3xl font-bold text-white'>115 +</p>
                    <p className='text-2xl text-gray-600'>عقار متــاح</p>
                </section>
            </div>
            {/*Header*/}
        </>
    )
}

export default Header