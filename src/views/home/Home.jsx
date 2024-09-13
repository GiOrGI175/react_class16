import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      name: 'items1',
      description: 'descr1',
    },
    {
      id: 2,
      name: 'items2',
      description: 'descr2',
    },
    {
      id: 3,
      name: 'items3',
      description: 'descr3',
    },
  ];

  const handleBtnClik = (id) => {
    navigate(`/items/${id}`);
  };

  return (
    <div>
      <h1>home page</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>descr</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => handleBtnClik(item.id)}>
                    viwes details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
