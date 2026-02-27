"use client";

import { useState } from "react";

export default function AdminBooksPage() {
    const [form, setForm] = useState({
        title: "",
        author: "",
        price: 0,
        stock: 0,
        category: "",
        image: "",
        isNewArrival: false,
        isBestSeller: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const addBook = async () => {
        await fetch("http://localhost:3001/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        alert("Book added!");
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
            <input name="title" placeholder="Title" onChange={handleChange} />
            <input name="author" placeholder="Author" onChange={handleChange} />
            <input name="price" type="number" placeholder="Price" onChange={handleChange} />
            <input name="stock" type="number" placeholder="Stock" onChange={handleChange} />
            <input name="category" placeholder="Category" onChange={handleChange} />
            <input name="image" placeholder="Image URL" onChange={handleChange} />
            <label>
                <input name="isNewArrival" type="checkbox" onChange={handleChange} /> New Arrival
            </label>
            <label>
                <input name="isBestSeller" type="checkbox" onChange={handleChange} /> Best Seller
            </label>

            <button onClick={addBook} className="bg-indigo-600 text-white py-2 px-4 mt-4 rounded">
                Add Book
            </button>
        </div>
    );
}