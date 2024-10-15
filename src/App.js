import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/home';

import { WagmiConfig, configureChains, createConfig } from 'wagmi'


import { publicProvider } from 'wagmi/providers/public'
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi'
import { CoinbaseWalletConnector  } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { createWeb3Modal } from '@web3modal/wagmi/react';

import { arbitrum,  mainnet, polygon, optimism ,bsc } from 'viem/chains'
import { ToastContainer } from 'react-toastify';


function App() {
   const projectId = 'b7886983b85653378b1c43f0172c978e'
    const FE_URL = 'https://paxium.site/'
     const WalletIcon = 'https://avatars.githubusercontent.com/u/37784886'
  const { chains, publicClient } = configureChains(
    [bsc],
    [publicProvider(),walletConnectProvider({ projectId })]
  );

  // Metadata for Web3Modal
  const metadata = {
    name: 'Paxium',
    description: 'Paxium - A Global Call for Peace and Unity',
    url: FE_URL,
    icons: [WalletIcon],
  };

  // Create wagmiConfig
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
      new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata ,shimDisconnect: true } }),
      new EIP6963Connector({ chains }),
      new InjectedConnector({ chains, options: { shimDisconnect: true } }),
      new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } })
    ],
    publicClient
  })

  // Create modal
  createWeb3Modal({
    wagmiConfig,
    projectId,
    chains,
    themeMode: 'light', // Set the theme mode to 'light'
    themeVariables: {
      '--w3m-accent': '#8bbab9', // Set the accent color
      '--wui-color-accent-100': 'white', // Set the UI accent color
      '--wui-gray-glass-010': '0px solid #31A7FB',
    },
  });
  return (
    <>
    <WagmiConfig config={wagmiConfig}>
    <BrowserRouter>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/:refAddress'} component={Home} />
    </BrowserRouter>


    </WagmiConfig>
    
    <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme={'light'}
        />    </>
  );
}

export default App;
