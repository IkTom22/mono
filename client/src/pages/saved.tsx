import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
function Saved() {
  const [name, setName] = useState('');
  const [favouriteLists, setFavouriteLists] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  useEffect(() => {
    async function checkUser() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/check_user`, {
        credentials: 'include',
      });
      const userCheck = await res.json();
      if (userCheck.logged_in) {
        setIsLoggedIn(true);
      } else {
        console.log(userCheck);
        router.push('/');
      }
    }
    checkUser();
  }, []);
  useEffect(() => {
    async function getFavouriteLists() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/favourite_lists`,
        {
          credentials: 'include',
        },
      );
      const fetchedFavouriteLists = await res.json();
      console.log('give me the listing', fetchedFavouriteLists);
      setFavouriteLists(fetchedFavouriteLists);
    }
    if (isLoggedIn) {
      getFavouriteLists();
    }
  }, [isLoggedIn]);
  console.log('favouriteLists is.. ', favouriteLists);
  console.log('name is , ', name);
  function handleCreate() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourite_lists`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
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
      <div>
        {favouriteLists.map((fav) => (
          <p>{fav.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Saved;
