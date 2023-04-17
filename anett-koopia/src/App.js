import './App.css';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  const updatePosition = () => {
    setScrollPosition(window.pageYOffset);
    console.log('Scroll pos: ', scrollPosition);

    if (scrollPosition > 1) {
      document.getElementById('header').classList.add('invert', 'bg-black');
    } else if (scrollPosition < 1) {
      document.getElementById('header').classList.remove('invert', 'bg-black');
    }
  };

  window.addEventListener('scroll', updatePosition);

  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div
      id='content'
      className='w-full h-full m-0 p-0 overflow-x-hidden overflow-y-auto bg-white font-poppins text-[15px] font-light text-[#272d30]'
    >
      <div
        id='header'
        className={'${scrollPosition > 0 ? "invert" : ""} block w-full fixed top-0 left-0 right-0 z-[999] h-[60px] lg:h-20'}
      >
        <div
          id='header-content'
          className='flex justify-between items-center w-full h-[60px] lg:h-[80px] px-[20px] lg:px-[30px] my-0 mx-auto'
        >
          <div id='logo' className='flex-[0_0_auto] text-left py-[7px] lg:py-[5px]'>
            <a href='/'>
              {scrollPosition < 1 && (
                <img
                  className='block h-[46px] lg:h-[70px]'
                  src='https://www.anettkontaveit.ee/assets/anett-logo-white.svg'
                ></img>
              )}
              {scrollPosition > 1 && (
                <img
                  className='block h-[46px] lg:h-[70px] invert'
                  src='https://www.anettkontaveit.ee/assets/anett-logo-black.svg'
                ></img>
              )}
            </a>
          </div>

          <div
            id='wta-ranking'
            className='flex-auto lg:flex-[0_0_auto] text-left py-[8px] lg:py-[18px] pb-2.5 font-zonaBold text-[14px] leading-[14px] lg:text-[18px] lg:leading-[18px] font-normal text-white gap-[2px]'
          >
            WTA
            <span className='font-black font-zonaBold leading-[2px] pl-[2px]'>70</span>
          </div>
          <div
            id='menu'
            className='hidden lg:block flex-auto text-right font-zonaBold font-semibold text-[13px] leading-[13px] tracking-[1px]'
          >
            <ul className='list-none text-white'>
              <li className='relative inline-block py-[7px]'>
                <a className='text-right hover:underline underline-offset-8' href='/anettist'>
                  Anettist
                </a>
              </li>

              <li className='ml-2.5 relative inline-block py-[7px]'>
                <a className='text-right hover:underline underline-offset-8' href='/anetti-lood'>
                  Anetti lood
                </a>
              </li>

              <li className='ml-2.5 relative inline-block py-[7px]'>
                <a className='text-right hover:underline underline-offset-8' href='/tulemused'>
                  Tulemused
                </a>
              </li>

              <li className='ml-2.5 relative inline-block py-[7px]'>
                <a className='text-right hover:underline underline-offset-8' href='/turniirid'>
                  Järgmised turniirid
                </a>
              </li>

              <li className='ml-2.5 relative inline-block py-[7px]'>
                <a className='text-right hover:underline underline-offset-8' href='/sponsorid'>
                  Sponsorid
                </a>
              </li>

              <li className='ml-2.5 relative inline-block py-[7px]'>
                <a className='text-right hover:underline underline-offset-8' href='/kontakt'>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div id="menu-mobile" className="lg:hidden flex-[0_0_auto] text-right">
            <div id="menutoggler-mobile-wrapper">
              <div id="menutoggler" className="z-[114]"><a onclick="Navi.toggleMobileNavi()" className="block border border-white border-solid rounded-[50%] text-center text-white w-[30px] h-[30px] pt-[9px]"><div id="menu-icon" className="relative my-0 mx-auto rotate-0 transition-all w-4 h-4">
                <span className="top-0 block absolute h-[1px] w-full bg-white rounded-[2px] rotate-0 transition-all"></span>
                <span className="top-[4px] block absolute h-[1px] w-full bg-white rounded-[2px] rotate-0 transition-all"></span>
                <span className="top-[4px] block absolute h-[1px] w-full bg-white rounded-[2px] rotate-0 transition-all"></span>
                <span className="top-2 block absolute h-[1px] w-full bg-white rounded-[2px] rotate-0 transition-all"></span>
              </div></a></div>
            </div>
          </div>
          <div id='lang' className='flex-[0_0_auto] pl-5'>
            <a
              className='text-[11px] leading-[11px] py-[7px] px-[15px] border border-solid rounded-[100px] bg-[0_0] text-white hover:bg-white hover:text-black transition-all'
              href='#'
            >
              IN ENGLISH
            </a>
          </div>
        </div>
      </div>

      <div
        id='hero-desktop'
        className="absolute top-0 left-0 right-0 h-[600px] lg:h-[700px] block bg-[#fbfbfb] lg:bg-[#004ac0] bg-[url('https://www.anettkontaveit.ee/images/main-bg-mobile.png')] lg:bg-[url('https://www.anettkontaveit.ee/images/main-bg.png')] bg-bottom lg:bg-top bg-no-repeat bg-[100%_auto] lg:bg-cover z-[140]"
      >
        <div id='hero-content' className='relative w-full h-full'>
          <div
            id='hero-text'
            className='absolute left-5 right-5 lg:left-[40px] lg:right-[55%] bottom-[55%] lg:bottom-0 lg:top-1/2 z-[143] lg:-translate-y-1/2 text-white text-center'
          >
            <h1 className='font-stainy text-[100px] lg:text-[160px] font-normal -rotate-[8deg] mb-0 lg:mb-2.5 -ml-5 lg:ml-0'>Anett</h1>
            <div
              id='bottom'
              className='w-[250px] lg:w-[330px] my-0 mx-auto border-t-2 border-white border-solid p-5 text-center font-zonaBold text-[18px] leading-[18px] font-normal tracking-[1px]'
            >
              Anett Kontaveit
              <div id='wta' className='pt-2.5 text-[36px] leading-[36px] tracking-[1px]'>
                WTA<span className='inline-block ml-[5px] font-black tracking-[2px]'>70</span>
              </div>
            </div>
          </div>
          <div
            id='hero-image'
            className="absolute z-[141] lg:z-[140] top-1/2 lg:top-[90px] left-0 lg:left-[30%] right-0 lg:right-[30px] bottom-0 bg-[url('https://www.anettkontaveit.ee/images/anett-kontaveit-main.png')] bg-top bg-no-repeat bg-[auto_100%] lg:bg-contain"
          ></div>
          <div
            id='hero-diagonal'
            className='lg:absolute lg:z-[141] lg:top-[655px] lg:-left-[100px] lg:-right-[100px] lg:h-[200px] lg:bg-[#fbfbfb] lg:-rotate-3'
          ></div>
        </div>
        <div
          id='social-links'
          className='hidden lg:block -right-[50px] top-[300px] absolute z-[142] rotate-90 uppercase font-zonaBold text-[13px] leading-[13px] font-normal'
        >
          <a
            className='inline-block mx-2.5 pb-[7px] text-white hover:underline'
            target='_blank'
            href='https://twitter.com/AnettKontaveit'
          >
            Twitter
          </a>
          <a
            className='inline-block mx-2.5 pb-[7px] text-white hover:underline'
            target='_blank'
            href='https://www.instagram.com/anett_kontaveit/?hl=en'
          >
            Instagram
          </a>
        </div>
      </div>

      <div
        id='frontpage'
        className='top-[600px] lg:top-[700px] absolute left-0 right-0 z-[200] flex flex-col justify-center bg-[#fbfbfb]'
      >
        <section
          id='sponsors'
          className='-rotate-3 -mx-[100px] z-[220] relative -top-[45px] bg-white'
        >
          <div id='diagonal-content' className='rotate-3 mx-[100px]'>
            <div
              id='sponsors-content'
              className='w-[100vw] max-w-[1160px] my-0 mx-auto py-[45px] px-[30px]'
            >
              <h5 className='font-zonaBold text-[13px] leading-[13px] font-normal text-center uppercase tracking-[1px] text-[#272d30] mb-[15px]'>
                Sponsorid
              </h5>
              <div id="sponsor-logos-desktop" className='hidden lg:flex justify-center items-center'>
                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-lacoste.png'
                      alt='Lacoste'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-tallink.png'
                      alt='Tallink'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-telegraaf.png'
                      alt='Hotell Telegraaf'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-porsche.png'
                      alt='Porsche'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsors-zenith.png'
                      alt='Zenith'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-babolat.png'
                      alt='Babolat'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-alexela.png'
                      alt='Alexela'
                      className='w-full'
                    ></img>
                  </a>
                </div>
              </div>


              <div id='sponsors-mobile' className='flex md:hidden'>
                <Carousel autoPlay="true" interval={1500} infiniteLoop={true} showStatus={false} showIndicators={false}>
                  <div class='logo'>
                    <a href='/sponsorid'>
                      <img
                        src='//media.voog.com/0000/0041/3736/photos/sponsorid-lacoste.png'
                        alt='Lacoste'
                      ></img>
                    </a>
                  </div>

                  <div class='logo'>
                    <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-tallink.png'
                      alt='Tallink'
                    ></img>
                    </a>
                  </div>

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-telegraaf.png'
                      alt='Hotell Telegraaf'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-porsche.png'
                      alt='Porsche'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsors-zenith.png'
                      alt='Zenith'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-babolat.png'
                      alt='Babolat'
                      className='w-full'
                    ></img>
                  </a>
                </div>

                <div id='logo' className='w-full max-w-[110px] mx-5'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-alexela.png'
                      alt='Alexela'
                      className='w-full'
                    ></img>
                  </a>
                </div>
                </Carousel>
                
              </div>
            </div>
          </div>
        </section>

        <div id='frontpage-content' className='w-full'>
          <div
            id='frontpage-content-about'
            className='w-full max-w-[1160px] px-8 py-14 flex flex-row justify-between mx-auto'
          >
            <div id='about' className='flex flex-col w-1/2'>
              <h2 className='text-5xl text-blue-700 mb-9 font-zonaBold'>Anettist</h2>
              <p>
                Alustanud ema Ülle Milk’i käe all kuueaastasena treeninguid, jõudsin juba kolm
                aastat hiljem, oma teisel võistlusaastal esimese tiitlivõiduni. Eesti noorte
                meistrivõistluste finaalis (T-10) alistasin ligi 2,5 tundi kestnud kolmesetilises
                raskes heitluses oma tolleaegse peamise koduse konkurendi Mari Kalma 4:6;6:4;6:2.
                <br />
                <br />
              </p>
              <p>
                Oli aasta 2004 ja Püünsi kooli 9aastase aktiivse koolitüdrukuna olin lisaks
                tennisetrennidele jaganud oma aega ka koorilaulule ja rahvatantsule. Nüüd jõudis
                kätte hetk, kus tantsutrennid said tasutud esinemisega 17. Üldtantsupeol – peab ju
                iga õige eestlane vähemalt ühel laulu- või tantsupeol kaasa lööma.
                <br />
                <br />
              </p>
              <a
                className="flex w-2/5 bg-[url('https://www.anettkontaveit.ee/assets/white-arrow-right.svg')] bg-no-repeat bg-[90%]  font-poppins font-normal px-8 py-4 justify-center items-center border border-solid rounded-full border-gray text-sm hover:bg-blue-700 hover:text-white hover:w-[42%] transition-all"
                href='#'
              >
                Loe täpsemalt
              </a>
            </div>
            <div id='facts' className='flex pl-8 2-1/2'>
              <div id='frontpage-facts-desktop' className='hidden lg:flex items-stretch flex-wrap'>
                <div className="flex flex-col relative w-1/2 p-6 justify-center items-center after:content-[''] after:bg-[#e8e8e8] after:w-[1px] after:absolute after:top-4 after:bottom-4 after:right-0 ">
                  <img
                    src='//media.voog.com/0000/0041/3736/photos/faktid-eesti.svg'
                    alt='Elukoht'
                    className='h-[80px] py-2'
                  />
                  <h5 className='text-center'>Elukoht</h5>
                  <h4 className='text-center'>Viimsi vald, Harjumaa, Eesti</h4>
                </div>

                <div className='flex flex-col relative w-1/2 p-6 justify-center items-center'>
                  <img
                    src='//media.voog.com/0000/0041/3736/photos/faktid-mangib.svg'
                    alt='Mängib'
                    className='h-[80px] py-2'
                  />
                  <h5 className='text-center'>Mängib</h5>
                  <h4 className='text-center'>paremakäeline (tagantkäsi kahe käega)</h4>
                </div>

                <div className="flex flex-col relative w-1/2 p-6 justify-center items-center after:content-[''] after:bg-[#e8e8e8] after:w-[1px] after:absolute after:top-4 after:bottom-4 after:right-0 berfore:content-[''] before:bg-[#e8e8e8] before:h-[1px] before:absolute before:top-0 before:left-4 before:right-4">
                  <img
                    src='//media.voog.com/0000/0041/3736/photos/faktid-reketid.svg'
                    alt='Reketid'
                    className='h-[80px] py-2'
                  />
                  <h5 className='text-center'>Reketid</h5>
                  <h4 className='text-center'>Babolat</h4>
                </div>

                <div className="flex flex-col relative w-1/2 p-6 justify-center items-center berfore:content-[''] before:bg-[#e8e8e8] before:h-[1px] before:absolute before:top-0 before:left-4 before:right-4">
                  <img
                    src='//media.voog.com/0000/0041/3736/photos/faktid-riietus.svg'
                    alt='Riietus'
                    className='h-[80px] py-2'
                  />
                  <h5 className='text-center'>Riietus</h5>
                  <h4 className='text-center'>Lacoste</h4>
                </div>
              </div>
              <div id='frontpage-facts-mobile' className='flex lg:hidden'>
                <div class='fact'>
                  <img
                    src='//media.voog.com/0000/0041/3736/photos/faktid-eesti.svg'
                    alt='Elukoht'
                  />
                  <h5 class='text-center'>Elukoht</h5>
                  <h4 class='text-center'>Viimsi vald, Harjumaa, Eesti</h4>
                </div>

                <div class='fact'>
                  <img
                    src='//media.voog.com/0000/0041/3736/photos/faktid-mangib.svg'
                    alt='Mängib'
                  />
                  <h5 class='text-center'>Mängib</h5>
                  <h4 class='text-center'>paremakäeline (tagantkäsi kahe käega)</h4>
                </div>

                <div class='fact'>
                  <img
                    src='//media.voog.com/0000/0041/3736/photos/faktid-reketid.svg'
                    alt='Reketid'
                  />
                  <h5 class='text-center'>Reketid</h5>
                  <h4 class='text-center'>Babolat</h4>
                </div>

                <div class='fact'>
                  <img
                    src='//media.voog.com/0000/0041/3736/photos/faktid-riietus.svg'
                    alt='Riietus'
                  />
                  <h5 class='text-center'>Riietus</h5>
                  <h4 class='text-center'>Lacoste</h4>
                </div>
              </div>
            </div>
          </div>
          <div id='frontpage-content-blog' className='mx-auto w-full max-w-[1160px] bg-gray-50'>
            <h2 className='text-5xl text-blue-700 font-zonaBold text-center mt-8'>Anetti lood</h2>
            {/* <div class="blog-list" className='flex flex-wrap justify-between items-center text-center box-border'>
                <div className='w-1/3 max-w-xs '>
                  <div class="item-image"><a href="/"><img src="//www.anettkontaveit.ee/photos/60236FAF-461A-49DB-8AA7-D08C9881005A_1_201_a_block.jpeg" alt="Lacoste"></img></a></div>
                  <div class="item-content" className=''>
                    <h3>
                    <a className="text-2xl text-bold font-zonaBold text-black font-normal hover:text-blue-700" href='/'>Aneti uus treener on kogenenud sakslane</a>
                    </h3>
                  </div>

                </div>

              </div> */}

            <section className='flex flex-col justify-center bg-gray-50 py-8 px-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1'>
                <div className=' p-4'>
                  <img
                    src='//www.anettkontaveit.ee/photos/60236FAF-461A-49DB-8AA7-D08C9881005A_1_201_a_block.jpeg'
                    alt='Anetti lugu 1'
                    className='w-full h-48 object-cover mb-4'
                  />
                  <a
                    className='flex mb-3 pl-3 text-2xl text-bold font-zonaBold text-black font-normal hover:text-blue-700'
                    href='/'
                  >
                    Aneti uus treener on kogenenud sakslane
                  </a>
                  <p className='pl-3'>
                    Eesti esireket, WTA maailma edetabelis kõrgele teisele kohale tõusnud Anett
                    Kontaveit alustab koostööd kogenud Saksa treeneri Torben Beltziga.
                  </p>
                  <div id='readmore' className='flex'>
                    <a
                      href='#'
                      className="pl-3 pr-4 py-2 bg-[url('https://www.anettkontaveit.ee/assets/dark-arrow.svg')] bg-no-repeat bg-[100%] font-normal text-sm text-gray-600 hover:pr-6 hover:text-blue-700 transition-all"
                    >
                      Loe lähemalt
                    </a>
                  </div>
                </div>
                <div className='p-4'>
                  <img
                    src='//www.anettkontaveit.ee/photos/anett%20kontaveit_block.jpeg'
                    alt='Anetti lugu 2'
                    className='w-full h-48 object-cover mb-4'
                  />
                  <a
                    className='flex mb-3 pl-3 text-2xl text-bold font-zonaBold text-black font-normal hover:text-blue-700'
                    href='/'
                  >
                    Karjääri parima hooaja teinud Anett sihib slämmivõitu
                  </a>
                  <p className='pl-3'>
                    Eesti esireketil Anett Kontaveidil on selja taga karjääri edukaim hooaeg, mille
                    käigus kirjutas ta mitmel korral ümber Eesti tenniseajalugu. Uuele aastale läheb
                    ta vastu uute sihtidega.
                  </p>
                  <div id='readmore' className='flex'>
                    <a
                      href='#'
                      className="pl-3 pr-4 py-2 bg-[url('https://www.anettkontaveit.ee/assets/dark-arrow.svg')] bg-no-repeat bg-[100%] font-normal text-sm text-gray-600 hover:pr-6 hover:text-blue-700 transition-all"
                    >
                      Loe lähemalt
                    </a>
                  </div>
                </div>
                <div className='p-4'>
                  <img
                    src='//www.anettkontaveit.ee/photos/anett%20kontaveit_block.jpeg'
                    alt='Anetti lugu 3'
                    className='w-full h-48 object-cover mb-4'
                  />
                  <a
                    className='flex mb-3 pl-3 text-2xl text-bold font-zonaBold text-black font-normal hover:text-blue-700'
                    href='/'
                  >
                    Anett Kontaveit ja Nigel Sears otsustasid koostöö lõpetada
                  </a>
                  <p className='pl-3'>
                    Eesti esinumber Anett Kontaveit ja tema senine treener Nigel Sears otsustasid
                    ligi kolm aastat kestnud koostööle joone alla tõmmata.
                  </p>
                  <div id='readmore' className='flex'>
                    <a
                      href='#'
                      className="pl-3 pr-4 py-2 bg-[url('https://www.anettkontaveit.ee/assets/dark-arrow.svg')] bg-no-repeat bg-[100%] font-normal text-sm text-gray-600 hover:pr-6 hover:text-blue-700 transition-all"
                    >
                      Loe lähemalt
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <a
                  className="flex bg-[url('https://www.anettkontaveit.ee/assets/white-arrow-right.svg')] bg-no-repeat bg-[90%]  font-poppins font-normal px-8 py-4 justify-center items-center border border-solid rounded-full border-gray text-sm hover:bg-blue-700 hover:text-white hover:px-10 transition-all"
                  href='#'
                >
                  Vaata kõiki
                </a>
              </div>
            </section>
          </div>

          <div
            id='frontpage-content-results'
            className='lg:flex lg:justify-between lg:items-center w-full px-0 lg:pt-14 lg:pb-7 pt-[60px] pb-[30px] font-poppins'
          >
            <div
              id='results-image'
              className="lg:w-1/2 bg-[url('https://www.anettkontaveit.ee/images/tulemused-bg.jpg')] lg:bg-no-repeat lg:bg-right bg-[auto_100%] 
              lg:h-[800px] bg bg-top-left h-[300px] bg-no-repeat"
            ></div>
            <div id='results-content' className='lg:w-1/2 lg:pt-[100px] lg:self-start pt-[10px]'>
              <div id='results' className='w-full lg:max-w-[580px] lg:pr-7 pr-[20px] pl-[20px] mt-0 mr-auto mb-0 ml-[5wv]'>
                <h2 className='text-5xl text-blue-700 font-zonaBold mb-8 text-left'>Tulemused</h2>
                <div id='results-wrapper'>
                  <div
                    id='tournament-4925993'
                    className='border-t border-b border-[rgba(0,0,0,.06)] border-solid'
                  >
                    <div id='results-info' className='flex justify-between items-center py-6'>
                      <div
                        id='results-info-date'
                        className='flex-[0_0_auto] min-w-[85px] text-lg font-zonaBold'
                      >
                        <b className='font-semibold'>jaan</b>
                        <br />
                        <p className='font-zonaLight py-2'>2023</p>
                      </div>
                      <div
                        id='results-info-tournament'
                        className='flex-auto font-zonaLight text-lg font-normal'
                      >
                        <div>Australian Open, Melbourne, AUS</div>
                        <small className='text-sm mt-1'>Grand Slam</small>
                      </div>
                    </div>

                    <div id='results-matches' className='font-light'>
                      <div id='result-matches-block'>
                        <div
                          id='result-matches-match'
                          className='flex justify-between items-center text-[15px] font-poppins py-2.5 border-t border-[rgba(0,0,0,.06)] border-solid'
                        >
                          <div
                            id='result-matches-match-round'
                            className='flex-[0_0_auto] pr-2.5 min-w-[90px]'
                          >
                            Last 128
                          </div>
                          <div id='result-matches-match-opponent' className='flex-auto'>
                            Julia Grabher <span style={{ color: '#717171' }}>(AUT)</span>
                          </div>
                          <div
                            id='result-matches-match-score'
                            className='flex-[0_0_auto] font-semibold pl-5'
                          >
                            6-2 6-3
                          </div>
                        </div>
                        <div
                          id='result-matches-match'
                          className='flex justify-between items-center text-[15px] font-poppins py-2.5 border-t border-[rgba(0,0,0,.06)] border-solid'
                        >
                          <div
                            id='result-matches-match-round'
                            className='flex-[0_0_auto] pr-2.5 min-w-[90px]'
                          >
                            Last 64
                          </div>
                          <div id='result-matches-match-opponent' className='flex-auto'>
                            Magda Linette <span style={{ color: '#717171' }}>(POL)</span>
                          </div>
                          <div
                            id='result-matches-match-score'
                            className='flex-[0_0_auto] font-semibold pl-5'
                          >
                            6-3 3-6 4-6
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='more'>
                  <a
                    className="flex bg-[url('https://www.anettkontaveit.ee/assets/white-arrow-right.svg')] bg-no-repeat bg-[90%] w-2/5 mt-12 font-poppins font-normal px-8 py-4 justify-center items-center border border-solid rounded-full border-gray text-sm hover:bg-blue-700 hover:text-white hover:w-[42%] transition-all"
                    href='#'
                  >
                    Vaata kõiki tulemusi
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className='w-full py-8'>
            <div className="w-full max-w-[1160px] my-0 mx-auto px-8 bg-[url('https://www.anettkontaveit.ee/assets/v-ljak.svg')] bg-no-repeat bg-right bg-[auto_480px] min-h-[520px]">
              <h2 className='text-5xl text-blue-700 mb-9 font-zonaBold'>Järgmised turniirid</h2>
              <div className='w-full max-w-[600px] bg-white py-4 px-6'>
                <div className='flex justify-between items-center py-2.5'>
                  <div
                    id='icon'
                    className='flex-[0_0_auto] pr-5 border-r border-solid border-[rgba(0,0,0,.06)]'
                  >
                    <img
                      src='//www.anettkontaveit.ee/assets/reketid.svg'
                      alt='reketid'
                      className='h-[36px]'
                    />
                  </div>

                  <div className='flex-auto px-5'>
                    <p className='text-gray-600'>Mubadala Abu Dhabi Open, Abu Dhabi, UAE</p>
                    <small className='text-gray-600 font-[15px]'>WTA $500K </small>
                  </div>

                  <div className='flex-[0_0_auto] min-w-[150px] pl-5 border-l border-solid border-[rgba(0,0,0,.06)]'>
                    <p className='text-gray-600'>06.02-12.02.2023</p>
                  </div>
                </div>
              </div>
              <div id='readmore' className='flex mt-5'>
                <a
                  href='#'
                  className="pr-4 bg-[url('https://www.anettkontaveit.ee/assets/dark-arrow.svg')] bg-no-repeat bg-[100%] font-normal text-sm text-gray-600 hover:pr-6 hover:text-blue-700 transition-all"
                >
                  Vaata kõiki tulevasi turniire
                </a>
              </div>
            </div>
          </section>
        </div>

        <section
          id='instagram diagonal'
          className="bg-[#272d30] bg-[url('https://www.anettkontaveit.ee/images/footer-bg.png')] bg-repeat-x bg-inherit -rotate-3 -mx-24"
        >
          <div id='diagonal-content' className='rotate-3 mx-24'>
            <div
              id='instagram-content'
              className='w-[100vw] max-w-[1160px] my-0 mx-auto py-[90px] px-8 text-white font-poppins'
            >
              <h2 className='mb-5 text-center text-white text-[48px] leading-[58px] font-semibold'>
                Anett Instagramis
              </h2>
              <div id='ig-link' className='text-center'>
                <a
                  className='border-b border-solid border-white pb-0.5'
                  target='_blank'
                  href='https://www.instagram.com/anett_kontaveit/'
                >
                  @anett_kontaveit
                </a>
              </div>
              <ul
                id='juicer-feed'
                className='my-20 relative w-full overflow-y-auto overflow-x-hidden p-0 leading-[1.4]'
              >
                <div id='j-stacker-wrapper' className='-mx-2.5'>
                  <div id='j-stacker' className='table table-fixed w-full'>
                    <div id='col1' className='w-1/3 px-2.5 table-cell align-top float-none'>
                      <li
                        id='item'
                        className='mb-5 p-0 bg-white text-[#3A3A3A] border-r border-b border-solid border-[#e5e5e5]'
                      >
                        <img
                          className='block w-full h-auto mx-auto mb-0 cursor-pointer'
                          src='https://www.juicer.io/api/posts/325744261/images.jpg?external_id=BuvCbcfg50w&s=e8e1d89aaf0a718349531d4db4a78eee52bfa0df'
                        ></img>
                      </li>
                    </div>
                    <div id='col2' className='w-1/3 px-2.5 table-cell align-top float-none'>
                      <li
                        id='item'
                        className='mb-5 p-0 bg-white text-[#3A3A3A] border-r border-b border-solid border-[#e5e5e5]'
                      >
                        <img
                          className='block w-full h-auto mx-auto mb-0 cursor-pointer'
                          src='https://www.juicer.io/api/posts/325475585/images.jpg?external_id=BuuIt3tgfqH&s=4981a173118b3d847c8a178b2c0ee230a7a4fa75'
                        ></img>
                      </li>
                    </div>
                    <div id='col3' className='w-1/3 px-2.5 table-cell align-top float-none'>
                      <li
                        id='item'
                        className='mb-5 p-0 bg-white text-[#3A3A3A] border-r border-b border-solid border-[#e5e5e5]'
                      >
                        <img
                          className='block w-full h-auto mx-auto mb-0 cursor-pointer'
                          src='https://www.juicer.io/api/posts/324389711/images.jpg?external_id=Buii0IYgGLW&s=238cf75e4ebd53d8fd147254d64e60c9d64bb537'
                        ></img>
                      </li>
                    </div>
                  </div>
                </div>
              </ul>
              <div className='text-center'>
                <a
                  id='btn'
                  className='transition-all text-white border rounded-full border-[rgba(255,255,255,.3)] bg-none py-3 px-5 hover:bg-blue-700 font-zonaBold text-[13px] font-normal'
                  href='https://www.instagram.com/anett_kontaveit/'
                  target='_blank'
                >
                  Vaata rohkem instagramist
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer
          id='footer'
          className='flex justify-center py-8 font-zonaBold text-[#272d30] font-light text-[13px] leading-[13px]'
        >
          <div
            id='footer-content'
            className='w-full max-w-[1160px] my-0 mx-auto py-0 px-8 text-center'
          >
            <div className='flex justify-center'>
              <img
                src='https://www.anettkontaveit.ee/assets/est-copy.svg'
                alt='est logo'
                className='flex justify-center'
              />
            </div>
            <div className='mt-2.5'>© 2018 ANETT KONTAVEIT</div>
            <div className='mt-2.5'>
              <a href='mailto:anett@anettkontaveit.ee'>anett@anettkontaveit.ee</a>
            </div>
            <div id='codelab' className='flex mt-5 justify-center'>
              <a href='https://codelab.solutions/et'>
                <img
                  src='https://www.anettkontaveit.ee/assets/codelab-logo.svg'
                  alt='Made by Codelab Solutions'
                  className='flex justify-center'
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
