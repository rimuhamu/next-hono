'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState<{
    results: string[];
    duration: number;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined);

      const res = await fetch(`/api/search?q=${input}`);
      const data = (await res.json()) as {
        results: string[];
        duration: number;
      };
      setSearchResults(data);
    };
    fetchData();
  }, [input]);
  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className='text-zinc-900'
        type='text'></input>
    </div>
  );
}
