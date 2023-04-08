import { db, storage } from "@/firebase";
import { FaceSmileIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useSession, signOut } from "next-auth/react";
import { useRef, useState } from "react";

const InputBox = () => {
  const { data: session } = useSession();

  const [input, setInput] = useState("");

  // loading effect in uloading the picture in firebase 
  const [loading, setLoading] = useState(false);


  // ref for a picking the file image or video from a file icon 
  const filePickerreF = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  // sending post data to firebase 
  const sendPost = async () => {
    if (loading) return;
    setLoading(true);
    try{

      const docRef = await addDoc(collection(db, "posts"), {
         id: session.user.uid,
         tweet: input,
         userImg: session.user.image,
         timestamp: serverTimestamp(),
         name: session.user.name,
         username: session.user.username,
         postimage: selectedFile,
       })
       console.log('Image uploaded to Firebase Storage');
       const imageRef = ref(storage, `posts/${docRef.id}/image`);
       if (selectedFile) {
         await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
           const downloadUrl = await getDownloadURL(imageRef);
           await updateDoc(doc(db, 'posts', docRef.id), {
             image: downloadUrl, // Change 'image' to 'postimage'
           })
         })
       }
       setInput('')
       setSelectedFile(null)
       setLoading(false)
       console.log('Loading state set to false');
    }catch(error) {
      console.log('erro occur', error);
      setLoading(false)
    }
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  return (
    <>
      {session && (
        <div className="flex  border-b border-gray 200 p-3 space-x-3">
          <img
            onClick={signOut}
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-[95%]"
            src={session.user.image}
            alt="user image"
          />
          <div className="w-full divide-y divide-gray-200">
            <div className=" ">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full border-none  focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                rows="2"
                placeholder="What's happening"
              ></textarea>
            </div>
            {selectedFile && (
              <div className="w-[220px] m-auto relative rounded-2xl">
                <XMarkIcon onClick={() => setSelectedFile(null)} className="h-7 w-7  absolute cursor-pointer bg-gray-100  rounded-full p-1 text-gray-800 right-3 top-3" />

                <img className="block m-auto rounded-2xl" src={selectedFile} alt="image" />
              </div>
            )}
            <div className="flex items-center justify-between pt-2.5">
            
              <div className="flex">
                <div className="" onClick={() => filePickerreF.current.click()}>
                  <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                  <input onChange={addImageToPost} type="file" hidden ref={filePickerreF} />
                </div>
                <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              </div>
              <button onClick={sendPost} disabled={!input.trim()} className="bg-blue-400 text-white px-4 py-1.5 rounded-full folt-bold shadow-md hover:brightness-[95%] disabled:opacity-50">
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// selectedFile=== null
export default InputBox;
