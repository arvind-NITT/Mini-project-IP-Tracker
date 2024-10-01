import './App.css';
import { IPAddress } from './components/IPAddress';
import { IpProvider } from './components/IpContext';
function App() {
  return (
    <IpProvider>
      <IPAddress/>
    </IpProvider>
    
  );
}

export default App;
