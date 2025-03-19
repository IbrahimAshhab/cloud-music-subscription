import React, { useState } from 'react';

// Mock data: Array of subscribed music
const mockMusicData = [
  {
    id: '1',
    title: 'Song 1',
    artist: 'Artist 1',
    year: '2022',
    album: 'Album 1',
    artistImageUrl: 'https://via.placeholder.com/150?text=Artist+1', // Mock image URL
  },
  {
    id: '2',
    title: 'Song 2',
    artist: 'Artist 2',
    year: '2021',
    album: 'Album 2',
    artistImageUrl: 'https://via.placeholder.com/150?text=Artist+2', // Mock image URL
  },
  {
    id: '3',
    title: 'Song 3',
    artist: 'Artist 3',
    year: '2020',
    album: 'Album 3',
    artistImageUrl: 'https://via.placeholder.com/150?text=Artist+3', // Mock image URL
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

const SubscriptionArea: React.FC = () => {
  const [subscribedMusic, setSubscribedMusic] = useState<Music[]>(mockMusicData);

  // Handle removing music from the list
  const handleRemoveMusic = (musicId: string) => {
    // Remove the music from the state (UI) after the "Remove" button is clicked
    setSubscribedMusic(subscribedMusic.filter((music) => music.id !== musicId));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Subscribed Music</h2>

      <div className="space-y-6">
        {subscribedMusic.length > 0 ? (
          subscribedMusic.map((music) => (
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
              {/* Remove Button */}
              <button
                onClick={() => handleRemoveMusic(music.id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition ml-auto"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No subscribed music found.</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionArea;
