import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setErorr] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('image');

    // To read data at a path and listen for changes,
    // use the on() or once() methods of firebase.database.Reference to observe events.
    storageRef.put(file).on(
      'state_changed',
      // The listener receives a snapshot that contains the data at the specified location in the database
      // at the time of the event.
      // You can retrieve the data in the snapshot with the val() method.
      (snapshot) => {
        console.log('snapshot', snapshot);
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setErorr(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        //add info to database
        collectionRef.add({ url: url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
