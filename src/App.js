import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import Lists from './components/lists';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Screen from './components/screen';
import Queue from './components/queue';
function App() {
  return (
    
    <div className="App">
 
      <div className='row'>
        <div className='col-12 col-sm-4'>
            <Lists></Lists>
        </div>
        
          <div className="col-sm-8 col-12">
            <Queue></Queue>
          </div>
        
      </div>
     
    </div>
  );  
}

export default App;
/*<div className="col-sm-8 col-12">
              <Screen></Screen>
          </div>

           <div className="row">
      <DndProvider backend={HTML5Backend}>
            <div className="col-sm-4">
            
                  <Lists></Lists>
            
            </div>
           
          
          </DndProvider>
        </div>
*/
