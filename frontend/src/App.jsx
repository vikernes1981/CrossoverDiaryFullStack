import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreatePostPage from './components/CreatePostPage'; // Import Create Post
import PostDetailsPage from './components/PostDetailsPage'; // Import Post Details
import UpdateEntryPage from './components/UpdateEntryModal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/entries/:id" element={<PostDetailsPage />} />
        <Route path="/entries/:id" element={<UpdateEntryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
