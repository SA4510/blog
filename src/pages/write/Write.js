import "./write.css"

function Write() {
  return (
    <div className="write">
        <img
        className="writeImg"
        src="https://www.outline-media.com/gall_studio/gal_melaniem_190831/original/melanie_m_190831_079.jpg"
        alt=""/>

  <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileinpiut" style ={{display:"none"}}/>
           < input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..."typeof="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>

    </form>
      
    </div>






  )
}

export default Write
