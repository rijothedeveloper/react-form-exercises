import { useState } from "react";

const NewBoxForm = () => {
    const [formData, setFormData] = useState({
        background: "",
        width: "",
        height: ""
    })

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    return (
        <form>
            <label for="width">Width: </label>
            <input type="text" id="width" name="width" value={formData.width} onChange={handleChange} />
            <label for="height">Height: </label>
            <input type="text" id="height" name="height" value={formData.height} onChange={handleChange} />
            <label for="background">Background color: </label>
            <input type="text" id="background" name="background" value={formData.background} onChange={handleChange} />
        </form>
    )
}

export default NewBoxForm;