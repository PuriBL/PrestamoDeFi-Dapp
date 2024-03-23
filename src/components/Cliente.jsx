import { useContractRead } from 'wagmi'
import { PrestamoDeFiABI } from '../contracts/ABIs'
import { Title } from './ui'

export default function Cliente() {
    const {data, isLoading }= useContractRead({
        address: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
        abi: PrestamoDeFiABI,
        functionName: 'Cliente'
    })

    // console.log('RESULTADO Cliente:', result) 

    if (isLoading) return <div>Cargando... </div>

    // el dato ... data no me aparece, no he podido el formato 
    // ABI formatearlo de la clase 86 , en 1 hora 37 min.

    return (
        <section className= "flex flex-col before:bg-white border shadow p-4 rounded w-[360px] sm:w-[469px]">
            <Title>Usuario cliente :</Title>
           {isLoading ? <div>Cargando ...</div> : <p className="text-xs sm:text-sm bg-gray-300 p-2 rounded-md">{data}</p>}            
            
        </section>
  )
}

