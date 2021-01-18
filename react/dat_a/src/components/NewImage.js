import React, {useState} from 'react'
import firebase from 'firebase'
import {app} from '../base'
import Dropzone from "./DropZone"

// Get the db reference and the storage reference 
const db = app.firestore()
const storage = app.storage();


// Function to handle new images
export const NewImage = ({currentTask}) => {
  
    // Initialize the File variable and the setFile function  
  const [file, setFile] = useState([])

  // On changing the file, set the target based on event 
  const onFileChange = e => {
    
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
   // add an "id" property to each File object
      setFile(prevState => [...prevState, newFile]);
    }
    // setFile(e.target.files[0])
  }

  // Function to  handle the upload of image
  const onUpload = (e) => {
    
    file.forEach(async element => {
      const storageRef = storage.ref()
      const fileRef = storageRef.child(element.name)
      await fileRef.put(element)

      db.collection("tasks").doc(currentTask).update({
      
      images: firebase.firestore.FieldValue.arrayUnion({
                                                          name: element.name,
                                                          url: await fileRef.getDownloadURL(), 
                                                          annotation: " "
                                                      })
      })


    });  
  }

  return <>

    {/* <Dropzone/> */}
    <input type="file" multiple onChange={onFileChange}/>

    
    <button onClick={onUpload}>Upload Image</button>
  </>
}