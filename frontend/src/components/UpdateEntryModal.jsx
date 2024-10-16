import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { updatePost } from "../services/postService"; // Adjust the import path accordingly

function UpdateEntryModal({ isOpen, onClose, onUpdate, entry }) {
  // Add prop validation
  UpdateEntryModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    entry: PropTypes.object.isRequired,
  };
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (entry) {
            setTitle(entry.title);
            setContent(entry.content);
            setImage(entry.image || '');
        }
    }, [entry]);

    const handleUpdate = async () => {
        if (!title && !content && !image) {
            alert('Please fill in at least one field');
            return;
        }

        const updatedFields = {};
        if (title) updatedFields.title = title;
        if (content) updatedFields.content = content;
        if (image) updatedFields.image = image;

    try {
      const response = await updatePost(entry.id, updatedFields);
      onUpdate(response);
      onClose();
    } catch (error) {
      console.error("Error updating the entry:", error);
      alert("An error occurred while updating the entry. Please try again.");
    }
  };

  const handleBackToHomepage = () => {
    navigate("/");
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-yellow-200 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-yellow-600">
          Update Entry
        </h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-4 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full p-3 mb-6 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
            <input
                    type="text"
                    placeholder="Image URL"
                    className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
        <div className="flex justify-end">
          <button
            className="bg-yellow-400 text-yellow-100 px-4 py-2 rounded-lg mr-2 hover:bg-yellow-300 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-yellow-600 text-yellow-100 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="bg-yellow-800 text-yellow-100 px-4 py-2 rounded-lg ml-2 hover:bg-yellow-700 transition-colors"
            onClick={handleBackToHomepage}
          >
            Back to Homepage
          </button>

        </div>
      </div>
    </div>
  );
}

export default UpdateEntryModal;
