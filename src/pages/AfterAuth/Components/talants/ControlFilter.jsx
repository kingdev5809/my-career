import { useState } from 'react';

function ControlFilter() {
  const [activeControl, setActiveControl] = useState('best-matches');
  const controlsData = [
    { id: 1, type: 'best-matches', label: 'Best matches' },
    { id: 2, type: 'recent', label: 'Recent' },
    { id: 3, type: 'saved', label: 'Saved' },
  ];

  return (
    <div>
      <div className='talants__constrol'>
        <ul className='talants__control_list'>
          {controlsData.map(el => (
            <li
              key={el.id}
              className={`talants__control_item ${
                el.type === activeControl
                  ? 'talants__control_item-active'
                  : null
              }`}
              onClick={() => setActiveControl(el.type)}
            >
              {el.label}
            </li>
          ))}
        </ul>
        <span></span>
      </div>
    </div>
  );
}

export default ControlFilter;
