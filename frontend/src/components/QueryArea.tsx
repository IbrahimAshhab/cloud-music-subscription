import React, { useState } from 'react';

// Mock music data (this simulates data stored in DynamoDB)
const mockMusicData = [
  {
    id: '1',
    title: 'Rivers of Babylon',
    artist: 'Jimmy Buffett',
    year: '1974',
    album: 'Greatest Hits',
    artistImageUrl: 'https://via.placeholder.com/150?text=Jimmy+Buffett', // Mock image URL
  },
  {
    id: '67',
    title: 'Rivers of Babylon',
    artist: 'Jimmy Buffett',
    year: '1974',
    album: 'Greatest Hits FM',
    artistImageUrl: 'https://via.placeholder.com/150?text=Jimmy+Buffett', // Mock image URL
  },
  {
    id: '2',
    title: 'Fearless',
    artist: 'Taylor Swift',
    year: '2008',
    album: 'Fearless',
    artistImageUrl: 'https://via.placeholder.com/150?text=Taylor+Swift', // Mock image URL
  },
  {
    id: '3',
    title: 'White Blood Cells',
    artist: 'The White Stripes',
    year: '2001',
    album: 'White Blood Cells',
    artistImageUrl: 'https://via.placeholder.com/150?text=The+White+Stripes', // Mock image URL
  },
  {
    id: '4',
    title: 'Rivers of Babylon',
    artist: 'Boney M.',
    year: '1978',
    album: 'Nightflight to Venus',
    artistImageUrl: 'https://via.placeholder.com/150?text=Boney+M', // Mock image URL
  },
];

interface Music {
  id: string;
  title: string;
  artist: string;
  year: string;
  album: string;
  artistImageUrl: string;
}

const QueryArea: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [album, setAlbum] = useState<string>('');
  const [results, setResults] = useState<Music[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Handle querying music based on the filled fields
  const handleQuery = () => {
    if (!title && !year && !artist && !album) {
      setErrorMessage('Please fill in at least one field.');
      setResults([]);
      return;
    }

    // Filter music based on query conditions (AND operator by default)
    const filteredResults = mockMusicData.filter((music) => {
      return (
        (title ? music.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (year ? music.year === year : true) &&
        (artist ? music.artist.toLowerCase().includes(artist.toLowerCase()) : true) &&
        (album ? music.album.toLowerCase().includes(album.toLowerCase()) : true)
      );
    });

    if (filteredResults.length === 0) {
      setErrorMessage('No result is retrieved. Please query again.');
      setResults([]);
    } else {
      setErrorMessage('');
      setResults(filteredResults);
    }
  };

  // Handle subscribing to music
  const handleSubscribe = (music: Music) => {
    // You can implement the functionality to add music to the subscription area and DynamoDB here
    console.log('Subscribed to:', music);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Query Area</h2>

      {/* Query Inputs */}
      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleQuery}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Query
        </button>
      </div>

      {/* Error message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Results */}
      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((music) => (
            <div
              key={music.id}
              className="flex items-center bg-white p-4 rounded-lg shadow-md"
            >
              {/* Artist Image */}
              <img
                src={music.artistImageUrl}
                alt={music.artist}
                className="w-24 h-24 object-cover rounded-full"
              />

              {/* Music Information (stacked vertically) */}
              <div className="ml-4 flex flex-col">
                <h3 className="text-xl font-semibold">{music.title}</h3>
                <p className="text-gray-600">Artist: {music.artist}</p>
                <p className="text-gray-600">Year: {music.year}</p>
                <p className="text-gray-600">Album: {music.album}</p>
              </div>
                <button
                  onClick={() => handleSubscribe(music)}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition ml-auto"
                >
                  Subscribe
                </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default QueryArea;
