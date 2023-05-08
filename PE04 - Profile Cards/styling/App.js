/*
    If you press the thumbnail, the component will return to full size. 
    If you press the full-size component, it will collapse back down into a thumbnail view.
    By reorganizing the structure of the component, you can better handle adding more ProfileCard components to the application. 
    
    Later, you’ll add more ProfileCards and see how to organize them into a gallery layout.
*/
import DisplayCards from './DisplayCards';

const App = () => (
  <DisplayCards />
);

export default App;