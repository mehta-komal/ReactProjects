// import './App.css';
// import Cell from './components/Cell';
// const numArray = [];
// for (let i = 0; i < 50; i++) {
//   let temp = { val: '', color: '' };
//   temp.val = i;

//   if (isPrime(i)) {
//     temp.color = 'green';
//   } else if (i % 2 === 0) {
//     temp.color = 'grey';
//   } else {
//     temp.color = 'yellow';
//   }
//   numArray.push(temp);
// }

// function isPrime(num) {
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false;
//   }
// }
// const boxesComponents = numArray.map((box, idx)=> <box key={idx} box ={box}></box>

// )

// function App() {
//   return (
//   <>
//     <div className='flex'>
// <div className='boxes'>
//   {boxesComponents}
// </div>
//     </div>
//   </>);
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [activities, setActivities] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/events`);
      setActivities(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  return (
    <div className="App">
      <h1>GitHub Activity Viewer</h1>
      <div className="search-bar">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="activity-list">
        <h2>Recent Activities:</h2>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <strong>{activity.type}</strong> - {activity.created_at}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;




