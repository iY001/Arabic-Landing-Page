import React from 'react'
import group22 from '../assets/Group 22.png'
import group23 from '../assets/Group 23.png'
import group24 from '../assets/Group 24.png'
import group11 from '../assets/Group 11.png'
import larrow from '../assets/Arrow Left.png'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'
import house1 from '../assets/house1.png'
import starsH1 from '../assets/starsH1.png'
import starsH2 from '../assets/starsH2.png'
import starsH3 from '../assets/starsH3.png'
import house2 from '../assets/house2.png'
import house3 from '../assets/house3.png'
import sLArrow from '../assets/Arrow-Left.png'
import sRArrow from '../assets/Arrow-Right.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import blogImg1 from '../assets/blogImage-1.png'
import blogImg2 from '../assets/blogImage-2.png'
import blogImg3 from '../assets/blogImage-3.png'
import blogImg4 from '../assets/blogImage-4.png'
function Content() {
  const swiper = useSwiper();

  return (
    <>

      {/*Content Div*/}
      <div>
        <div className='md:px-28 md:py-20 px-12 py-12 md:space-y-0 space-y-14 flex md:flex-row flex-col md:justify-between justify-center items-center md:text-right text-center'>
          <section>
            <h1 className='lg:text-5xl text-4xl font-bold text-black'>خدمات عقارية حديثة، لا<br /> مثيل لها</h1>
          </section>

          <section>
            <h1 className='text-2xl font-semibold text-gray-400'>فريقنا يقدم خدمات عقارية شاملة تجعلكم <br />تستغنون عن أي وكالة أخرى</h1>
          </section>
        </div>
        {/*Text Div*/}

        <div className='lg:px-28 md:py-8 px-12 py-12 flex md:flex-row lg:flex-nowrap md:flex-wrap flex-col lg:justify-between justify-center md:text-right text-center'>
          <section className='flex flex-col lg:text-right text-center justify-center mb-8 md:mr-6'>
            <img src={group22} className='lg:mr-0 mx-auto' alt="" />
            <h1 className='text-3xl font-bold text-black my-6'>البيع و الشراء</h1>
            <p className='text-2xl font-semibold text-gray-400'>نقدم خدمة شاملة لبيع وشراء <br />العقارات بأسعار تنافسية</p>
          </section>
          <section className='flex flex-col lg:text-right text-center justify-center mb-8 md:mr-6'>
            <img src={group23} className='lg:mr-0 mx-auto' alt="" />
            <h1 className='text-3xl font-bold text-black my-6'>التأجير العقاري</h1>
            <p className='text-2xl font-semibold text-gray-400'>نوفر خدمة سهلة وموثوقة لتأجير <br />الشقق والفيلات والمكاتب التجارية</p>
          </section>
          <section className='flex flex-col lg:text-right text-center justify-center mb-8 md:mr-6'>
            <img src={group24} className='lg:mr-0 mx-auto' alt="" />
            <h1 className='text-3xl font-bold text-black my-6'>ادارة الممتلكات</h1>
            <p className='text-2xl font-semibold text-gray-400'>نهتم بإدارة وصيانة العقارات <br />لتحقيق أعلى قيمة استثمارية</p>
          </section>
        </div>
        {/*Groups Div*/}

        <div className='w-full md:px-28 md:py-20 px-12 py-12 md:space-y-0 space-y-14 flex md:flex-row flex-col md:justify-between justify-center items-center md:text-right text-center'>
          <section className='w-1/2'>
            <h1 className='font-bold lg:text-5xl text-4xl'>فريق من المختصين،<br /> في خدمتكم</h1>
          </section>

          <div className='flex  '>
            <img src={group11} className='h-fit' alt="" />
            <section className='relative mr-8 mt-3'>
              <img src={larrow} className='absolute left-0 top-[-8px] h-fit m-3' alt="" />
              <h1 className='font-medium flex text-xl'>فريقنا </h1>
              <p className='font-bold text-xl text-gray-400'>تعرف عليهم </p>
            </section>
          </div>
        </div>
        {/*Text Div*/}

        <div className='lg:px-28 md:py-8 px-12 py-12 flex md:flex-row lg:flex-nowrap md:flex-wrap flex-col lg:justify-between justify-center md:text-right text-center'>
          <section className='lg:text-right text-center'>
            <img src={person1} alt="" />
            <section className='px-12'>
              <h1 className='font-bold text-3xl mb-4'>محمد ياسيـــن</h1>
              <h1 className='font-bold text-2xl text-gray-400'>خبير في تقييم العقارات</h1>
            </section>
          </section>
          <section className='lg:text-right text-center'>
            <img src={person2} alt="" />
            <section className='px-12'>
              <h1 className='font-bold text-3xl mb-4'>أحمد محســن</h1>
              <h1 className='font-bold text-2xl text-gray-400'>مستشار في البيع و الشراء</h1>
            </section>
          </section>
          <section className='lg:text-right text-center'>
            <img src={person3} alt="" />
            <section className='px-12'>
              <h1 className='font-bold text-3xl mb-4'>عبد الله كريـــم</h1>
              <h1 className='font-bold text-2xl text-gray-400'>خبير في تسيير العقارات</h1>
            </section>
          </section>
        </div>
      </div>
      {/*Content Div*/}

      {/*Slider Container*/}
      <div id='slider' className='w-full flex flex-col justify-center bg-[#95B5CC] md:py-20 py-12 px-16 bg-opacity-[29%] my-12'>

        <section className='md:flex md:justify-between justify-center md:text-right text-center mb-12'>
          <h1 className='font-bold text-black lg:text-6xl md:text-4xl text-2xl mb-4'>أعثر على عقارك المثالي</h1>
          <p className='font-normal text-gray-500 lg:text-3xl md:text-2xl text-xl'>ابحث في المئات من العقارات، منازل و<br /> منتجعات وحتى هوتيلات</p>
        </section>

        {/*Slider*/}

        <Swiper
          modules={[Navigation]}
          spaceBetween={150}
          slidesPerView={() => { if (window.innerWidth < 1024) { return 1 } else { return 3 } }}
          // slidesPerView={3}  
          onInit={(swiper) => {
            // Set initial slides per view based on window width
            swiper.params.slidesPerView = window.innerWidth <= 1024 ? 2 : 3;
            swiper.update(); // Update the Swiper instance
            // Add resize listener to dynamically update slides per view on window resize
            window.addEventListener('resize', () => {
              swiper.params.slidesPerView = window.innerWidth < 1024 ? 1 : 3;
              swiper.update(); // Update the Swiper instance on window resize
            });
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='flex justify-between lg:w-[100%] lg:px-12 md:w-[100%] w-full text-center py-8 items-center'>

          <SwiperSlide slot="wrapper-start" className='lg:w-1/4 w-full'>
            <img className='w-full' src={house1} alt="" />
            <section className='flex flex-col text-right'>
              <span className='flex py-4'>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>منزل فردي</p>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>مسبـــــح</p>
              </span>
              <span className='flex justify-between'>
                <h1 className='font-bold text-2xl'>$ 45.000</h1>
                <img className='lg:w-44 w-fit' src={starsH1} alt="" />
              </span>
            </section>
          </SwiperSlide>

          <SwiperSlide slot="wrapper-start" className='lg:w-1/4'>
            <img className='w-full' src={house2} alt="" />
            <section className='flex flex-col text-right'>
              <span className='flex py-4'>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>فندق</p>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>شاطئ</p>
              </span>
              <span className='flex justify-between'>
                <h1 className='font-bold text-2xl'>$ 45.000</h1>
                <img className='lg:w-44 w-fit' src={starsH2} alt="" />
              </span>
            </section>
          </SwiperSlide>

          <SwiperSlide slot="wrapper-start" className='lg:w-1/4'>
            <img className='w-full' src={house3} alt="" />
            <section className='flex flex-col text-right'>
              <span className='flex py-4'>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>مسكن عائلي </p>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>مسبـــــح</p>
              </span>
              <span className='flex justify-between'>
                <h1 className='font-bold text-2xl'>$ 45.000</h1>
                <img className='lg:w-44 w-fit' src={starsH3} alt="" />
              </span>
            </section>
          </SwiperSlide>

          <SwiperSlide slot="wrapper-start" className='w-1/4'>
            <img className='w-full' src={house1} alt="" />
            <section className='flex flex-col text-right'>
              <span className='flex py-4'>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>منزل فردي</p>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>مسبـــــح</p>
              </span>
              <span className='flex justify-between'>
                <h1 className='font-bold text-2xl'>$ 45.000</h1>
                <img className='lg:w-44 w-fit' src={starsH1} alt="" />
              </span>
            </section>
          </SwiperSlide>

          <SwiperSlide slot="wrapper-start" className='w-1/4'>
            <img className='w-full' src={house2} alt="" />
            <section className='flex flex-col text-right'>
              <span className='flex py-4'>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>فندق</p>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>شاطئ</p>
              </span>
              <span className='flex justify-between'>
                <h1 className='font-bold text-2xl'>$ 45.000</h1>
                <img className='lg:w-44 w-fit' src={starsH2} alt="" />
              </span>
            </section>
          </SwiperSlide>

          <SwiperSlide slot="wrapper-start" className='w-1/4'>
            <img className='w-full' src={house3} alt="" />
            <section className='flex flex-col text-right'>
              <span className='flex py-4'>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>مسكن عائلي </p>
                <p className='bg-[#D9D9D9] text-black text-opacity-[53%] font-semibold w-24 h-8 text-center rounded-2xl mx-2'>مسبـــــح</p>
              </span>
              <span className='flex justify-between'>
                <h1 className='font-bold text-2xl'>$ 45.000</h1>
                <img className='lg:w-44 w-fit' src={starsH3} alt="" />
              </span>
            </section>
          </SwiperSlide>


          {/*Slider*/}

          <div className='swiper-nav-btns flex lg:justify-end md:justify-between justify-center mt-12 '>

            <button className='swiper-button-prev w-16 mx-4 p-4 rounded-full bg-white cursor-pointer'>
              <img src={sRArrow} alt="" />
            </button>
            <button className='swiper-button-next w-16 mx-4 p-4 rounded-full bg-white cursor-pointer'>
              <img src={sLArrow} alt="" />
            </button>
          </div>
        </Swiper >


      </div >
      {/*Slider Container*/}

      {/*BLOG*/}
      <div id='blog' className='w-full flex flex-col justify-center md:px-6 lg:px-24'>
        <section className='my-12 flex md:flex-row flex-col md:justify-between md:text-right justify-center items-center text-center'>
          <span className='w-full md:w-1/2'>
            <h1 className='font-semibold text-3xl md:text-5xl my-6'>المدونة</h1>
            <p className='text-gray-400 text-xl md:text-2xl font-semibold'>اطلع على أحدث المواضيع و المقالات في<br /> المجال العقاري</p>
          </span>
          <span className='flex items-center my-4'>
            <h1 className='font-semibold text-xl md:text-2xl ml-4'>تفقد صفحة المدونة</h1>
            <img src={larrow} className='h-fit mt-1' alt="" />
          </span>
        </section> {/*Text*/}

        {/*Blog Images*/}
        <div className='w-full flex md:flex-row md:text-right text-center flex-col justify-center md:justify-between items-center lg:flex-nowrap md:flex-wrap md:px-0 px-4'>
          <div className='w-full md:w-1/2'>
            <section>
              <img src={blogImg1} alt="" className='w-fit' />
              <h1 className='font-medium text-xl md:text-2xl my-4'>أفضل الاستثمارات العقارية لعام 2023</h1>
              <p className='text-gray-400 text-md md:text-xl font-medium lg:w-[60%]'>اكتشف الفرص الاستثمارية الواعدة في سوق العقارات للعام المقبل.</p>
            </section>

            <section className='lg:w-[60%] w-full flex flex-wrap'>
              <p className='bg-[#95B5CC] bg-opacity-[29%] text-[#66ACDD] text-opacity-[100%] font-semibold w-36 h-9 flex justify-center items-center text-center rounded-2xl mx-2 my-3'>منزل فردي</p>
              <p className='bg-[#95B5CC] bg-opacity-[29%] text-[#66ACDD] text-opacity-[100%] font-semibold w-36 h-9 flex justify-center items-center text-center rounded-2xl mx-2 my-3'>ايجار العقارات</p>
              <p className='bg-[#95B5CC] bg-opacity-[29%] text-[#66ACDD] text-opacity-[100%] font-semibold w-36 h-9 flex justify-center items-center text-center rounded-2xl mx-2 my-3'>استثمار</p>
              <p className='bg-[#95B5CC] bg-opacity-[29%] text-[#66ACDD] text-opacity-[100%] font-semibold w-36 h-9 flex justify-center items-center text-center rounded-2xl mx-2 my-3'>البيع و الشراء</p>
              <p className='bg-[#95B5CC] bg-opacity-[29%] text-[#66ACDD] text-opacity-[100%] font-semibold w-36 h-9 flex justify-center items-center text-center rounded-2xl mx-2 my-3'>مسبح</p>
            </section>
          </div> {/*Blog Right*/}

          <div className='w-full md:w-1/2 px-6 my-4'>
            <section className='h-1/2'>
              <img src={blogImg2} className='lg:w-fit w-full h-2/4' alt="" />
              <h1 className='font-medium text-xl md:text-2xl my-4'>نصائح لشراء منزل أحلامك بأسعار معقولة</h1>
              <p className='text-gray-400 text-md md:text-xl font-medium lg:w-[60%]'>تعرف على كيفية العثور على منزل يناسب ميزانيتك واحتياجاتك.</p>
            </section>
            <section className='h-1/2 my-4'>
              <img src={blogImg3} className='lg:w-fit w-full h-2/4' alt="" />
              <h1 className='font-medium text-xl md:text-2xl my-4'>كيف تقوم بتأجير عقاراتك بالطريقة الصحيحة</h1>
              <p className='text-gray-400 text-md md:text-xl font-medium lg:w-[60%]'>احصل على نصائح حول تأجير العقارات بشكل مربح وإدارتها بكفاءة</p>
            </section>
          </div>
        </div>
        {/*Blog Images*/}

        <section className='flex md:flex-row flex-col md:justify-between md:text-right justify-center items-center text-center md:my-4'>
          <span className='w-full md:w-1/2'>
            <h1 className='font-bold lg:text-6xl md:text-5xl text-4xl  w-full'>احجز استشارتك الآن</h1>
          </span>

          <div className='font-semibold h-[2px] bg-black lg:w-2/4 md:w-2/4 mt-6' />

        </section> {/*Text*/}

        <div className='my-12 flex md:flex-row flex-col md:justify-between md:text-right justify-center items-center text-center'>
          <section className='md:w-1/2 flex flex-col justify-center '>
            <p className='lg:w-[65%]  text-3xl font-medium text-black text-opacity-[43%]'>ان كان لديك استفسار أو أية تساؤلات، لا تتردد في الاتصال بنا الآن، فريقنا جاهز لمساعدتك والاجابة عن كل أسئلتك، يمكنك كذلك حجز استشارة مدفوعة لمدة 30 دقيقة</p>
            <section className='w-full flex md:justify-start justify-center my-12'>
              <button className='ring-2 ring-black lg:w-[20%] px-4 py-4 text-2xl rounded-full font-medium text-black active:bg-black active:text-white focus:bg-black focus:text-white ml-6'>اتصل بنا</button>
              <button className='bg-black lg:w-[26%] px-6 py-4 text-2xl rounded-full font-medium text-white'> احجز استشارة ⇱</button>
            </section>
            <div className='font-semibold h-[2px] bg-black lg:w-3/4 md:w-3/4 mt-6' />

          </section> {/*Right*/}

          <section className='w-1/2'>
            <img src={blogImg4} className='h-3/4 w-full md:block hidden' alt="" />
          </section> {/*Left*/}
        </div>
      </div>
      {/*BLOG*/}


    </>
  )
}

export default Content