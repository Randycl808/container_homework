
import logo from './logo.svg';
import './App.css';
import MessageBasic from './MessageBasic';
import FlashCard from './FlashCard'
import DemoContainer from './DemoContainer';
function App() {

  return (
    <div>
      <h1 class='title'>JavaScript:FlashCard, Keyboard, ToDo List:</h1>
      <DemoContainer header='FlashCard'>
        <FlashCard />
      </DemoContainer>

      <DemoContainer header='Keyboard'>
         <MessageBasic  />
      </DemoContainer>

      <DemoContainer header='TODO List:'>
         <p><u>TODO List:</u>
           <li>Homework
             <ul>-Finish hw 1-2, Keyboard hw, and ToDo List hw</ul>
           </li>
           <li><u>Study</u></li>
            <ul>-Study Javascript, HTML, CSS, React.js</ul>
            <li><u>Code</u></li>
            <ul>-Practice, Code, and Code more</ul>
         </p>
      </DemoContainer>
    </div>
  );
}

export default App;