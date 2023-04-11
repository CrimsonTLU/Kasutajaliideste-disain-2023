import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const updatePosition = () => {
    setScrollPosition(window.pageYOffset)
    console.log("Scroll pos: ", scrollPosition)

    if(scrollPosition > 1) {
      document.getElementById("header").classList.add('invert', 'bg-black')
    }
    else if(scrollPosition < 1) {
      document.getElementById("header").classList.remove('invert', 'bg-black')
    }
    
  }

  window.addEventListener('scroll', updatePosition)
  
  const [scrollPosition, setScrollPosition] = useState(0)

  return (
    <div id="content">

      <div id="header" className={'${scrollPosition > 0 ? "invert" : ""} flex w-full fixed top-0 z-50 h-20'}>
        <div id="header-content" className="flex px-7 w-full">
          <a href="/" className="flex p-1">
            {scrollPosition < 1 && 
              <img className="w-[90px] h-[46px] lg:w-[137px] lg:h-[79px]" src="https://www.anettkontaveit.ee/assets/anett-logo-white.svg"></img>
            }
            {scrollPosition > 1 && 
              <img className="w-[90px] h-[46px] lg:w-[137px] lg:h-[79px] invert" src="https://www.anettkontaveit.ee/assets/anett-logo-black.svg"></img>
            }
            
          </a>
          <div className="flex justify-center items-center font-normal text-lg text-white pl-2.5 gap-2">
            <p className='font-zonaLight font-normal'>WTA</p>
            <p className="font-black font-zonaBold">61</p>
          </div>
          <div id="navbar" className="hidden md:flex flex-row w-full justify-end font-zonaBold font-semibold text-xs tracking-wider">
            <ul className="flex content-end items-center text-white gap-4 text-right pl-7">
              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/anettist">Anettist</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/anetti-lood">Anetti lood</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/tulemused">Tulemused</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/turniirid">Järgmised turniirid</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/sponsorid">Sponsorid</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div id="lang" className="flex w-32 justify-end items-center pl-5">
            <a className="flex w-24 font-poppins font-light py-2 px-4 text-white justify-center items-center border border-solid rounded-full border-white text-xs hover:bg-white hover:text-black transition-colors" href="#">IN ENGLISH</a>
          </div>
        </div>
      </div>

      <div id="hero-content" className="bg-[url('https://www.anettkontaveit.ee/images/main-bg.png')]">
        <div className="h-[700px] flex justify-center">
          <div id="hero-text" className="absolute left-10 right-1/2 top-1/2 z-90  text-white">
            <h1 className="font-stainy text-9xl font-normal -rotate-6 text-center mb-3">Anett</h1>
            <div id="left-text" className="flex w-[330px] m-auto p-5 flex-col justify-center text-center items-center font-normal text-lg text-white gap-2">
              <hr className="w-full"></hr>
              <p className="font-zonaLight font-normal text-center text-lg">Anett Kontaveit</p>
              <div className="flex gap-2 text-center">
                 <p className='font-zonaLight font-normal text-4xl'>WTA</p>
                <p className="font-black font-zonaBold text-4xl">61</p>
              </div>
          </div>
          </div>
          <div id="hero-image" className="bg-[url('https://www.anettkontaveit.ee/images/anett-kontaveit-main.png')] bg-contain bg-no-repeat z-100 absolute top-28 left-1/3 right-8 w-2/3 h-4/5"></div>
          <div id="hero-diagonal" className="bg-[#fbfbfb] absolute z-80 top-[655px] -left-24 -right-24 h-52 -rotate-3"></div>
        </div>
        <div className="flex absolute gap-2 text-white z-100 font-zonaLight font-semibold uppercase text-sm rotate-90 top-[300px] -right-12">
          <a className="social-bt" target="_blank" href="https://twitter.com/AnettKontaveit">Twitter</a>
          <a className="social-bt" target="_blank" href="https://www.instagram.com/anett_kontaveit/?hl=en">Instagram</a>
	      </div>
      </div>

      <div id="frontpage" className="flex flex-col justify-center">
          <section id="sponsors" className="bg-white z-150 -rotate-3 w-full">
            <div id="diagonal-content" className="flex justify-center mx-24">
              <div id="sponsors-content" className="flex flex-col justify-center px-8 py-11 rotate-3 max-w-[1160px]">
                <h5 className="font-zonaLight text-black font-normal text-sm text-center">Sponsorid</h5>
                <div className="hidden md:flex justify-center gap-2">
				
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-lacoste.png" alt="Lacoste"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-tallink.png" alt="Tallink"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-telegraaf.png" alt="Hotell Telegraaf"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-porsche.png" alt="Porsche"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsors-zenith.png" alt="Zenith"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-babolat.png" alt="Babolat"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-alexela.png" alt="Alexela"></img></a></div>
                
              </div>
              <div className="flex md:hidden">
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-lacoste.png" alt="Lacoste"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-tallink.png" alt="Tallink"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-telegraaf.png" alt="Hotell Telegraaf"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-porsche.png" alt="Porsche"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsors-zenith.png" alt="Zenith"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-babolat.png" alt="Babolat"></img></a></div>
                
                  <div class="logo"><a href="/sponsorid"><img src="//media.voog.com/0000/0041/3736/photos/sponsorid-alexela.png" alt="Alexela"></img></a></div>
                
              </div>
              </div>
            </div>
          </section>

          <div id="frontpage-content" className="flex flex-col w-full z-50">
            <div id="frontpage-content-about" className="px-8 py-14 flex flex-row justify-between">
              <div id="about" className="flex flex-col w-1/2">
                <h2 className="text-5xl text-blue-700 mb-9 font-zonaBold">Anettist</h2>
                <p>Alustanud ema Ülle Milk’i käe all kuueaastasena treeninguid, jõudsin juba kolm aastat hiljem, oma teisel võistlusaastal esimese tiitlivõiduni. Eesti noorte meistrivõistluste finaalis (T-10) alistasin ligi 2,5 tundi kestnud kolmesetilises raskes heitluses oma tolleaegse peamise koduse konkurendi Mari Kalma 4:6;6:4;6:2.<br/><br/></p>
                <p>Oli aasta 2004 ja Püünsi kooli 9aastase aktiivse koolitüdrukuna olin lisaks tennisetrennidele jaganud oma aega ka koorilaulule ja rahvatantsule. Nüüd jõudis kätte hetk, kus tantsutrennid said tasutud esinemisega 17. Üldtantsupeol – peab ju iga õige eestlane vähemalt ühel laulu- või tantsupeol kaasa lööma.<br/><br/></p>
              </div>
              <div id="facts" className="flex w-1/2 pl-8">
              <div id="frontpage-facts-desktop" className="hidden lg:flex items-stretch flex-wrap">
								
                <div className="flex flex-col relative w-1/2 p-6 justify-center items-center after:content-[''] after:bg-[#e8e8e8] after:w-[1px] after:absolute after:top-4 after:bottom-4 after:right-0 ">
                  <img src="//media.voog.com/0000/0041/3736/photos/faktid-eesti.svg" alt= "Elukoht" className="h-[80px] py-2"/>
                  <h5 className="text-center">Elukoht</h5>
                  <h4 className="text-center">Viimsi vald, Harjumaa, Eesti</h4>
                </div>

                <div className="flex flex-col relative w-1/2 p-6 justify-center items-center">
                  <img src="//media.voog.com/0000/0041/3736/photos/faktid-mangib.svg" alt= "Mängib" className="h-[80px] py-2"/>
                  <h5 className="text-center">Mängib</h5>
                  <h4 className="text-center">paremakäeline (tagantkäsi kahe käega)</h4>
                </div>
              
                <div className="flex flex-col relative w-1/2 p-6 justify-center items-center after:content-[''] after:bg-[#e8e8e8] after:w-[1px] after:absolute after:top-4 after:bottom-4 after:right-0 berfore:content-[''] before:bg-[#e8e8e8] before:h-[1px] before:absolute before:top-0 before:left-4 before:right-4">
                  <img src="//media.voog.com/0000/0041/3736/photos/faktid-reketid.svg" alt= "Reketid" className="h-[80px] py-2"/>
                  <h5 className="text-center">Reketid</h5>
                  <h4 className="text-center">Babolat</h4>
                </div>
              
                <div className="flex flex-col relative w-1/2 p-6 justify-center items-center berfore:content-[''] before:bg-[#e8e8e8] before:h-[1px] before:absolute before:top-0 before:left-4 before:right-4">
                  <img src="//media.voog.com/0000/0041/3736/photos/faktid-riietus.svg" alt= "Riietus" className="h-[80px] py-2"/>
                  <h5 className="text-center">Riietus</h5>
                  <h4 className="text-center">Lacoste</h4>
                </div>
              
            </div>
            <div id="frontpage-facts-mobile" className="flex lg:hidden">
              
                <div class="fact">
                  <img src="//media.voog.com/0000/0041/3736/photos/faktid-eesti.svg" alt= "Elukoht"/>
                  <h5 class="text-center">Elukoht</h5>
                  <h4 class="text-center">Viimsi vald, Harjumaa, Eesti</h4>
                </div>
              
                <div class="fact">
                  <img src="//media.voog.com/0000/0041/3736/photos/faktid-mangib.svg" alt= "Mängib"/>
                  <h5 class="text-center">Mängib</h5>
                  <h4 class="text-center">paremakäeline (tagantkäsi kahe käega)</h4>
                </div>
              
                <div class="fact">
                  <img src="//media.voog.com/0000/0041/3736/photos/faktid-reketid.svg" alt= "Reketid"/>
                  <h5 class="text-center">Reketid</h5>
                  <h4 class="text-center">Babolat</h4>
                </div>
              
                <div class="fact">
                  <img src="//media.voog.com/0000/0041/3736/photos/faktid-riietus.svg" alt= "Riietus"/>
                  <h5 class="text-center">Riietus</h5>
                  <h4 class="text-center">Lacoste</h4>
                </div>
              
            </div>
              </div>
            </div>
	    <div id="frontpage-content-blog">
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
              
            </div>
            <section className="flex justify-center bg-white py-8 px-4 sm:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 max-w-screen-lg">
                <div className=" p-4">
                  <img
                    src="//www.anettkontaveit.ee/photos/60236FAF-461A-49DB-8AA7-D08C9881005A_1_201_a_block.jpeg"
                    alt="Anetti lugu 1"
                    className="w-full h-48 object-cover mb-4"
                  />
                  <a className="text-2xl text-bold font-zonaBold text-black font-normal hover:text-blue-700" href='/'>Aneti uus treener on kogenenud sakslane</a>
                  <p>
                    Eesti esireket, WTA maailma edetabelis kõrgele teisele kohale tõusnud Anett Kontaveit alustab koostööd kogenud Saksa treeneri Torben Beltziga.
                  </p>
                </div>
                <div className="p-4">
                  <img
                    src="//www.anettkontaveit.ee/photos/anett%20kontaveit_block.jpeg"
                    alt="Anetti lugu 2"
                    className="w-full h-48 object-cover mb-4"
                  />
                  <a className="text-2xl text-bold font-zonaBold text-black font-normal hover:text-blue-700" href='/'>Karjääri parima hooaja teinud Anett sihib slämmivõitu</a>
                  <p>
                    Eesti esireketil Anett Kontaveidil on selja taga karjääri edukaim hooaeg, mille käigus kirjutas ta mitmel korral ümber Eesti tenniseajalugu. Uuele aastale läheb ta vastu uute sihtidega.
                  </p>
                </div>
                <div className='p-4'>
                  <img
                    src="//www.anettkontaveit.ee/photos/anett%20kontaveit_block.jpeg"
                    alt="Anetti lugu 3"
                    className="w-full h-48 object-cover mb-4"
                  />
                  <a className="text-2xl text-bold font-zonaBold text-black font-normal hover:text-blue-700" href='/'>Anett Kontaveit ja Nigel Sears otsustasid koostöö lõpetada</a>
                  <p>
                    Eesti esinumber Anett Kontaveit ja tema senine treener Nigel Sears otsustasid ligi kolm aastat kestnud koostööle joone alla tõmmata.
                  </p>
                </div>
              </div>
            </section>
          </div>
      </div>

    </div>
    
  );
}

export default App;
