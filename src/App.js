import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './template/Default'
import TemplatePage from './template/Page'

import Customers from './pages/Customers'
import Home from './pages/Home'

const App= () =>{
  return (
      <Router>
        <TemplateDefault>
          <Switch>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers}/>
            </Route>
          <Route path="/">
              <TemplatePage title="Página Inicial" Component={Home}/>
              <Home/>
            </Route>
          </Switch>
        </TemplateDefault>
      </Router>
  
  )
}

export default App;
