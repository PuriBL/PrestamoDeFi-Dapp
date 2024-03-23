import PropTypes from 'prop-types'
import LoadingSpinner from './LoadingSpinner'

export default function Button({ type = 'button', onClick, disabled, children, isLoading }) {
  return (
    <button
      type={type}

      className= "flex items-center gap-3 bg-indigo-500 hover:bg-indigo-700 p-2 px-4 w-fit rounded-lg tex xs text-white  ">
           
    
      <span className="flex items-center gap-2 justify-center">
        {isLoading && <LoadingSpinner className="h-6 w-6" />}
        {children}
      </span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
}