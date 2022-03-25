import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [diary, setDiary] = useState(() => {
    if(typeof window !== "undefined"){
          const saved = window.localStorage.getItem("diaryInLocal");
          if (saved !== null){
             return JSON.parse(saved);
          }else return[""];
        }
  });
 // const [newDiary, setNewDiary] = useState([]);

  const onChangeT = (event) => setTitle(event.target.value);
  const onChangeC = (event) => setContent(event.target.value);

  const onClick = (item) => {
   // console.log(item);
    let newDiary = diary.filter((diary) => diary !== item)
    setDiary(newDiary);
   // setDiary(diary.filter((d) => d.id !== index));
   // console.log(diary);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (title === "") return;
    setDiary(currentArray => [[title,content], ...currentArray])
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    localStorage.setItem("diaryInLocal", JSON.stringify(diary));
  },[diary]);
  
  // console.log(diary);

  const diaryMap = diary.map((item, index) => (
    <li
      key={index}
      id={index}
    >
      {item[0]} / {item[1]}
      <button id={index} onClick={() => onClick(item)}>
        Delete
      </button>
    </li>
  ));

  return (
    <div className="App">
      <h1>Diary</h1>
      <br></br>
      <div>
        <form name="diary" onSubmit={onSubmit}>
          <fieldset>
            <input
              id="title"
              value={title}
              onChange={onChangeT}
              type="text"
              placeholder='제목..'
            />
            <br></br>
            <textarea
              id="content"
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
