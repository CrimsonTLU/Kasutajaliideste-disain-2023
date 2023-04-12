import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
    <div id='content'>
      <div
        id='header'
        className={'${scrollPosition > 0 ? "invert" : ""} flex w-full fixed top-0 z-50 h-20'}
      >
        <div id='header-content' className='flex px-7 w-full'>
          <a href='/' className='flex p-1'>
            {scrollPosition < 1 && (
              <img
                className='w-[90px] h-[46px] lg:w-[137px] lg:h-[79px]'
                src='https://www.anettkontaveit.ee/assets/anett-logo-white.svg'
              ></img>
            )}
            {scrollPosition > 1 && (
              <img
                className='w-[90px] h-[46px] lg:w-[137px] lg:h-[79px] invert'
                src='https://www.anettkontaveit.ee/assets/anett-logo-black.svg'
              ></img>
            )}
          </a>
          <div className='flex justify-center items-center font-normal text-lg text-white pl-2.5 gap-2'>
            <p className='font-zonaLight font-normal'>WTA</p>
            <p className='font-black font-zonaBold'>61</p>
          </div>
          <div
            id='navbar'
            className='hidden md:flex flex-row w-full justify-end font-zonaBold font-semibold text-xs tracking-wider'
          >
            <ul className='flex content-end items-center text-white gap-4 text-right pl-7'>
              <li className='py-2'>
                <a className='text-right hover:underline underline-offset-8' href='/anettist'>
                  Anettist
                </a>
              </li>

              <li className='py-2'>
                <a className='text-right hover:underline underline-offset-8' href='/anetti-lood'>
                  Anetti lood
                </a>
              </li>

              <li className='py-2'>
                <a className='text-right hover:underline underline-offset-8' href='/tulemused'>
                  Tulemused
                </a>
              </li>

              <li className='py-2'>
                <a className='text-right hover:underline underline-offset-8' href='/turniirid'>
                  Järgmised turniirid
                </a>
              </li>

              <li className='py-2'>
                <a className='text-right hover:underline underline-offset-8' href='/sponsorid'>
                  Sponsorid
                </a>
              </li>

              <li className='py-2'>
                <a className='text-right hover:underline underline-offset-8' href='/kontakt'>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div id='lang' className='flex w-32 justify-end items-center pl-5'>
            <a
              className='flex w-24 font-poppins font-light py-2 px-4 text-white justify-center items-center border border-solid rounded-full border-white text-[11px] hover:bg-white hover:text-black transition-colors'
              href='#'
            >
              IN ENGLISH
            </a>
          </div>
        </div>
      </div>

      <div
        id='hero-content'
        className="bg-[url('https://www.anettkontaveit.ee/images/main-bg.png')]"
      >
        <div className='h-[700px] flex justify-center'>
          <div id='hero-text' className='absolute left-10 right-1/2 top-1/2 z-90  text-white'>
            <h1 className='font-stainy text-9xl font-normal -rotate-6 text-center mb-3'>Anett</h1>
            <div
              id='left-text'
              className='flex w-[330px] m-auto p-5 flex-col justify-center text-center items-center font-normal text-lg text-white gap-2'
            >
              <hr className='w-full'></hr>
              <p className='font-zonaLight font-normal text-center text-lg'>Anett Kontaveit</p>
              <div className='flex gap-2 text-center'>
                <p className='font-zonaLight font-normal text-4xl'>WTA</p>
                <p className='font-black font-zonaBold text-4xl'>61</p>
              </div>
            </div>
          </div>
          <div
            id='hero-image'
            className="bg-[url('https://www.anettkontaveit.ee/images/anett-kontaveit-main.png')] bg-contain bg-no-repeat z-100 absolute top-28 left-1/3 right-8 w-2/3 h-4/5"
          ></div>
          <div
            id='hero-diagonal'
            className='bg-[#fbfbfb] absolute z-80 top-[655px] -left-24 -right-24 h-52 -rotate-3'
          ></div>
        </div>
        <div className='flex absolute gap-2 text-white z-100 font-zonaLight font-semibold uppercase text-sm rotate-90 top-[300px] -right-12'>
          <a className='social-bt' target='_blank' href='https://twitter.com/AnettKontaveit'>
            Twitter
          </a>
          <a
            className='social-bt'
            target='_blank'
            href='https://www.instagram.com/anett_kontaveit/?hl=en'
          >
            Instagram
          </a>
        </div>
      </div>

      <div id='frontpage' className='flex flex-col justify-center bg-gray-50'>
        <section id='sponsors' className='bg-white z-150 -rotate-3 w-full'>
          <div id='diagonal-content' className='flex justify-center mx-24'>
            <div
              id='sponsors-content'
              className='flex flex-col justify-center px-8 py-11 rotate-3 max-w-[1160px]'
            >
              <h5 className='font-zonaLight text-black font-normal text-sm text-center'>
                Sponsorid
              </h5>
              <div className='hidden md:flex justify-center gap-2'>
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

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-porsche.png'
                      alt='Porsche'
                    ></img>
                  </a>
                </div>

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsors-zenith.png'
                      alt='Zenith'
                    ></img>
                  </a>
                </div>

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-babolat.png'
                      alt='Babolat'
                    ></img>
                  </a>
                </div>

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-alexela.png'
                      alt='Alexela'
                    ></img>
                  </a>
                </div>
              </div>
              <div className='flex md:hidden'>
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

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-porsche.png'
                      alt='Porsche'
                    ></img>
                  </a>
                </div>

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsors-zenith.png'
                      alt='Zenith'
                    ></img>
                  </a>
                </div>

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-babolat.png'
                      alt='Babolat'
                    ></img>
                  </a>
                </div>

                <div class='logo'>
                  <a href='/sponsorid'>
                    <img
                      src='//media.voog.com/0000/0041/3736/photos/sponsorid-alexela.png'
                      alt='Alexela'
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id='frontpage-content' className='flex flex-col w-full z-60'>
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
            className='flex justify-between items-center w-full px-0 pt-14 pb-7 font-poppins'
          >
            <div
              id='results-image'
              className="w-1/2 bg-[url('https://www.anettkontaveit.ee/images/tulemused-bg.jpg')] bg-no-repeat bg-right bg-[auto_100%] h-[800px]"
            ></div>
            <div id='results-content' className='w-1/2 pt-[100px] self-start'>
              <div id='results' className='w-full max-w-[580px] pr-7'>
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

        <footer id='footer' className="flex justify-center py-8 font-zonaBold text-[#272d30] font-light text-[13px] leading-[13px]">
          <div id='footer-content' className="w-full max-w-[1160px] my-0 mx-auto py-0 px-8 text-center">
            <div className="flex justify-center">
              <img src='https://www.anettkontaveit.ee/assets/est-copy.svg' alt='est logo' className="flex justify-center"/>
            </div>
            <div className="mt-2.5">© 2018 ANETT KONTAVEIT</div>
            <div className="mt-2.5">
              <a href='mailto:anett@anettkontaveit.ee'>anett@anettkontaveit.ee</a>
            </div>
            <div id='codelab' className="flex mt-5 justify-center">
              <a href='https://codelab.solutions/et'>
                <img src='https://www.anettkontaveit.ee/assets/codelab-logo.svg' alt='Made by Codelab Solutions' className="flex justify-center"/>
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
