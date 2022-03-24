import axios from 'axios';
import React,{useState} from 'react'


function FileUpload(props) {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        //alert(props.valaszt)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        if (props.kerdes=="" || props.valasz1==""|| props.valasz2==""|| props.valasz3==""|| props.valasz4==""|| props.helyes==""|| props.helyesid=="")
        {
          alert("tolts ki mindent!")
          return
        }
        if(!file)
        {
            alert("fájl nincs feltöltve");
            return;
        }
        
        try {
            const res = await axios.post(
                "http://localhost:8080/upload",
                formData
            );
            console.log(res);
           
            alert(props)
            let bemenet={
                bevitel1:props.kerdes,
                bevitel2:fileName,
                bevitel3:props.valasz1,
                bevitel4:props.valasz2,
                bevitel5:props.valasz3,
                bevitel6:props.valasz4,
                bevitel7:props.helyes,
                bevitel8:props.helyesid,
                bevitelid:props.valaszt
                
              }
              fetch('http://localhost:8080/adatfelvitel',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      
    }
       
    )
    
    
    .then((response) => response.text())
    .then((szoveg) => {

    alert(szoveg)
     
})




        } catch (ex) {
            console.log(ex);
        }
    };

   

        return (
            <div className="App">
                <input  type="file"  accept=".jpg, .jpeg, .png" onChange={saveFile} />
                <button id='gomb' onClick={uploadFile}>Feltöltés</button>
               
            </div>
        );
}

export default FileUpload;