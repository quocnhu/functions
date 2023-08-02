import {useState} from 'react'
const Crud = () => {
// Fake data with non-consecutive indices
const fakeData = [
    { index: 1, data: 'Data 1' },
    { index: 2, data: 'Data 2' },
    { index: 3, data: 'Data 3' },
    { index: 5, data: 'Data 5' },
    { index: 6, data: 'Data 6' },
  ];


  // Function to create consecutive indices for the fake data
   const generateConsecutiveIndices = (data) =>
   data.map((item, index) => ({ ...item, index: index + 1 }));

 // State to store the consecutive data
 const [consecutiveData, setConsecutiveData] = useState(generateConsecutiveIndices(fakeData));

    return (
        <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {consecutiveData.map((item) => (
            <tr key={item.index}>
              <td>{item.index}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default Crud;