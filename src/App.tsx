import './App.css';
import UseDefferedValue from './pages/UseDefferedValue/UseDefferedValue';
import UseImperativeHandle from './pages/UseImperativeHandle/UseImperativeHandle';
import UseOptimisticPage from './pages/UseOptimisticPage';
import UseTransition from './pages/UseTransition';

function App() {
  return (
    <>
      <UseOptimisticPage />
      <UseTransition />
      <UseDefferedValue />
      <UseImperativeHandle />
    </>
  );
}

export default App;
