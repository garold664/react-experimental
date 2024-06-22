import './App.css';
import UseDefferedValue from './pages/UseDefferedValue/UseDefferedValue';
import UseOptimisticPage from './pages/UseOptimisticPage';
import UseTransition from './pages/UseTransition';

function App() {
  return (
    <>
      <UseOptimisticPage />
      <UseTransition />
      <UseDefferedValue />
    </>
  );
}

export default App;
