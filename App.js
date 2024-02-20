import './App.css';

const data = [
    { Component: "A", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "B", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "C", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "D", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "E", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "F", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "G", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "H", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "I", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "J", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "K", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "L", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "M", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
    { Component: "N", Region1 : "yellow", Region2 : "Green", Region3 : "Red", Region4 : "Orange", Region5 : "Green" },
]
 
function App() {
    return (
      
        
        <div className="App">
          <h1>State Street Components Health Status</h1> 
          
          <table>
                <tr>
                    <th>Component</th>
                    <th>Region1</th>
                    <th>Region2</th>
                    <th>Region3</th>
                    <th>Region4</th>
                    <th>Region5</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td><b>{val.Component}</b></td>
                            <td>{val.Region1}</td>
                            <td>{val.Region2}</td>
                            <td>{val.Region3}</td>
                            <td>{val.Region4}</td>
                            <td>{val.Region5}</td>
                        </tr>
                    )
                })}
            </table>
          
          
             
        </div>
    );
}
 
export default App;