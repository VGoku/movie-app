import React from 'react';
import './App.css'; // Make sure to create this file for styling

const App = () => {
  return (
    <div className="movie-app">
      <header className="app-header">
        <h1>Movie App</h1>
      </header>
      <main className="movie-list">
        <div className="movie-card">
          <h2>Movie Title 1</h2>
          <p>Release Year: 2023</p>
          <p>Rating: 8.5/10</p>
        </div>
        <div class="movie-card">
          <h2>Movie Title 2</h2>
          <p>Release Year: 2022</p>
          <p>Rating: 7.9/10</p>
        </div>
        {/* Add more movie cards as needed */}
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 Movie App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
