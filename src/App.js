import './App.css';
import Post from './components/Post';

const SkywalkerPhoto = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const SkywalkerContent = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

function App(props) {
  console.log (props, "props")
  return (
    <div className="App">
     <Post name = {"Anakin Skywalker"} 
     photo = {SkywalkerPhoto} 
     nickname = {"dart_vader"} 
     content = {"WTF? Who is Ray? Why she is Skywalker? Luke...?"} 
     image = {SkywalkerContent} 
     date = {"26 февр"} 
     comments = {182} 
     reposts = {146} 
     likes = {887}/>
    </div>
  );
}

export default App;
