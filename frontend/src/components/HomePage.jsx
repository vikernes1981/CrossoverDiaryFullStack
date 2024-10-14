import { useState, useEffect } from "react";
import Header from "./Header";
import EntryList from "./EntryList";
import AddEntryModal from "./AddEntryModal";

function HomePage() {
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch posts from the backend when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/entries"); // Fetching posts
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Parse the JSON response
        console.log("Fetched entries:", data); // Log the fetched data
        setEntries(data); // Update the state with fetched entries
      } catch (error) {
        console.error("Failed to fetch posts:", error);
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

  const handleLogoutClick = () => {
    // Your logout logic here
  };

  const handleEntryClick = (entryId) => {
    // Your entry click logic here
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-yellow-100 to-yellow-900">
      <div className="flex justify-center mb-6">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOeUkK_GqGNZYUf2Jah9dsOsIdxLMC2DXfA&s"
          alt="Login Illustration"
          className="h-full w-full sm:h-40 sm:w-40 lg:w-60 lg:h-60"
        /> */}
      </div>
      <div className="flex justify-center mb-6">
        <Header
          onAddEntryClick={handleAddEntryClick}
          onLogoutClick={handleLogoutClick}
        />
      </div>
      <EntryList entries={entries} onEntryClick={handleEntryClick} />
      <AddEntryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEntry}
        entries={entries}
      />
      <p class="absolute bottom-0 right-0 text-yellow-300 mb-2 mr-2">
        © JS 2024
      </p>
    </div>
  );
}

export default HomePage;
