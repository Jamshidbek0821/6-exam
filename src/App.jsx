
import { useCookies } from "react-cookie"
import LoginRoutes from "./routes/loginRoutes"
import DashboardRoute from "./routes/DashboardRoute"

const App = () => {
  const [cookies] = useCookies(['token'])
  return cookies.token ? <DashboardRoute/> : <LoginRoutes/>
   

}

export default App
