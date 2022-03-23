import './App.css';
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [] = useState([]);

  //const onChange = (event) => setTitle(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (title === "") {
      return;
    }

  }

  console.log(title);
  return (
    <div className="App">
      <h1>Diary</h1>
      <div>
        <form onSubmit={onSubmit}>
          <fieldset>
            <input
              name="title"
              //onChange={onChange}
              type="text"
              placeholder='제목'
            />
            <br></br>
            <textarea 
            name="content"
            cols="50" 
            rows="20" 
            placeholder='내용'
            />
          </fieldset>

        </form>

      </div>


    </div>
  );
}

export default App;
