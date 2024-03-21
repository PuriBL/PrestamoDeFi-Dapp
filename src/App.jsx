import { AppLayout } from './components/ui/layouts'
import { Home } from './pages'

function App() {  
  return (    
      <AppLayout>
        <h1 className="text-3xl font-bold underline">
        Esta es la aplicación descentralizada para PrestamoDeFi creado por Super Puri!</h1>
        <Home />
      </AppLayout>
  )      
}

export default App
