import "./App.css";
import haha from "./haha.svg";
import game from "./game.svg";
import built from "./buitl.svg";
import chain from "./chain.svg";
import seed from "./seed.svg";
import sola from "./sola.svg";
import wallet from "./wallet.svg";
import buy from "./buy.svg";
import brow from "./brow.svg";
import bottom from"./bottom.svg";
import left from"./left.svg";
import bfillter from"./bfillter.svg";
import tick from"./tick.svg";
import tickh from"./tickh.svg";
import add from"./add.svg";
import parasol from"./parasol.svg";
import window from"./window.svg";
import mac from"./mac.svg";
import tme from"./tme.svg";
function App() {
  return (
    <div className="App">
      <nav className="relative bg-purple-2 -bg-gradient-to-r from-purple-1 to-purple-2">
        <div className="max-w-7xl mx-auto flex whitespace-nowrap justify-between justify-center gap-x-4 py-3 sm:px-6 lg:px-5">
          <a
            href="https://explorer.solana.com/address/PFo38bhqnYn9ntEs6GHN5LAi26QX1tBxMabmqu5LtX9"
            target="_blank"
            className="flex justify-center truncate items-center gap-1 font-bold text-sm1 text-white -bg-gray-900 border border-purple-200 rounded-full px-4 py-1 min-w "
            rel="noreferrer"
          >
            <img style={{height:"15px", width:"px"}} src={tickh}></img>
            Contract Address:
            <span className="truncate">
              PFo38bhqnYn9ntEs6GHN5LAi26QX1tBxMabmqu5LtX9
            </span>
          </a>
          <a
            href="https://parasol.finance/"
            className="flex justify-center items-center gap-1 hidden lg:flex font-bold text-sm1 text-white border border-purple-200 rounded-full pl-4 pr-1 py-1 min-w1"
          >
            {/* <i className="fas fa-calendar-plus"></i> */}
            <img style={{height:"16px", width:"16px"}} src={add}></img>
            Add to Bookmark <img style={{height:"16px", width:"16px", marginLeft:"8px"}} src={parasol}></img> parasol.finance
            <span className="flex gap-2 ml-2 items-center px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-white bg-opacity-50 rounded-l-full">
            <img style={{height:"16px", width:"16px"}} src={window}></img>Ctrl+D
            </span>
            <span className="flex gap-2 items-center px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-white bg-opacity-50 rounded-r-full">
            <img style={{height:"16px", width:"16px"}} src={mac}></img>Cmd+D
            </span>
          </a>
          <a
            href="https://t.me/parasolfinance"
            target="_blank"
            className="flex justify-center items-center gap-2 font-bold text-sm1 text-white border border-purple-200 rounded-full px-4 py-1"
            rel="noreferrer"
          >
            <img style={{height:"16px", width:"16px"}} src={tme}></img>
            <span className="hidden lg:block"> t.me/parasolfinance |</span>Join
            Now
          </a>
        </div>
      </nav>
      <body>
        <div className="relative">
          <div style={{minHeight:"94.600px"}} className="max-w-7xl md:mt-6 text-gray-200 mx-auto px-5">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div style={{minHeight:"46.600px"}} className="flex min-w-[249px] mg-r justify-start lg:w-0 lg:flex-1">
                <a href="/">
                <img
                  alt=""
                  aria-hidden="true"
                  src="https://raw.githubusercontent.com/huynguyenngocdev/parasol-finance-clone/1fe0c282fb5ffbfa8b8af18196bd342fd74b7a95/assets/images/parasol_logo_inverted.svg"
                  styles="
                        display: block;
                        max-width: 100%;
                        width: initial;
                        height: initial;
                        background: none;
                        opacity: 1;
                        border: 0px;
                        margin: 0px;
                        padding-right: 0px;
                        padding-bottom: 5px;
                      "
                />
                </a>
                
                
              </div>

              <nav class="hidden md:flex items-baseline space-x-10" style={{minHeight:"24px"}}>
                <a class="font-bold text-sm hover:text-gray-300" href="/swap">
                  Swap
                </a>
                <div class="relative">
                  <button
                    class="group inline-flex gap-x-1 items-center font-bold text-sm hover:text-gray-300"
                    id="headlessui-popover-button-1"
                    type="button"
                    aria-expanded="false"
                  >
                    <span>Launchpad</span>
                    <img style={{height:"20px", width:"20px"}} src={bottom}></img>
                  </button>
                </div>
                <a class="font-bold text-sm hover:text-gray-300" href="/tiers">
                  NFT Access Keys
                </a>
                <div class="relative">
                  <button
                    class="group inline-flex gap-x-1 items-center font-bold text-sm hover:text-gray-300"
                    id="headlessui-popover-button-3"
                    type="button"
                    aria-expanded="false"
                  >
                    <span>Tools</span>
                    <img style={{height:"20px", width:"20px"}} src={bottom}></img>
                  </button>
                </div>
                <div class="relative">
                  <button
                    class="group inline-flex items-center gap-x-1 font-bold text-sm hover:text-white"
                    id="headlessui-popover-button-5"
                    type="button"
                    aria-expanded="false"
                  >
                    <span>More</span>
                    <img style={{height:"20px", width:"20px"}} src={bottom}></img>
                  </button>
                </div>
              </nav>
              <div className=" md:flex items-center gap-x-5 justify-end md:flex-1 lg:w-0 ">
                <a
                  href="https://coinmarketcap.com/currencies/parasol-finance/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white-bg-opacity-60 px-4 py-2 font-medium flex items-center text-sm gap-x-2"
                >
                  <img
                    src="https://parasol.finance/assets/logos/parasol-logo-mark-full-color-rgb.svg"
                    className="w-4 h-4"
                    alt="psol-logo"
                  />
                  <span>$0.0704</span>
                </a>
                <button className="inline-flex items-center px-4 py-2 gap-x-2 text-base font-medium rounded-md bg-purple-2 -bg-gradient-to-r from-purple-1 to-purple-2 text-white  waller-hover">
                <img className="h-3 " src={wallet}></img>
                  {/* <i class="fas fa-wallet"></i> */}
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 lg:gap-y-24">
          <section className="">
            <div className="mx-auto max-w-7xl px-5 py-61 grid grid-cols-12 gap-0">
              <div className="col-span-12 lg:col-span-6  lg:text-left lg:flex lg:items-center">
                <div className="pb-3">
                  <a
                    href="https://solana.com/"
                    className="inline-flex items-center text-white  bg-opacity-0 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <img className="h-7" src={built}></img>
                    <span class="ml-4 text-sm">Built on Solana Blockchain</span>
                    <img className="ml-2" style={{height:"20px", width:"20px"}} src={left} ></img>
                  </a>
                  <h1 className=" text-4xl font-extrabold tracking-tight text-white  sm:leading-none lgmt-7 lg:text-4xl xl:text-6xl">
                    <span className="md:block">The First Community</span>
                    <span className="text-transparent bg-clip-text bg-purple-2 leading-normal whitespace-nowrap  sm:block">
                    <span className="text-white">Governed</span>   IDO Platform
                    </span>
                  </h1>
                  <p className="mt-7  text-gray-200 font-medium text-xl">
                    Parasol Finance is the first-ever community governed IDO
                    platform built<br></br> on Solana with the needs of both
                    projects and investors alike.
                  </p>
                  <div className="flex  mt-6 sm:justify-between">
                    <p className="text-gray-200 text-lg font-bold mb-3 truncate  hhhh">
                      The first launchpad with a NFT allocation system.
                    </p>
                  </div>
                  <div className="mt-8 grid1 lg:flex gap-3 grid-cols-1 lg:grid-cols-2 justify-start">
                    <a
                      className="button px-8 bg-none bg-purple-2 py-3 text-base waller-hover min-w4"
                      href="/projects"
                    >
                      <img style={{height:"20px", width:"20px", color:"white"}} src={brow}></img>
                      Browse Upcoming IDOs
                    </a>
                    <a
                      style={{maxWidth:"242px"}}
                      className="button border border-white bg-none except py-3 text-base waller-hover"
                      href="/swap"
                    ><img  style={{height:"20px", width:"20px", color:"white"}} src={buy}></img>
                      Buy $PSOL With USDC
                    </a>
                  </div>
                </div>
                <div className="relative- mt-2000 hidden justify-end sm:mt-24 lg:col-span-6 lg:mt-0 lg:flex">
                  <div className="w-full absolute-aspect-square relative -mt-12 -mr-3 ">
                     {/* <div className="image-body">
                  <img src="../content.png"></img>
                </div> */}
                    <div className="main_logo__jLWc5">
                      <img style={{height:"620px", width:"620px",marginLeft: "-2.5rem"}} src="https://parasol.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-min.3409a0b0.png&w=3840&q=75 "></img>
                    </div>
                    <div className="main_token__BGF5P">
                      <img style={{height:"620px", width:"620px",marginLeft: "-2.5rem"}} src="https://parasol.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_q-min.b35f50c9.png&w=3840&q=75 "></img>
                    </div>
                    <div className="main_parasol__hoDLe">
                      <img style={{height:"620px", width:"620px",marginLeft: "-2.5rem"}} src="https://parasol.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_p-min.9a3293f1.png&w=3840&q=75 "></img>
                    </div>
                   
                  </div>
                </div>
                {/* <div className="image-body">
                  <img src="../content.png"></img>
                </div> */}
              </div>
            </div>
          </section>
          <section>
            <div className="logo1 mx-auto px-6 max-w-7xl">
              <div style={{marginTop:"-20px"}} className="logo2">
                <img src={sola}></img>
                <img src={chain}></img>
                <img src={seed}></img>
                <img src={game}></img>
                <img src={haha}></img>
              </div>
            </div>
          </section>
          <section>
            <div style={{marginTop:"-5px"}} className="mx-auto px-5 max-w-7xl">
              <div className="upcoming ">
                <div>
                  <p className=" idos">Upcoming IDOs</p>
                  <p>
                    We only display IDOs that are featured or have been
                    balloted.
                  </p>
                </div>
                <div>
                  <button style={{maxWidth:"191.663px", maxHeight:"48px"}} className="filter hover-fillter">
                    <span className="hidden lg:block">  FILTER BY STATUS  </span>
                    <img className="" style={{height:"20px", width:"20px", marginLeft: "4px" }} src={bfillter}></img>
                  </button>
                </div>
              </div>
            </div>
            <div className=" card mx-auto px-5 max-w-7xl">
              <div className="card1 hover-card">
                <div className="img1">
                  <img src="https://firebasestorage.googleapis.com/v0/b/parasol-finance-21.appspot.com/o/projects%2F2T9hVadPUQhKyjHL1qsZi3XZmJjGGvhYGzH81QBTPaHz%2Flogin-page.png?alt=media&token=13549a50-8370-47cf-a93e-3bdfaeaa7901"></img>
                </div>
                <div className="card-body">
                  <div className="pd-1">
                    <h1 className="name-card">Most Game <img  style={{height:"24px", width:"24px"}} src={tick}></img> </h1>
                  </div>
                  <p className="pd-2 cl-1">
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </p>
                  <div className="pd-3 cl-1">
                    <div className="token">
                      <span>Token Price</span>
                      <span className="line-1">-----------------------------------------</span>
                      <p>$0.007 <img style={{height:'16px', width:"16px"}} src="https://parasol.finance/assets/logos/usdc-logo.svg"></img>  </p>
                    </div>
                    <div className="token pd-4">
                      <p>IDO Start Date</p>
                      <span className="line-1">------------------------------------</span>
                      <p>5/5/2022</p>
                    </div>
                    <div className="token pd-4">
                      <p>IDO End Date</p>
                      <span className="line-1">---------------------------------------</span>
                      <p>9/5/2022</p>
                    </div>
                  </div>
                  <div className="token">
                    <button className="text-base bg1 waller-hover">
                    <i class="fas fa-bell"></i> Participate in IDO
                    </button>
                    <button className="text-base bg2 more-hover">More Info</button>
                  </div>
                </div>
              </div>
              <div className="card1 hover-card">
                <div className="img1">
                  <img src="https://firebasestorage.googleapis.com/v0/b/parasol-finance-21.appspot.com/o/projects%2F5f8weMkCZvATqv1rdDjPqa5XXNWEgqrpSV7RWs9McKBz%2FACDX%20IDO%20FULL%20BNNR%203500x1750.png?alt=media&token=1bd9e2f5-c94b-4991-bf60-9bba685fd1fb"></img>
                </div>
                <div className="card-body">
                  <div className="pd-1">
                    <h1 className="name-card">Acadex Network <img  style={{height:"24px", width:"24px"}} src={tick}></img></h1>
                  </div>
                  <p className="pd-2 cl-1">
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </p>
                  <div className="pd-3 cl-1">
                    <div className="token ">
                      <p>Token Price</p>
                      <span className="line-1">-----------------------------------------</span>
                      <p>$0.007 <img style={{height:'16px', width:"16px"}} src="https://parasol.finance/assets/logos/usdc-logo.svg"></img></p>
                    </div>
                    <div className="token pd-4">
                      <p>IDO Start Date</p>
                      <span className="line-1">-----------------------------------</span>
                      <p>20/5/2022</p>
                    </div>
                    <div className="token pd-4">
                      <p>IDO End Date</p>
                      <span className="line-1">------------------------------------</span>
                      <p>27/5/2022</p>
                    </div>
                  </div>
                  <div className="token">
                    <button className="text-base bg1 waller-hover">
                    <i class="fas fa-bell"></i> Participate in IDO
                    </button>
                    <button className="text-base bg2 more-hover">More Info</button>
                  </div>
                </div>
              </div>
              <div className="card1 hover-card">
                <div className="img1">
                  <img src="https://firebasestorage.googleapis.com/v0/b/parasol-finance-21.appspot.com/o/projects%2F452DHQwe3SuRmxLfCPRrHqH3nKt9RgHpfpAajt76XjD2%2Falf_covere.jpg?alt=media&token=30c96b8c-75eb-4673-a028-e7da4927df07"></img>
                </div>
                <div className="card-body">
                  <div className="pd-1">
                    <h1 className="name-card">Edensol <img  style={{height:"24px", width:"24px"}} src={tick}></img></h1>
                  </div>
                  <p className="pd-2 cl-1">
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </p>
                  <div className="pd-3 cl-1">
                    <div className="token">
                      <p>Token Price</p>
                      <span className="line-1">-----------------------------------------</span>
                      <p>$0.007 <img style={{height:'16px', width:"16px"}} src="https://parasol.finance/assets/logos/usdc-logo.svg"></img> </p>
                    </div>
                    <div className="token pd-4">
                      <p>IDO Start Date</p>
                      <span className="line-1">------------------------------------</span>
                      <p>15/6/2022</p>
                    </div>
                    <div className="token pd-4">
                      <p>IDO End Date</p>
                      <span className="line-1">------------------------------------</span>
                      <p>18/6/2022</p>
                    </div>
                  </div>
                  <div className="token">
                    <button className="text-base bg1 waller-hover">
                    <i class="fas fa-bell"></i>  Participate in IDO
                    </button>
                    <button className="text-base bg2 more-hover">More Info</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="viewall">
              <a className="buttonviewall waller-hover" href="#">
                View All Project <i class="fas fa-angle-double-right right-more"></i>
              </a>
            </div>
          </section>
        </div>
        <footer className="footer">
          <div className="mx-auto max-w-7xl px-5 py-5 grids">
            <div className="footer-left txt-left ">
              <a className="">
                <img
                  alt=""
                  aria-hidden="true"
                  src="https://raw.githubusercontent.com/huynguyenngocdev/parasol-finance-clone/1fe0c282fb5ffbfa8b8af18196bd342fd74b7a95/assets/images/parasol_logo_inverted.svg"
                  styles="
                        display: block;
                        max-width: 100%;
                        width: initial;
                        height: initial;
                        background: none;
                        opacity: 1;
                        border: 0px;
                        margin: 0px;
                        padding: 0px;
                      "
                />
              </a>
              <p className="text-base  txt-left ppp">
                Parasol Finance is the first-ever community governed IDO
                platform built on Solana with the needs of both projects and
                investors alike.
              </p>
              <div className="icon-footer">
                <i class="fab fa-github"></i>
                <i class="fab fa-twitter"></i>
                <i class="fas fa-paper-plane"></i>
                <i class="fab fa-discord"></i>
                <i class="fab fa-medium-m"></i>
              </div>
            </div>
            <div className="footer-middle text-right">
              <div className="parasol1 parasol2">
                <h4>PARASAL FINANCE</h4>
                <ul className="mt-4">
                  <li>About Parasol</li>
                  <li>Documentation</li>
                  <li>Github Organization</li>
                  <li>Token Address</li>
                </ul>
              </div>
              <div className="parasol1 parasol5">
                <h4>USEFUL LINKS</h4>
                <ul className="mt-4">
                  <li>Apply for IDO</li>
                  <li>WhitePaper</li>
                  <li>Press Kit</li>
                  <li>Tiers System</li>
                </ul>
              </div>
            </div>
            <div className="footer-right text-right">
              <div className="parasol1 parasol4">
                <h4>SOCIAL LINKS</h4>
                <ul className="mt-4">
                  <li>Twitter</li>
                  <li>Telegram</li>
                  <li>Discord</li>
                  <li>Medium</li>
                </ul>
              </div>
              <div className="parasol3">
                <h4>LEGAL</h4>
                <ul className="mt-4">
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-11">
            <div className="mx-auto max-w-7xl px-5 footer-right1">
              <p>Copyright © 2022 Parasol Finance. All rights reserved.</p>
              <div className="footer-right2">
                <span className="pad1">Build with </span>
                <i class="fas fa-heart pad1 color-red"></i>
                <p className="pad1">in Europe </p><span style={{paddingLeft:"10px", paddingRight:"10px"}}>|</span>
                <i class="fab fa-github pad1"></i>
                <p style={{paddingRight:"0px"}} className="pad1">Offical Github <span style={{paddingLeft:"10px", paddingRight:"10px"}}>|</span> Crafted by Clint ⚡️</p>
              </div>
            </div>
          </div>
          <div className="mess">
            <img src="https://image.crisp.chat/avatar/operator/3d544ad4-f92e-4389-91c2-e78234237f5d/240/?1651089847876"></img>
          </div>
        </footer>
        
      </body>
    </div>
  );
}

export default App;
