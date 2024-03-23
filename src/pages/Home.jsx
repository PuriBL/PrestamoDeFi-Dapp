import {useAccount } from "wagmi"
import { Cliente } from '../components'
import {LoadingSpinner, Button, ErrorInfo, TextInput, Title } from '../components/ui'

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) return <div>Conectando de forma segura ...</div>
  if (isDisconnected) return <div>Desconectado</div>
  
  return (
    <div className= 'flex flex-col gap-6'>  
      <div>Conectado a su billetera: {address}</div> 
      <LoadingSpinner className="h-12 w-12"/>
        <div>
          <Button>Solicitar préstamo</Button> 
        </div>
        <ErrorInfo />        
        <div>
          <TextInput />
        </div>
          <Title>Este es un titulo de muestra</Title> 
          <Cliente />

      </div>
    )    
    
  }

  