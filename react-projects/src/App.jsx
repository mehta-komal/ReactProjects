import './App.css';
import Cell from './components/Cell';
const numArray = [];
for (let i = 0; i < 50; i++) {
  let temp = { val: '', color: '' };
  temp.val = i;

  if (isPrime(i)) {
    temp.color = 'green';
  } else if (i % 2 === 0) {
    temp.color = 'grey';
  } else {
    temp.color = 'yellow';
  }
  numArray.push(temp);
}

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
}
const boxesComponents = numArray.map((box, idx)=> <box key={idx} box ={box}></box>

)

function App() {
  return (
  <>
    <div className='flex'>
<div className='boxes'>
  {boxesComponents}
</div>
    </div>
  </>);
}

export default App;
