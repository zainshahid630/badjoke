import './header.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Paxium from '../../assets/Paxium.png'
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'
import { defaultChain } from '../../utils/constants'

const Header = () => {

    const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()
    const { chain } = useNetwork()

    useEffect(() => {
        if (chain && chain.id !== defaultChain) {
          switchNetwork?.(defaultChain);
        }
      }, [chain, switchNetwork]);

    const [sidebarDisplay, setSidebarDisplay] = useState('')
    const [sidebarWidth, setSidebarWidth] = useState('')
    const { disconnect } = useDisconnect();

    const { address, isConnecting, isDisconnected ,connector  } = useAccount();

    const sidebarHandle = (key) => {
        switch (key) {
            case 1:
                setSidebarDisplay('sidebar_display')
                setTimeout(() => {
                    setSidebarWidth('sidebar_width')
                }, 300);
                break;
            case 2:
                setSidebarWidth('')
                setTimeout(() => {
                    setSidebarDisplay('')
                }, 300);
                break;
            default:
                break;
        }
    }

    return (
        <div >
        <div className='header'>
            <div className="wrapper full">
                <div className="header-cont">
                    <div className="hamburger"
                        onClick={() => sidebarHandle(1)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="header-left">
                        <div className="header-logo">
                            <img src={Paxium} alt="" />
                        </div>
                    </div>
                    <div className={`header-right ${sidebarDisplay}`}>
                        
                        <div className={`header-links ${sidebarWidth}`}>
                            <div className="hamburger hamburger_"
                                onClick={() => sidebarHandle(2)}>
                                <div></div>
                                <div></div>
                            </div>
                            <Link style={{color:"white"}}>About</Link>
       
                            <Link style={{color:"white"}}>WhitePaper</Link>
                            <Link style={{color:"white"}}>Tokenomics</Link>
                            <Link style={{color:"white"}}>FAQs</Link>
                            <div>
                            </div>
                             
                        </div>
                        
                        
                    </div>
                  
{
  address ? 
  <div style={{display:'flex'}}>
   <p style={{margin:'auto' , marginRight:'10px'}}>
                            {
                                address.slice(0,4)+'...'+address.slice(-4)
                            }
                         </p>
  <button  onClick={()=>{
    disconnect(); 
    window.location.reload();
  }} className='header-btn'> Disconnect </button> 
  </div>
  :<w3m-connect-button />
}
                    



                </div>
            </div>
        </div>
        </div>
    )
}

export default Header