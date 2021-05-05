import logo from './logo.svg';
import './App.css';
import image2 from './image2.jpg';
import './style.css';
function App() {
  return (
    <div className="App">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red" >Hello World</h1>
          <br />
          <img src="/image1.jpg" width="500px" height="400px" />
          <br />
          <img src= {image2} width="500px" height="400px" />
        </div>
        
        <iframe width="480" height="360" src="https://www.youtube.com/embed/_jHpnb-QmTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
      </div>
    </div>
  );
}

export default App;
