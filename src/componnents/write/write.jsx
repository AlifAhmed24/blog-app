import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./write.css";

export default function Write() {
  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [sumary, setSumary] = useState("");
  const [thubmnail, setThumbnail] = useState("");

  const [contents, setContent] = useState();
  console.log(contents);
  const navigate = useNavigate();
  const updateId = useLocation().pathname.split('/')[3];
  const isUpdate = useLocation().pathname.split('/')[2];

  const handleChange = (content, delta, source, editor) => {
    setContent(content);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const uploadContent = async () => {
    try {
      const formData = new FormData();
      formData.append("file", thubmnail);
      formData.append("category", cat);
      formData.append("title", title);
      formData.append("sumary", sumary);
      formData.append("content", contents);

      
        const res = await axios.post(`${process.env.REACT_APP_API_URL}article/`, formData);
        console.log(res.data);
     
      
    } catch (error) {
      console.log(error)
    }
  };

  function handleTitleChange(event){
    const newValue = event.target.value;
    if (newValue.length  <= 100) {
      setTitle(newValue);
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await uploadContent();
    setCat("");
    setTitle("");
    setSumary("");
    setThumbnail("");
    setContent("");
    
    navigate("/cpanel:201/article/" + cat);
  };

  const style = {
    color: title.length === 100 ? 'red' : ''
  };

 
  return (
    <div className="writeWrapper">
      <form onSubmit={handleSubmit}>
        <label for="image-upload" class="custom-file-upload">Select Thumbnail +</label>
          
          <input
            id="image-upload"
            type="file"
            onChange={(ev) => setThumbnail(ev.target.files[0])}
            required
          />
        

        <select onChange={(ev) => setCat(ev.target.value)} required>
          <option disabled selected value="">
            Choose Category --
          </option>
          <option value="Life Style">Life Style</option>
          <option value="Health">Health</option>
          <option value="Fashion">Fashion</option>
          <option value="Food And Cooking">Food And Cooking</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Education">Education</option>
        </select>
        <div className="inputTitle">
        <input
          id="inputTitle"
          type="text"
          placeholder="Enter title here"
          onChange={handleTitleChange}
          value={title}
          required
        />
        <p style={style} >{100 - title.length}</p>
        </div>
        <textarea
          id="sumary"
          onChange={(ev) => setSumary(ev.target.value)}
          value={sumary}
          placeholder="Enter Sumary"
          required
        />
        <ReactQuill
          className="editor"
          onChange={handleChange}
          value={contents}
          modules={modules}
          formats={formats}
          required
        />
        <button id="submit-btn">Submit</button>
      </form>
    </div>
  );
}
