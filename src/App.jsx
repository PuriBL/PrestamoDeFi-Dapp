import { ConnectKitProvider } from 'connectkit';
import { WagmiConfig } from 'wagmi';
import { AppLayout } from './components/ui/layouts'
import { config } from './config/wagmi'
import { Home } from './pages'
//import { Routes, Route } from 'react-router-dom'
//import { InicioAutenticacion } from './pages/Pagina1'
//import { GestionUsuarios } from './pages/Pagina2'
//import { OperacionesPretamos } from './pages/Pagina3'

// los cambios desde el min. 28 en adelante de la clase 46 , no me valen 


function App() {   
   return (   
      <WagmiConfig config={config}>       
        <ConnectKitProvider mode='light'>
          <AppLayout>            
            <Home />                    
          </AppLayout>
        </ConnectKitProvider>
      </WagmiConfig>
      )
    }   
    
export default App
