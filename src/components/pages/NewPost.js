import { useState } from "react"
import { postData } from "../utils/ServerApis";
import { useNavigate } from "react-router-dom";
export default function NewPost() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        PostImage: "",
        author: "",
        location: "",
        description: ""
    })
    
    function SubmittingForm(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('PostImage' , formData.PostImage);
        data.append('author' , formData.author);
        data.append('location' , formData.location);
        data.append('description' , formData.description)
        console.log(data);
        postData(data).then(res => {
            if (res.status === "OK") {
                console.log("posted Successfully");
            }else{
                console.log(res);
            }
            navigate('/posts/all')
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
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
}