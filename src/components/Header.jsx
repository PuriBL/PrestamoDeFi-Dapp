import { ConnectKitButton } from 'connectkit';
export default function Header() {
    return (
      <header className="border-b shadow py-2 px-3 flex justify-between items-center">
        {/* Logo para version mobile */}
        <img src="public/png-clipart-recursos-blue-p-letter-illustration-thumbnail.png" width={37} className="sm:hidden" />
        {/* Logo para version desktop */}
        <img src="public/png-clipart-recursos-blue-p-letter-illustration-thumbnail.png" width={200} className="hidden sm:flex" />
        <ConnectKitButton showBalance/>
      </header>
    )
  }