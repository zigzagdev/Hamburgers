import logo from './logo.svg';
import './App.css';
import  Footer from  './layouts/footer'
import  Header from './layouts/header'


function App() {
  return (
    <body>
      <div className="Wrapper">
        <Header/>
        <main>
          Learn React
        </main>
        <Footer/>
      </div>
    </body>
  );
}

export default App;
