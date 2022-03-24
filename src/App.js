import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [diary, setDiary] = useState([]);

  const onChangeT = (event) => setTitle(event.target.value);
  const onChangeC = (event) => setContent(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (title === "") return;
    setDiary(currentArray => [[title,content], ...currentArray])
    // setTitle("");
    // saveLocal();
  };

  useEffect(() => {
    window.localStorage.setItem("diaryInLocal", JSON.stringify(diary));
  },[diary]);

  // const saveLocal = () => {
  //   localStorage.setItem("diaryInLocal", JSON.stringify(diary));
  // };

  // console.log(diary);

  return (
    <div className="App">
      <h1>Diary</h1>
      <div>
      <br></br>
        <form name="diary" onSubmit={onSubmit}>
          <fieldset>
            <input
              value={title}
              onChange={onChangeT}
              type="text"
              placeholder='제목..'
            />
            <br></br>
            <textarea
              value={content}
              onChange={onChangeC}
              cols="50"
              rows="20"
              placeholder='내용..'
            />
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
      <hr />

    </div>
  );
}

export default App;
