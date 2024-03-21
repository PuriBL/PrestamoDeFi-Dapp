export default function Footer() {
    return (
      <footer className="py-4 px-3 sm:p-8 flex justify-center bg-white border-t shadow-xs">
        <p>Derechos de autor &copy; {new Date().getFullYear()} Banco Descentralizado Puri</p>
      </footer>
    )
  }