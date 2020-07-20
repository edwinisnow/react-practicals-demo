import React from 'react';
import './App.css';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      <div>Something went wrong!</div>
      <button onclick={closeToast}>Close</button>
    </div>
  )
}

function App() {
  const notify = () => {
    toast("Wow so easy !");
    toast.warn(<CustomToast />)
  }

  return (
    <div>
      <button onClick={notify}>Notify !</button>

    </div>
  );
}

export default App;
