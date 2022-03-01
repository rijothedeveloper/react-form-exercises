import { useState } from "react";

const NewBoxForm = ({addBox}) => {
    const initialState = {
        background: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const boxObj = {
            background: formData.background,
            width: formData.width,
            height: formData.height
        }
        addBox(boxObj)
        setFormData(initialState)
    }

    return (
        <form>
            <label for="width">Width: </label>
            <input type="text" id="width" name="width" value={formData.width} onChange={handleChange} />
            <label for="height">Height: </label>
            <input type="text" id="height" name="height" value={formData.height} onChange={handleChange} />
            <label for="background">Background color: </label>
            <input type="text" id="background" name="background" value={formData.background} onChange={handleChange} />
            <button onClick={handleSubmit }>Submit</button>
        </form>
    )
}

export default NewBoxForm;