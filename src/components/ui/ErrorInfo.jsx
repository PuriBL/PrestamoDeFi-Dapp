import { MdInfoOutline }from 'react-icons/md'
export default function ErrorInfo() { 
        return (
            <div className= "flex items-center gap-3 bg-red-200 p-2 w-fit rounded-lg">     
                <MdInfoOutline className= "text-red-500"  />                           
                <p className="text xs text-red-500">Error: algo ha salido mal</p>   
           
            </div>
    )
}