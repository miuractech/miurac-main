import { FirebaseApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

type useStorageProps = {
    app: FirebaseApp
    updateFirestore:boolean
}

const useStorage = ({ app, updateFirestore }: useStorageProps) => {
    const storage = getStorage(app);
    const [progress, setProgress] = useState(0)
    const [loading, setLoading] = useState(false)
    const upload = ({ file, path, fileName }: {file:File,path:string,fileName:string,}) => {
        setLoading(true)
        const storageRef = ref(storage, `/${path}/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        return new Promise((resolve,reject)=>{
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const prog = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(prog);
                },
                (err) => {
                    setLoading(false)
                    reject(err)
                },
                async () => {
                    try {
                        const url = await getDownloadURL(uploadTask.snapshot.ref);
                        
                        setLoading(false)
                        setProgress(0)
                        resolve(url)
                    } catch (error) {
                        reject(error)
                    }
                }
            );
        })

    };
    return { upload, progress, loading };
};

export default useStorage;
