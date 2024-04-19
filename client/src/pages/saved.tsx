import { useState } from 'react';

function Saved() {
  const [name, setName] = useState('');
  console.log('name is , ', name);
  function handleCreate() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourite_lists`, {
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default Saved;
