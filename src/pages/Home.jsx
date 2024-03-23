import {useAccount } from "wagmi"
import { Cliente, Info } from '../components'
import {Button, ErrorInfo, TextInput, Title } from '../components/ui'

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) return <div>Conectando de forma segura ...</div>
  if (isDisconnected) return <div>Desconectado</div>  
    
  
  return (
    <div className= 'flex flex-col gap-6'>  
      <div>Conectado a su billetera: {address}</div>       
        <div>
          <Button> Solicitar  préstamo </Button> 
        </div>
        <ErrorInfo />        
        <div>
          <TextInput />
        </div>
          <Title>Akdkkkkkkkk</Title> 
          <Cliente />
          <Info />

      </div>
    )    
    
  }

  