import { ContextProvider } from "./context/ContextProvider";
import AppRouter from "./routes/AppRouter";
import './styles/style.css'
function App() {
  return <ContextProvider>
    <AppRouter />
  </ContextProvider>

}

export default App;
