import React, { useState } from 'react';

const MadlibsForm = () => {
    const initialState = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
 
    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const {noun, noun2, adjective, color} = formData;
        alert(`I love ${noun} and especially ${noun2} because they work so ${adjective} while wearing ${color} shoes.`)
        setFormData(initialState)
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            id="noun" 
            type="text" 
            name="noun" 
            placeholder="Noun" 
            value={formData.noun}
            onChange={handleChange}
            />
        </form>
          <form onSubmit={handleSubmit}>
          <input 
          id="noun2" 
          type="text" 
          name="noun2" 
          placeholder="Noun2" 
          value={formData.noun2}
          onChange={handleChange}
          />
      </form>
        <form onSubmit={handleSubmit}>
        <input 
        id="adjective" 
        type="text" 
        name="adjective" 
        placeholder="Adjective" 
        value={formData.adjective}
        onChange={handleChange}
        />
    </form>
      <form onSubmit={handleSubmit}>
      <input 
      id="color" 
      type="text" 
      name="color" 
      placeholder="Color" 
      value={formData.color}
      onChange={handleChange}
      />
  </form>
  <div>
    <button>Get Story!</button>
  </div>
  </div>
    )
}

export default MadlibsForm;