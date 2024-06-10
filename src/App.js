import './App.css';
import Header from './Header';
import Hero from './Hero';
import MusicFunction from "./Music";

// This is the function of the entire body
function BodyFunction() {
  return (
     <div className="bodyContainer">
         <div>
             <Hero />
         </div>

         <div>
             <MusicFunction />
         </div>

     </div>

  );
}

export default function App() {
    return (

        <body className="App">
            <div className="App-header">
                <Header />
            </div>

            <div className="App-body">
                <BodyFunction />
            </div>

        </body>

    )
        ;
}


