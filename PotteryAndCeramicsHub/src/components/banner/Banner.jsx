
import {  useTypewriter } from 'react-simple-typewriter'

// swiper js 

import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const Banner = () => {


  const [text] = useTypewriter({
    words: ['Clay & Fire: Your Pottery & Ceramics Destination'],
    loop: 1
  })

  
// swiper js 
const progressCircle = useRef(null);
const progressContent = useRef(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.current.style.setProperty('--progress', 1 - progress);
  progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
};
//  const artAndCraft =  
// {
//   image: "https://images.unsplash.com/photo-1577576223085-3eb295cd414f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG90dGVyeXxlbnwwfHwwfHx8MA%3D%3D",
//   item_name: "Decorative Pottery Bowl",
//   price: "$29.99",
//   made_date: "2023-09-25",
//   subcategory: "Home decor pottery"
// }

// const handlePost=()=>{
//     fetch('http://localhost:5000/artAndCraft',{
//       method:"POST",
//       headers:{
//         "content-type":"application/json"
//       },
//       body: JSON.stringify(artAndCraft)
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     })
//   }
  return (
    <div className=' flex flex-col-reverse lg:flex-row gap-5 bg-gradient-to-tr via-slate-100 from-red-100 to-orange-100 border rounded-lg text-black'>
      {/* carousel div  */}

   {/* slider   */}

<div className=' w-full lg:w-1/2 h-[400px] lg:max-h-[500px]'>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><div
            className="hero bg-cover h-full "
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/HkXyL34z/0bf44293-46e4-495f-b38f-db64c4375015.jpg",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 w-full">
              <div className="max-w-md z-50">
                <h1 className="mb-5 text-2xl lg:text-3xl font-bold"> Stone Serenity: The World of Stoneware</h1>
                <p className="mb-5 text-base z-50 max-w-[280px] md:max-w-md mx-auto">
                Stoneware: Let&apos;s Drive into an Timeless Beauty of Stoneware Pottery. Discover the artistry of stoneware, where tradition meets innovation.
                </p>
                <button  className="btn btn-accent"><a href="#craft">Let&apos;s Craft</a></button>
              </div>
            </div>
          </div></SwiperSlide>
          {/* swiper  2 */}
        <SwiperSlide> <div
            className="hero bg-cover h-full text-black "
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/8cx7pr7x/2f4ab6b5-7b75-4f3f-b988-f5e230201283.jpg",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content bg-white bg-opacity-50 w-full">
              <div className="max-w-md text-black">
                <h1 className="mb-5 text-2xl lg:text-3xl font-bold"> The Art of Clay Pottery</h1>
                <p className="mb-5 text-base max-w-[300px] md:max-w-md mx-auto">
                Experience the timeless beauty of clay pottery: crafted with care, fired with passion.A testament to tradition and artistry that connect us to our past .
                </p>
                <button  className="btn btn-accent"><a href="#craft">Let&apos;s Craft</a></button>
              </div>
            </div>
          </div></SwiperSlide>


          {/* swiper 3 */}
        <SwiperSlide> <div
            className="hero bg-cover h-full "
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/651j2T9H/tessa-terrus-e-Dpfd-G9vv-OA-unsplash.jpg",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content bg-black bg-opacity-40 w-full">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl lg:text-3xl font-bold">Architectural arts: Ceramics in Design</h1>
                <p className="mb-5 text-base">
                Step into a world where ceramics transcend functionality to become architectural marvels.
                </p>
                <button  className="btn btn-accent"><a href="#craft">Let&apos;s Craft</a></button>
              </div>
            </div>
          </div></SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    
</div>
      {/* text div  */}
      {/* <div onClick={handlePost} className="btn">Add</div> */}
    <div className='App flex flex-col justify-center my-10 lg:my-0 w-full lg:w-1/2 items-center'>
      
      <h1 className=' font-bold text-xl md:text-2xl lg:text-3xl bg-gradient-to-r bg-clip-text text-transparent from-purple-950 via-slate-500 to-blue-800 max-w-sm lg:max-w-lg text-center'>{text}</h1>
      <p className=' text-center mx-5 mt-5'>Welcome to our Pottery & Ceramics Hub, your online destination for all things clay and ceramic. Explore a vintage pottery and ceramics Arts of Artist and make some Pottery Like Them </p>
    </div>


    
    </div>
  );
};

export default Banner;
