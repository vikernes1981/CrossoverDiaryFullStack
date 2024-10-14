import React from "react";
import PropTypes from "prop-types";

function EntryCard({ entry, onClick }) {
  return (
    <div
      className="bg-yellow-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-white"
      onClick={onClick}
    >
      <img
        src={entry.image}
        alt={entry.title}
        className="h-40 w-full object-cover rounded-md mb-3"
        onError={(e) => {
          e.target.onerror = null; // prevents looping
          e.target.src = "https://picsum.photos/200/300"; // fallback image
        }}
      />
      <h2 className="text-xl font-semibold text-yellow-300">{entry.title}</h2>

      <p className="text-yellow-100">
        {new Date(entry.date).toLocaleDateString()}
      </p>
    </div>
  );
}

EntryCard.propTypes = {
  entry: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EntryCard;
