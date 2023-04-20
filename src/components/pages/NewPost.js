import { useState } from "react"
import { postData } from "../utils/ServerApis";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";
import { usePostContext } from "../../context/ContextProvider";
export default function NewPost() {
    const {updater , updatePosts} = usePostContext();
    const navigate = useNavigate();
    const [btnState , setbtnState] = useState(false);
    const [formData, setFormData] = useState({
        PostImage: "",
        author: "",
        location: "",
        description: ""
    })
    
    function SubmittingForm(e) {
        e.preventDefault();
        setbtnState(true)
        const data = new FormData();
        data.append('PostImage' , formData.PostImage);
        data.append('author' , formData.author);
        data.append('location' , formData.location);
        data.append('description' , formData.description)
        postData(data).then(res => {
            if (res.status === 200) {
                setbtnState(true);
                updatePosts(updater+1);
                navigate('/posts/all')
            }else{  
                alert('Not able to post')
            }
        }).then(() => {
            setbtnState(false);
        })
        setFormData({
            author: "",
            location: "",
            description: ""
        })
    }

    return <div className="form-container">
        <form onSubmit={SubmittingForm}>
            <div className="field-container">
                <label>Choose a image to uplaod</label>
                <input type="file"  filename="PostImage" onChange={(e) => {
                    setFormData(data => ({
                        ...data,
                        PostImage: e.target.files[0]
                    }))
                }}
                />
            </div>
            {
                formData.PostImage ? <Preview post={URL.createObjectURL(formData.PostImage)}/> : ""
            }
            <div className="field-container">
                <input type='text' name="author"
                    placeholder="Author name"
                    onChange={(e) => {
                        setFormData(data => ({
                            ...data,
                            author: e.target.value
                        }))
                    }}
                    value={formData.author}
                />
                <input type='text' name="location"
                    placeholder="Location"
                    onChange={(e) => {
                        setFormData(data => ({
                            ...data,
                            location: e.target.value
                        }))
                    }}
                    value={formData.location}
                />
            </div>
            <div className="field-container">
                <input type="text" name="description"
                    placeholder="Description"
                    onChange={(e) => {
                        setFormData(data => ({
                            ...data,
                            description: e.target.value
                        }))
                    }}
                    value={formData.description}
                />
            </div>
            <div className="button-container">
                <button type="submit" disabled = {btnState}>Submit</button>
            </div>
        </form>
    </div>
}