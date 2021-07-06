import {useState} from 'react'
//import Accordion from './components/Accordion'
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework'
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components'
//   },
// ]

const options = [
  {
    label: 'The color red',
    value: 'Red'
  },
   {
    label: 'The color green',
    value: 'Green'
  },
    {
    label: 'A shade of blue',
    value: 'Blue'
  }
]

function App() {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div className="App">
      <h1>Widgets</h1>
      <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle DropDown</button>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {
        showDropdown ?
          <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
          : null
      }
      
    </div>
  );
}

export default App;
