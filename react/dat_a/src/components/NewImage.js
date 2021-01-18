import React, {useState} from 'react'
import firebase from 'firebase'
import {app} from '../base'

// Get the db reference and the storage reference 
const db = app.firestore()
const storage = app.storage();


// Function to handle new images
export const NewImage = ({currentTask}) => {
  
    // Initialize the File variable and the setFile function  
  const [file, setFile] = useState(null)

  // On changing the file, set the target based on event 
  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  // Function to  handle the upload of image
  const onUpload = async () => {
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    
    db.collection("tasks").doc(currentTask).update({
      
      images: firebase.firestore.FieldValue.arrayUnion({
                                                          name: file.name,
                                                          url: await fileRef.getDownloadURL(), 
                                                          annotation: " "
                                                      })
    })
  }

  return <>
    <input type="file" onChange={onFileChange}/>
    <button onClick={onUpload}>Upload Image</button>
  </>
}