import { useContractRead } from 'wagmi'
import { PrestamoDeFiABI } from '../contracts/ABIs'
import { Title } from './ui'

export default function Usuario() {
    const { data, isLoading } = useContractRead({
        address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
        abi: PrestamoDeFiABI,
        functionName: 'Usuario'
    })

    return (
        <section className= "flex flex-col before:bg-white border shadow p-4 rounded w-[360px] sm:w-[469px]">
            <Title>Usuario cliente :</Title>
            {isLoading ? <div>Cargando ...</div> : <p className="text-xs sm:text-sm bg-gray-300 p-2 rounded-md">{data}</p>}            
            
        </section>
    )
}

