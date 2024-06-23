import './App.css';
import UseDefferedValue from './pages/UseDefferedValue/UseDefferedValue';
import UseImperativeHandle from './pages/UseImperativeHandle/UseImperativeHandle';
import UseImperativeHandle2 from './pages/UseImperativeHandle2/UseImperativeHandle2';
import UseOptimisticPage from './pages/UseOptimisticPage';
import UseTransition from './pages/UseTransition';

function App() {
  return (
    <>
      <UseOptimisticPage />
      <UseTransition />
      <UseDefferedValue />
      <UseImperativeHandle />
      <UseImperativeHandle2 />
    </>
  );
}

export default App;
