import { useAccount } from "wagmi"
import { Cliente, Info} from '../components'
import { Button, ErrorInfo, TextInput, Title } from '../components/ui'
//import { ConnectKitButton } from 'connectkit' 
///import { LoadingSpinner } from '../components/ui'

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount ()

  if (isConnecting) return <div>Conectando de forma segura ...</div>
  //if (isDisconnected) return <div className='flex flex-col self-center sm:grid place-items-center px-3 py-20 md:px-5 gap-12 font-bold text-3xl sm:text-2xl md:text-3xl mb-2 bg-gradient-to-r from-pink-600 to-indigo-500 text-transparent bg-clip-text '>Banco Descentralizado - Finanzas Descentralizadas</div>    
   

 if (isDisconnected) {
  return (
    <>
      <div className='flex flex-col self-center sm:grid place-items-center px-3 py-20 md:px-5 gap-12 font-bold text-3xl sm:text-2xl md:text-3xl mb-2 bg-gradient-to-r from-pink-600 to-indigo-500 text-transparent bg-clip-text'>
         Finanzas Descentralizadas - Solicita tu préstamo
      </div>
      <div className='text-center text-lg text-gray-950 mb-8'>
          Conecta tu wallet para comenzar
      </div>
      
      </>
    )

 }    
  

return (  
  <div className= 'flex flex-col self-center sm:grid place-items-center px-3 py-16 md:px-5 gap-12'>
    <h1 className='font-bold text-3xl xs:text-5xl xs:text-6xl mb-2 bg-gradient-to-r from-pink-600 to-indigo-500 text-transparent bg-clip-text'> Gestiona tu préstamo en Ether </h1>
    <div>Conectado a su billetera: {address}</div>
    <div>
      <Button> Préstamos cliente</Button>
    </div>
    <ErrorInfo />
    <div>
      <TextInput />
    </div>
       <Title>Otras gestiones</Title>
        <Cliente />
        <Info />
    </div>
    )  

}