import React, { useState } from 'react';

function Form() {
  const [persons, setPersons] = useState([{ name: 'Jorge', age: 31 }, { name: 'Juan', age: 29 }]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setPersons([...persons, { name, age }])
  }

  return (
    <div className="Form">
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Full name" required={false} value={name} onChange={e => setName(e.target.value)}/>
        <input type="number" name="age" placeholder="Age" required value={age} onChange={e => setAge(e.target.value)}/>
        <input type="submit" value="Set" />
      </form>
      <ul>
        {
          persons.map((person, i) => <li key={`${Date.now()}-${i}`}>{person.name} - {person.age}</li>)
        }
      </ul>
    </div>
  );
}

export default Form;
