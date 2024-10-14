import { useState, useEffect } from 'react';
import Header from './Header';
import EntryList from './EntryList';
import AddEntryModal from './AddEntryModal';

function HomePage() {
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch posts from the backend when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/entries'); // Fetching posts
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the JSON response
        console.log('Fetched entries:', data); // Log the fetched data
        setEntries(data); // Update the state with fetched entries
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleAddEntryClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSaveEntry = (entry) => {
    const updatedEntries = [...entries, entry];
    setEntries(updatedEntries);
    setIsModalOpen(false);
  };

  const handleEntryClick = (entryId) => {
    // Your entry click logic here
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-red-400 to-gray-700">
      <div className="relative w-full h-64 mb-6">
        <img src="https://png.pngtree.com/background/20230612/original/pngtree-wooden-wall-with-various-plants-growing-in-it-picture-image_3176183.jpg" alt="Login Illustration" className="absolute inset-0 object-cover w-full h-full" />
      </div>
      <div className="flex justify-center mb-6">
        <Header onAddEntryClick={handleAddEntryClick} />
      </div>
      <EntryList entries={entries} onEntryClick={handleEntryClick} />
      <AddEntryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEntry}
        entries={entries}
      />
    </div>
  );
}

export default HomePage;
