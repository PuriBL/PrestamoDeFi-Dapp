import { ConnectKitProvider } from 'connectkit';
import { WagmiConfig } from 'wagmi';
import { AppLayout } from './components/ui/layouts'
import { config } from './config/wagmi'
import { Home } from './pages'
//import { Routes, Route } from 'react-router-dom'
//import { InicioAutenticacion, GestionUsuarios, OperacionesPrestamos } from './pages'


// los cambios desde el min. 28 en adelante de la clase 46 , no me valen aquí 
// el resto de ficheros si los estoy creando desde el minuto 4


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
