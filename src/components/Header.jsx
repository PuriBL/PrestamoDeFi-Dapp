export default function Header() {
    return (
      <header className="py-2 px-3 sm:py-4 sm:px-8 flex justify-between items-center bg-white border-b shadow-xs">
        {/* Logo para version mobile */}
        <img src="public/png-clipart-recursos-blue-p-letter-illustration-thumbnail.png" width={37} className="sm:hidden" />
        {/* Logo para version desktop */}
        <img src="public/png-clipart-recursos-blue-p-letter-illustration-thumbnail.png" width={200} className="hidden sm:flex" />
        <button className= "bg-gray-100 rounded-xl px-2 text-sm h-fit py-2">Connect Wallet</button>
      </header>
    )
  }