import React from 'react'
import logo from '../assets/footerLogo.png'


function Footer() {
    return (
        <>
            <div className='w-full bg-black bg-opacity-[90%] flex flex-col justify-center lg:text-right text-center'>
                <section className='flex justify-center items-center py-10'>
                    <img src={logo} alt="logo" />
                </section>

                <div className='w-full lg:w-[80%] flex justify-center mx-auto px-4 py-2'>
                    <section className='w-full flex flex-col lg:flex-row'>
                        <ul className='text-white space-y-4 text-md mx-4 lg:w-1/3 my-6'>
                            <li className='text-xl font-bold'>روابط مفيدة</li>
                            <li><a href="#">الرئيسية</a></li>
                            <li><a href="#slider">اعثر على عقارك</a></li>
                            <li><a href="#blog">استشارة مجانية</a></li>
                        </ul>
                        <ul className='text-white space-y-4 text-md mx-4 lg:w-1/3 my-6'>
                            <li className='text-xl font-bold'>الصفحات القانونية</li>
                            <li>سياسة الخصوصية</li>
                            <li>الشروط و الأحكام</li>
                            <li>اتصل بنا</li>
                            <li>المعلومات القانونـــية</li>
                        </ul>
                        <section className='w-full lg:w-1/3 space-y-2 my-6'>
                            <h1 className='text-white text-xl font-bold '>جريدتنا الالكترونية</h1>
                            <p className='text-white text-md font-light '>أحصل على آخر المواضيع والأخبار في بريدك</p>
                            <div className='relative'>
                                <input type="text" placeholder='ادخل بريدك' className='bg-white w-full lg:w-3/4 h-16 px-6 py-4 ring-black ring-0 focus:ring-0 rounded-full text-black my-6 relative z-10' />
                                <button className='absolute top-7 left-2 lg:left-[126px] z-10 bg-black text-white px-6 py-4 rounded-full'>اشترك</button>
                            </div>
                        </section>
                    </section>
                </div>

                <div className='font-semibold h-[2px] bg-white mx-auto lg:w-3/4 md:w-3/4 w-3/4 mt-6 my-6' />
                <p className='font-light text-center text-[#C4C4C4] lg:text-lg text-sm mb-5'> نوفيلاند للعقارات - جميع الحقوق محفوظة 2023</p>

            </div>

        </>
    )
}

export default Footer