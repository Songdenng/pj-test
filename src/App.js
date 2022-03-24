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
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    window.localStorage.setItem("diaryInLocal", JSON.stringify(diary));
  },[diary]);

  useEffect(() => {
    const data = localStorage.getItem("setDiary");
    if(data !== null) {
     data = setDiary(JSON.parse(data));
    } else return[];
  },[]);

  // console.log(diary);
  const diaryMap = diary.map((item, index) => (<p key={index}>{item[0]} || {item[1]}</p>));

  return (
    <div className="App">
      <h1>Diary</h1>
      <br></br>
      <div>
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
      <div className="diaryMap">
        {diaryMap}
      </div>
    </div>
  );
}

export default App;
