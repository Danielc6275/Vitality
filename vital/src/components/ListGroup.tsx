import { useState } from "react";

function ListGroup() {
    let items = [
        'localmax',
        'Dasanii',
        'the Hunter',
        'Daniel',
        'FelipeD',
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // How we tell react to change the component over time (aka highlight what we click).
      return (
    <>
        <h1>List</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
        {items.map((item, index) => (
            <li 
              className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
              key={item} 
              onClick={() => { setSelectedIndex(index); }}
              >
                {item}
            </li>
        ))}
        </ul>
    </>
);
}

export default ListGroup;