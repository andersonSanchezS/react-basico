import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
const [categories, setCategories] = useState(["one punch"]);

const onAddCategory = (category) => {
    if(!categories.includes(category)) setCategories([...categories, category])
};
return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory onAddCategory={onAddCategory} />
    <ol>
        {categories.map((category) => {
        return <li key={category}>{category}</li>;
        })}
    </ol>
    </>
);
};
