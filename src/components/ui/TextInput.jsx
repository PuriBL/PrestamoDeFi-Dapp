//import PropTypes from 'prop-types'
//export default function TextInput({type = 'text', onChange, value, placeholder, disabled}) {
    //return (
        //<input
        //type={type} 
        //onChange={onChange}
        //value={value} 
        //placeholder={placeholder} // te permite escribir dentro
        //disabled={disabled}
        //className="border border-gray-300 rounded-lg p-4 outline-none
        //focus: ring-2 focus:ring-indigo-100 focus:border-transparent
        //transition duration-300 ease-in-out disabled:cursor-not-allowed"
        ///>
    //)

//}

//TextInput.propTypes = {
    //type: PropTypes.string,
    //onChange: PropTypes.func,
    //value: PropTypes.string,
    //placeholder: PropTypes.string,
    //disabled: PropTypes.bool

//}


import { MdInfoOutline }from 'react-icons/md'
export default function ErrorInfo() { 
        return (            
            <div className= "flex items-center gap-3 bg-indigo-500 hover:bg-indigo-700 p-2 px-4 w-fit rounded-lg">
              <p className="text xs text-white"> Préstamos  de  cliente </p>   
             
            </div>
        )           
                
}