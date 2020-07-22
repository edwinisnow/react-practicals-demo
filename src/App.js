import React, { forwardRef } from 'react';
import './App.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const ColoredToolTip = () => {
  return <span style={{ color: 'yellow' }}>Colored Component</span>
}
const CustomChild = forwardRef((props, ref) => {
  return <div ref={ref}>
    <div>First Line</div>
    <div>Second Line</div>
  </div>
})


function App() {

  return (
    <div >
      <div style={{ paddingBottom: '20px' }}>
        <Tippy arrow={false} delay={1000} placement='right' content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredToolTip />}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredToolTip />}>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
}

export default App;
