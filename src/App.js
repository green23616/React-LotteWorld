import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import family from './components/Logo';
import { useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';
import 'swiper/css/scrollbar'

function App() {

  const [lang, setLang] = useState();
  
  return (
    <>
    <div className="max-w-full border bg-[#F7F7F7]">
      <div className="max-w-[1400px] h-[46px] leading-[46px] mx-auto flex justify-between font-light tracking-tighter">
        <ul className="flex mt-2">
          {
            family.map((e,i)=>{
              return (
                <li key={i} className='relative mr-5 sudo'>
                  <a href={e.href} target="_blank" className='flex items-center text-xs' rel="noreferrer">
                    <img src={e.img} alt={e.span} />
                    <span className='pl-2.5'>{e.span}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
        <div className="flex basis-[26%]">
          <ul className='flex gap-4 relative'>
            <li><a href="https://adventure.lotteworld.com/museum/main/index.do" rel='noreferrer' target='_blank' className='text-[15px]'>민속박물관</a></li>
            <li><a href="https://adventure.lotteworld.com/icerink/main/index.do" rel='noreferrer' target='_blank' className='rsudo text-[15px]'>아이스링크</a></li>
            <li><a href="" className='font-semibold text-[15px] ml-5'>Login</a></li>
            <li><a href="" className='font-semibold rsudor text-[15px]'>회원가입</a></li>
            <li><a href="" className={`${lang ? 'text-purple-500' : 'text-[#5e5c5c]'} font-semibold`}>KOR</a></li>
            <li className='absolute left-[102%]'>
              <FontAwesomeIcon icon={faCaretDown} className='text-[10px] mb-1 cursor-pointer' onClick={()=>{setLang(!lang)}}></FontAwesomeIcon>
              <div className={`${lang ? 'h-24' : 'h-0'} text-center absolute right-0 text-sm overflow-hidden transition-all duration-500 bg-white z-50`}>
                <ul className='border p-5 z-50'>
                  <li><a href='https://adventure.lotteworld.com/kor/main/index.do' style={{backgroundImage : `url('https://adventure.lotteworld.com/common/images/icon/lang_icon1.gif')`, backgroundRepeat: 'no-repeat', backgroundPosition: '18% 70%'}} className='pl-10'>KOR</a></li>
                  <li><a href='https://adventure.lotteworld.com/eng/main/index.do' style={{backgroundImage : `url('https://adventure.lotteworld.com/common/images/icon/lang_icon2.gif')`, backgroundRepeat: 'no-repeat', backgroundPosition: '18% 10%'}} className='pl-10'>ENG</a></li>
                </ul>
              </div> 
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full border-b">
      <div className="flex h-[100px] max-w-[1400px] mx-auto relative tracking-tighter">
        <h1 className="mt-[13px] ml-[-7px]">
        <a href="https://adventure.lotteworld.com/kor/main/index.do">
          <img src="https://adventure.lotteworld.com/common/images/logo.png" alt="logo"/>
        </a>
        </h1>
        <div>
          <ul className="flex font-medium text-lg">
            <li className='pl-[160px] leading-[98px]'>즐길거리</li>
            <li className='pl-16 leading-[98px]'>요금/우대혜택</li>
            <li className='pl-16 leading-[98px]'>이용가이드</li>
            <li className='pl-16 leading-[98px]'>소통서비스</li>
            <li className='pl-16 leading-[98px]'>더 알아보기</li>
            <li className='pl-16 leading-[98px]'>리뷰</li>
          </ul>
        </div>
        <div className="flex mt-8 gap-6 ml-12">
          <p>
            <a href="" className='relative'>
              <span>
                <img src="https://adventure.lotteworld.com/common/images/btn/header_srch_btn.png" alt="검색"/>
              </span>
              <span className='absolute w-12 pt-16'>검색</span>
            </a>
          </p>
          <p>
            <a href="" className='relative'>
              <span>
                <img src="https://adventure.lotteworld.com/common/images/btn/reser_btn.png" alt="예매" />
              </span>
              <span className='absolute w-12 pt-16'>예매</span>
            </a>
          </p>
          <p>
            <a href="" className='relative'>
              <span>
                <img src="https://adventure.lotteworld.com/common/images/btn/group_btn.png" alt="단체" />
              </span>
              <span className='absolute w-12 pt-16'>단체</span>
            </a>
          </p>
          <p>
            <a href="" className='relative'>
              <span>
                <img src="	https://adventure.lotteworld.com/common/images/btn/company_btn.png" alt="기업체" />
              </span>
              <span className='absolute w-14 pt-16'>기업체</span>
            </a>
          </p>
          <p>
            <a href="" className='relative'>
              <span>
                <img src="	https://adventure.lotteworld.com/common/images/btn/product_btn.png" alt="상품몰" />
              </span>
              <span className='absolute w-14 pt-16'>상품몰</span>
            </a>
          </p>
        </div>
      </div>
      <div>
          <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{clickable : true}}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <img src="https://adventure.lotteworld.com/image/2023/10/202310181200215910.jpg" alt="darkmoon" />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img src="https://adventure.lotteworld.com/image/2023/10/202310181201017940.jpg" alt="dancingmonster" />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img src="https://adventure.lotteworld.com/image/2023/10/202310061204340930.jpg" alt="metaverse" />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img src="https://adventure.lotteworld.com/image/2023/6/202306141016471810.jpg" alt="hauntedhouse" />
              </SwiperSlide>
          </Swiper>
      </div>
      </div>
      <div className="max-w-[1170px] mx-auto border-b py-6">
        <div className="flex font-extrabold text-xl gap-x-6 justify-center">
          <img src="https://adventure.lotteworld.com/common/images/icon/mainTodayArea_tit_icon.png" alt="clock"/>
          <p>오늘의 파크 운영시간</p>
          <p>10:00 - 21:00</p>
        </div></div>
      <div className="text-center max-w-[1174px] mx-auto pt-[120px] border-b">
        <p className='text-[42px]'>롯데월드<span className='font-bold'>리뷰를 부탁해!</span></p>
        <p className='text-lg text-slate-400 py-8'>로티와 함께 즐기는 생생한 영상리뷰</p>
        <div className="w-full flex gap-1 flex-wrap">
          <div className='overflow-hidden w-[290px] h-[290px] rounded-md'>
            <img src="https://thumbnail.vreview.tv/review/images/production/2023/10/18/2a40b815e91c4cc49b118f897d8b79b8/thumbnail/crop/size__256_256" alt="img1" className=' w-full h-full hover:scale-125 ease-in-out duration-500'/>
          </div>
          <div className='overflow-hidden w-[290px] h-[290px] rounded-md'>
            <img src="https://thumbnail.vreview.tv/review/images/production/2023/10/18/264a460f05f241c99b778ceb336ddd49/thumbnail/crop/size__256_256" alt="img1" className=' w-full h-full hover:scale-125 ease-in-out duration-500'/>
          </div>
          <div className='overflow-hidden w-[290px] h-[290px] rounded-md'>
            <img src="https://thumbnail.vreview.tv/review/images/production/2023/10/18/90d57f680cf04127b147f07899822abc/thumbnail/crop/size__256_256" alt="img1" className=' w-full h-full hover:scale-125 ease-in-out duration-500'/>
          </div>
          <div className='overflow-hidden w-[290px] h-[290px] rounded-md'>
            <img src="https://thumbnail.vreview.tv/review/images/production/2023/10/18/5da693b9ad074388b44ae04dfd086901/thumbnail/crop/size__256_256" alt="img1" className=' w-full h-full hover:scale-125 ease-in-out duration-500'/>
          </div>
          <div className='overflow-hidden w-[290px] h-[290px] rounded-md'>
            <img src="https://thumbnail.vreview.tv/review/images/production/2023/10/18/c5c1bac95bb24794a87810c6183d1bfa/thumbnail/crop/size__256_256" alt="img1" className=' w-full h-full hover:scale-125 ease-in-out duration-500'/>
          </div>
          <div className='overflow-hidden w-[290px] h-[290px] rounded-md'>
            <img src="https://thumbnail.vreview.tv/review/images/production/2023/10/18/1229ef74fc4c47fba402c899317d7efd/thumbnail/crop/size__256_256" alt="img1" className=' w-full h-full hover:scale-125 ease-in-out duration-500'/>
          </div>
          <div className='overflow-hidden w-[290px] h-[290px] rounded-md'>
            <video src="https://thumbnail.vreview.tv/review/videos/production/2023/10/18/94b1e51af8c24fb098cc5cd97c8a2724-original-184-3s-cropped.mp4" alt="img1" autoPlay muted loop className=' w-full h-full hover:scale-125 ease-in-out duration-500'/>
          </div>
          <div className='overflow-hidden w-[290px] h-[290px] rounded-md'>
            <video src="https://thumbnail.vreview.tv/review/videos/production/2023/10/18/142e054f7667410083bdfa2f2d4632f3-original-184-3s-cropped.mp4" alt="img1" autoPlay muted loop className=' w-full h-full hover:scale-125 ease-in-out duration-500'/>
          </div>
        </div>
        <p className='py-3 px-12 bg-[rgba(94,26,236,255)] w-56 rounded-full text-white text-lg mx-auto my-24 font-extralight'>더 많은 리뷰 보기</p>
      </div>
      <div className="text-center max-w-[1174px] mx-auto pt-[120px]">
        <p className='text-[40px] font-light'><span className='font-extrabold'>나에게 꼭 맞는 혜택 </span>알아볼까요?</p>
        <p className='text-lg text-gray-500 pt-6 pb-14'>현재 진행 중인 할인혜택을 알아보세요.</p>
        <div className="w-full flex-wrap flex">
          <div className="text-left box-border transition duration-300 border basis-1/4 pt-8 px-4 hover:border-purple-600 hover:shadow-2xl">
            <img src="https://adventure.lotteworld.com/image/2023/9/202309220420424060_231.jpg" alt="im1" />
            <span className='block text-purple-500 text-lg font-light mt-6'>33,000원</span>
            <span className='block mt-2 font-bold text-[1.4rem]'>하나카드X롯데월드 '하나'뿐인 혜택</span>
          </div>
          <div className="text-left box-border transition duration-300 border basis-1/4 pt-8 px-4 hover:border-purple-600 hover:shadow-2xl">
            <img src="https://adventure.lotteworld.com/image/2023/8/202308310944418520_231.jpg" alt="im2" className='ml-2'/>
            <span className='block text-purple-500 text-lg font-light mt-6'>31,000원</span>
            <span className='block text-left mt-2 font-bold text-[1.4rem]'>모니모니해도 모니모~</span>
          </div>
          <div className="text-left box-border transition duration-300 border basis-1/4 pt-8 px-4 hover:border-purple-600 hover:shadow-2xl">
            <img src="https://adventure.lotteworld.com/image/2023/9/202309220446001610_231.jpg" alt="im3" className='ml-4'/>
            <span className='block text-purple-500 text-lg font-light mt-6'>32,250원</span>
            <span className='block mt-2 font-bold text-[1.4rem]'>로티, 비트주세영데이!(SKT 0 day)</span>
          </div>
          <div className="text-left box-border transition duration-300 border basis-1/4 pt-8 px-4 hover:border-purple-600 hover:shadow-2xl">
            <img src="https://adventure.lotteworld.com/image/2023/10/202310060254122690_231.jpg" alt="im4" className='ml-4'/>
            <span className='block text-purple-500 text-lg font-light mt-6'>29,900원</span>
            <span className='block mt-2 font-bold text-[1.4rem]'>나는 콴다 찍고 롯데월드 콴다!</span>
          </div>
          <div className="text-left box-border transition duration-300 border basis-1/4 pt-8 px-4  hover:border-purple-600 hover:shadow-2xl">
            <img src="https://adventure.lotteworld.com/image/2023/9/202309140402534990_231.jpg" alt="im5" className='ml-4'/>
            <span className='block text-purple-500 text-lg font-light mt-6'>27,900원</span>
            <span className='block mt-2 font-bold text-[1.4rem]'>삼성카드 제휴카드 할인혜택</span>
          </div>
          <div className="text-left box-border transition duration-300 border basis-1/4 pt-8 px-4 hover:border-purple-600 hover:shadow-2xl">
            <img src="https://adventure.lotteworld.com/image/2023/9/202309190353206900_231.jpg" alt="im6" className='ml-4'/>
            <span className='block text-purple-500 text-lg font-light mt-6'>37,200원</span>
            <span className='block text-left mt-2 font-bold text-[1.4rem]'>SKT 멤버십(기본제휴)</span>
          </div>
        </div>
        <p className='py-3 px-12 bg-[rgba(94,26,236,255)] w-56 rounded-full text-white text-lg mx-auto mt-14 mb-28 font-light'>더 많은 혜택 보기</p>
      </div>
      <div className="w-full" style={{backgroundImage : `url('https://adventure.lotteworld.com/common/images/icon/mainCon2_bg_20220103.jpg')`}}>
        <div className="text-center">
          <p className='text-4xl text-white inline-block mt-28'>다양한 공연 및 퍼레이드 <span className='font-bold'>정보를 한눈에!</span></p>
          <p className='text-xl text-white mt-8 mb-28'>다양한 공연정보를 확인해보세요.</p>
          <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={6}
          spaceBetween={24}
          scrollbar={{ draggable: true }}
          >
            <SwiperSlide className='relative'>
              <img src="https://adventure.lotteworld.com/image/2023/10/202310021152592940_276.jpg" alt="로티스"/>
              <p className='text-white absolute bottom-7 text-xl ml-7'>로티스 어드벤처 퍼레이드</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309071013044450_276.jpg" alt="캐릭터" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>캐릭터 환타지아</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309250425387520_276.jpg" alt="드라큐라의 사랑" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>드라큐라의 사랑</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309040544521590_276.jpg" alt="미라클" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>미라클 애니멀 쇼</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309040550413800_276.jpg" alt="댄싱몬스터" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>댄싱 몬스터 (기상악화시 공<br/>연휴연)</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/8/202308281223366870_276.jpg" alt="샤롯데 밴드쇼" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>샤롯데 밴드쇼</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309070211536060_276.jpg" alt="스페셜 밴드쇼" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>스페셜 밴드 쇼</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309070208296340_276.jpg" alt="빅 밴드쇼" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>빅 밴드 쇼</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2022/12/202212120525069800_276.jpg" alt="로티 프렌즈" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>로티 프렌즈의 보물섬</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2020/8/202008050444485270_276.jpg" alt="매직캐슬" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>매직캐슬 라이츠업</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309040251280610_276.jpg" alt="미라클" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>미라클 나이트</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="	https://adventure.lotteworld.com/image/2023/3/202303091157477200_276.png" alt="포토" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>캐릭터 포토타임</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309070215471690_276.jpg" alt="라이브" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>캐릭터 라이브 포토타임</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/3/202303091200381280_276.png" alt="연기자" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>연기자 포토타임</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/9/202309040938296090_276.jpg" alt="모던" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>모던 팝 밴드쇼</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2022/12/202212010529048180_276.jpg" alt="키디밴드" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>키디밴드</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://adventure.lotteworld.com/image/2023/3/202303091212082590_276.jpg" alt="딕시밴드" />
              <p className='text-white absolute bottom-7 text-xl ml-7'>딕시밴드</p>
            </SwiperSlide>
          </Swiper>
          <div className="pt-16 pb-28">
            <p className='inline-block py-3 px-12 bg-white w-56 rounded-full text-purple-600 text-lg mx-auto font-light mr-4'>더 많은 공연 보기</p>
            <p className='border-2 inline-block py-3 px-12 bg-transparent w-58 rounded-full text-white text-lg mx-auto font-light'>참여 프로그램 보기</p>
          </div>
        </div>
      </div>
      <div className="max-w-full flex-wrap" style={{backgroundImage: `url('https://adventure.lotteworld.com/common/images/icon/mainCon3_bg.jpg')`}}>
        <p className='text-4xl text-center pt-32'>재미있고 즐거운<span className='font-bold'>다양한 어트랙션!</span></p>
        <div className="py-12 text-center">
          <p className='bg-transparent border-2 border-gray-300 inline-block py-3 px-5 rounded-full text-gray-500'>아이와 함께</p>
          <p className='bg-transparent border-2 border-gray-300 inline-block py-3 px-5 rounded-full text-gray-500'>야외에서 신나게</p>
          <p className='bg-transparent border-2 border-gray-300 inline-block py-3 px-5 rounded-full text-gray-500'>실내에서 쾌적하게</p>
        </div>
        <div className="max-w-[1170px] mx-auto">
          <ul className='flex gap-5 flex-wrap'>
            <li className='w-[576px]'>
              <a href="https://adventure.lotteworld.com/kor/enjoy/attrctn/view.do?detailsKey=5797" className='inline-block text-black bg-white hover:bg-[#560ce2]  hover:text-white hover:shadow-2xl transition-all duration-100'>
              <img src="https://adventure.lotteworld.com/image/2020/10/202010231014353460.jpg" alt="언더씨킹덤" />
              <span className='inline-block p-4'>
                <span className='block font-bold text-2xl mb-2'>언더씨킹덤</span>
                <span className='font-light'>아이와 함께 떠나는 해저왕국 탐험!</span>
              </span>
              </a>
            </li>
            <li className='w-[276px]'>
              <a href="https://adventure.lotteworld.com/kor/enjoy/attrctn/view.do?detailsKey=5797" className='inline-block bg-white hover:bg-[#560ce2]  hover:text-white text-black hover:shadow-2xl transition-all duration-100'>
              <img src="https://adventure.lotteworld.com/image/2022/4/202204200401582710.jpg" alt="유레카" />
              <span className='inline-block p-4'>
                <span className='block font-bold text-2xl mb-2'>유레카</span>
                <span className='font-light'>높이높이 날아올라요~</span>
              </span>
              </a>
            </li>
            <li className='w-[276px]'>
              <a href="https://adventure.lotteworld.com/kor/enjoy/attrctn/view.do?detailsKey=5797" className='inline-block bg-white hover:bg-[#560ce2]  hover:text-white text-black hover:shadow-2xl transition-all duration-100'>
              <img src="https://adventure.lotteworld.com/image/2020/6/202006241107064920.jpg" alt="점핑피쉬" />
              <span className='inline-block p-4'>
                <span className='block font-bold text-2xl mb-2'>점핑피쉬</span>
                <span className='font-light'>신나는 해저여행~</span>
              </span>
              </a>
            </li>
            <li className='w-[276px]'>
              <a href="https://adventure.lotteworld.com/kor/enjoy/attrctn/view.do?detailsKey=5797" className='inline-block bg-white hover:bg-[#560ce2]  hover:text-white text-black hover:shadow-2xl transition-all duration-100'>
              <img src="https://adventure.lotteworld.com/image/2018/6/20180619061904008.jpg" alt="스윙팡팡" />
              <span className='inline-block p-4'>
                <span className='block font-bold text-2xl mb-2'>스윙팡팡</span>
                <span className='font-light'>로티와 친구들이 함께 팡팡~</span>
              </span>
              </a>
            </li>
            <li className='w-[276px]'>
              <a href="https://adventure.lotteworld.com/kor/enjoy/attrctn/view.do?detailsKey=5797" className='inline-block bg-white hover:bg-[#560ce2]  hover:text-white text-black hover:shadow-2xl transition-all duration-100'>
              <img src="https://adventure.lotteworld.com/image/2023/5/202305080901224810.jpg" alt="매직붕붕카" className='h-[246px] w-[275px]'/>
              <span className='inline-block p-4'>
                <span className='block font-bold text-2xl mb-2'>매직붕붕카</span>
                <span className='font-light'>친구들과 신나게 경주해보아요!</span>
              </span>
              </a>
            </li>
            <li className='w-[576px]'>
              <a href="https://adventure.lotteworld.com/kor/enjoy/attrctn/view.do?detailsKey=5797" className='inline-block bg-white hover:bg-[#560ce2]  hover:text-white text-black hover:shadow-2xl transition-all duration-100'>
              <img src="https://adventure.lotteworld.com/image/2020/7/202007241119261500.jpg" alt="키즈토리아" />
              <span className='inline-block p-4'>
                <span className='block font-bold text-2xl mb-2'>키즈토리아</span>
                <span className='font-light'>마음껏 즐길수 있는 거대한 동화속 세상</span>
              </span>
              </a>
            </li>
          </ul>
          <div className="pt-12 text-center pb-28">
            <p className='bg-[#560ce2] inline-block py-3 px-10 rounded-full text-white text-lg mr-3'>더 많은 어트랙션 보기</p>
            <p className='bg-transparent border-2 border-violet-500 inline-block py-3 px-10 rounded-full text-violet-500 text-lg'>운휴 정보 보러가기</p>
          </div>
        </div>
      </div>
      <div className="w-full border-b">
        <div className="max-w-[1170px] pt-28 mx-auto">
          <div className="text-center border-b">
            <p className='text-4xl'>롯데월드를 좀 더<br/><span className='font-bold'>특별하게 즐기고 싶다면!</span></p>
            <p className='pt-8 pb-16 text-lg font-extralight'>오늘 롯데월드의 소식을 만나보세요.</p>
          </div>
          <div className=''>
            <p className='text-xl font-bold py-8'>특별한 경험</p>
            <ul className='flex gap-x-6'>
              <li className='hover:text-[#560ce2] font-extralight hover:font-bold group'>
                <img src="https://adventure.lotteworld.com/common/images/icon/mainCon4_img_hotel.jpg" alt="로티로티룸" className='group-hover:shadow-2xl transition duration-300' />
                <p className='text-xl pt-7 transition duration-300'>롯데호텔 월드 로티로티룸</p>
              </li>
              <li className='hover:text-[#560ce2] font-extralight hover:font-bold group'>
                <img src="https://adventure.lotteworld.com/common/images/icon/mainCon4_img3_20211231.jpg" alt="샤론캣" className='group-hover:shadow-2xl transition duration-300'/>
                <p className='text-xl pt-7 transition duration-300'>샤론캣 프리미엄라운지</p>
              </li>
              <li className='hover:text-[#560ce2] font-extralight hover:font-bold group'>
                <img src="https://adventure.lotteworld.com/common/images/icon/mainCon4_img2.jpg" alt="선물권" className='group-hover:shadow-2xl transition duration-300'/>
                <p className='text-xl pt-7 transition duration-300'>롯데월드 어드벤처 선물권</p>
              </li>
              <li className='hover:text-[#560ce2] font-extralight hover:font-bold group'>
                <img src="https://adventure.lotteworld.com/common/images/icon/mainCon4_img1.jpg" alt="연간이용안내" className='group-hover:shadow-2xl transition duration-300'/>
                <p className='text-xl pt-7 transition duration-300'>연간이용안내</p>
              </li>
            </ul>
            <div className="flex mt-12 mb-32 max-w-[1170px] justify-between">
              <div className="relative p-9 basis-[49%] border">
                <p className='text-[21px] font-extrabold'>롯데월드 소식</p>
                <ul className='mt-4 text-lg font-light'>
                  <li className='my-2'>
                    <a href="https://adventure.lotteworld.com/kor/communication/notice/view.do?pageIndex=1&detailsKey=538&ancmCd=&q=" className='tracking-tighter'>
                      <p>풍선비행 탑승예약제 안내</p>
                      <p className='absolute right-11 text-base'>2023.10.18</p>
                    </a>
                  </li>
                  <li className='my-2'>
                    <a href="https://adventure.lotteworld.com/kor/communication/notice/view.do?pageIndex=1&detailsKey=538&ancmCd=&q=" className='tracking-tighter'>
                      <p>키즈토리아 탑승예약제 안내</p>
                      <p className='absolute right-11 text-base'>2023.09.25</p>
                    </a>
                  </li>
                  <li className='my-2'>
                    <a href="https://adventure.lotteworld.com/kor/communication/notice/view.do?pageIndex=1&detailsKey=538&ancmCd=&q=" className='tracking-tighter'>
                      <p>다크 문 스탬 투어 이벤트</p>
                      <p className='absolute right-11 text-base'>2023.09.29</p>
                    </a>
                  </li>
                  <li className='my-2'>
                    <a href="https://adventure.lotteworld.com/kor/communication/notice/view.do?pageIndex=1&detailsKey=538&ancmCd=&q=" className='tracking-tighter'>
                      <p>싱글라이더 제도 운영 안내</p>
                      <p className='absolute right-11 text-base'>2023.07.19</p>
                    </a>
                  </li>
                </ul>
                <a href="https://adventure.lotteworld.com/kor/communication/notice/list.do" className='absolute top-10 right-10 pr-[30px] font-extralight text-sm' style={{backgroundImage: `url('https://adventure.lotteworld.com/common/images/icon/main_more_icon.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: '98%'}}>더보기</a>
              </div>
              <div className="">
                <a href="https://adventure.lotteworld.com/kor/usage-guide/service/convenient-facilities/app/contentsid/390/index.do">
                  <img src="https://adventure.lotteworld.com/image/2022/9/202209070321308030.jpg" alt="aa1" className='w-full'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4">
        <ul className="max-w-[1170px] mx-auto border-b flex justify-between">
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do">롯데월드 소개</a>
          </li>
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do">ESG</a>
          </li>
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do">기업 제휴 및 입점 문의</a>
          </li>
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do">이용약관</a>
          </li>
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do" className='inline-block text-red-500'>개인정보처리방침</a>
          </li>
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do">이메일무단수집거부</a>
          </li>
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do">인재채용</a>
          </li>
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do">사이트맵</a>
          </li>
          <li className='mt-8 mb-7 font-extralight'>
            <a href="https://adventure.lotteworld.com/kor/lotteworld/introduce/esg/contentsid/711/index.do">㈜호텔롯데 소개</a>
          </li>
        </ul>
        <div className="flex max-w-[1170px] mx-auto mt-7 mb-24 relative">
          <p>
            <img src="https://adventure.lotteworld.com/common/images/icon/footer_logo.png" alt="lotte"/>
          </p>
          <div className="basis-[58%] px-16 font-extralight text-[15px] tracking-tighter">
            <p className='inline-block mr-4'>서울특별시 송파구 올림픽로 240 호텔롯데 롯데월드</p>
            <p className='inline-block mr-4'>대표자 : 최홍훈</p>
            <p className='inline-block mr-4'>사업자등록번호 : 219-85-00014</p>     
            <p className='inline-block mr-4'>통신판매업신고번호 : 송파 제5513호</p>
            <p className='inline-block mr-4'>전화 : 1661-2000</p>
            <p className='py-6 text-[13px] text-gray-500'>COPYRIGHT 2018 LOTTEWORLD. ALL RIGHTS RESERVED.</p>
            <div className="text-xs flex">
              <a href="" style={{backgroundImage : `url('	https://adventure.lotteworld.com/common/images/icon/isms_icon.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%'}} className='pl-14 max-w-[300px] flex-wrap h-9'>
                <p className='inline-block leading-3'>
                  <p className='inline-block mr-4'>인증범위</p>
                  <p className='inline-block'>온라인 예매 서비스 운영(롯데월드)</p>
                </p>
                <p className='inline-block'>
                  <p className='inline-block mr-4'>유효기간</p>
                  <p className='inline-block'>2020.11.18~2023.11.17</p>
                </p>
              </a>
              <a href="" style={{backgroundImage : `url('https://adventure.lotteworld.com/common/images/icon/isms_icon2.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%'}} className='h-10'>
                <p className='pl-16'>한국서비스대상 명예의전당</p>
              </a>
            </div>
            
          </div>
          <div className="basis-[25%] flex gap-x-2 absolute top-1 right-1">
            <a href="">
             <img src="https://adventure.lotteworld.com/common/images/btn/sns_btn1.png" alt="sns1" />
            </a>
            <a href="">
             <img src="https://adventure.lotteworld.com/common/images/btn/sns_btn2.png" alt="sns2" />
            </a>
            <a href="">
             <img src="https://adventure.lotteworld.com/common/images/btn/sns_btn3.png" alt="sns3" />
            </a>
            <button style={{backgroundImage : `url('https://adventure.lotteworld.com/common/images/icon/sel_icon.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: '90% 50%'}} className='ml-8 border pl-4 pr-20 py-[11px] font-extralight text-[15px] '>계열사 관련 사이트</button>
            <img src="https://adventure.lotteworld.com/common/images/img_lotthotel_pc.jpg" alt="im1" className='absolute top-[76px] right-0'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
