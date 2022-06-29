import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
const [input, setInput] = useState('')

const handleInputChange = ({ target }) => {
    setInput(target.value)
};

const handleSubmit = (e) => {
    e.preventDefault()

    if (input.trim().length > 2) {

    onAddCategory(input)
    }

    setInput('')
};

return (
    <form onSubmit={handleSubmit}>
    <input
        onChange={handleInputChange}
        type="text"
        placeholder="search gif...."
        value={input}
    />
    </form>
);
};
