import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './browseco.css';

const genres = [
  "Action", "Adventure", "Fantasy", "Mature", "Mystery", "Psychological",
  "Xianxia", "Wuxia", "Urban", "Xuanhuan", "Horror", "Harem", "Historical",
  "School Life", "Sci-fi", "Comedy", "Mecha"
];

const novels = [
  { title: "Reverend Insanity", genres: ["Fantasy", "Adventure", "Action","Xianxia", "Mystery"], cover: "./seg_p2/guzhenren-300w.jpg", popularity: 90, trending: 85, lastUpdated: '2022-01-10', url: "./novelpage"},
  { title: "I Shall Seal the Heavens", genres: ["Xianxia", "Mystery","Comedy", "Action","Adventure"], cover: "./seg_p2/woyufengtian-300w.jpg", popularity: 75, trending: 95, lastUpdated: '2024-03-15', url: "./novel2page"},
  { title: "A Record of a Mortal's Journey to Immortality", genres: ["Fantasy", "Xianxia","Action","Adventure","Mature"], cover: "./seg_p2/fanren-300w.jpg", popularity: 88, trending: 70, lastUpdated: '2023-12-01', url: "./novel3page"},
  { title: "Beyond the Timescape", genres: ["Fantasy", "Xianxia","Action","Adventure","Mature"], cover: "./seg_p2/guangy-300w.jpg", popularity: 87, trending: 80, lastUpdated: '2023-12-01', url: "./novel4page"},
  { title: "Epic of the Forsaken Hero", genres: ["Fantasy", "Adventure"], cover: "./seg_p2/book-200h.png", popularity: 90, trending: 85, lastUpdated: '2022-01-10', url: "./not-found"},
  { title: "Mysteries of the East", genres: ["Xianxia", "Mystery"], cover: "./seg_p2/book-200h.png", popularity: 75, trending: 95, lastUpdated: '2024-03-15', url: "./not-found"},
  { title: "School of Magic", genres: ["Fantasy", "School Life"], cover: "./seg_p2/book-200h.png", popularity: 88, trending: 70, lastUpdated: '2023-12-01', url: "./not-found"},
  { title: "Guardians of Lore", genres: ["Fantasy", "Epic"], cover: "./seg_p2/book-200h.png", popularity: 82, trending: 80, lastUpdated: '2022-12-25', url: "./not-found"},
  { title: "The Last Scholar", genres: ["Sci-fi", "Adventure"], cover: "./seg_p2/book-200h.png", popularity: 65, trending: 60, lastUpdated: '2024-01-20', url: "./not-found"},
  { title: "Battle for the Stars", genres: ["Sci-fi", "War"], cover: "./seg_p2/book-200h.png", popularity: 95, trending: 90, lastUpdated: '2023-11-11', url: "./not-found"},
  { title: "The Hidden Kingdom", genres: ["Mystery", "Fantasy"], cover: "./seg_p2/book-200h.png", popularity: 70, trending: 85, lastUpdated: '2023-07-07', url: "./not-found"},
  { title: "Ocean's Whispers", genres: ["Adventure", "Romance"], cover: "./seg_p2/book-200h.png", popularity: 80, trending: 75, lastUpdated: '2022-08-15', url: "./not-found"},
  { title: "Echoes of the Past", genres: ["Historical", "Mystery"], cover: "./seg_p2/book-200h.png", popularity: 78, trending: 82, lastUpdated: '2023-05-05', url: "./not-found"},
  { title: "Neon Dreams", genres: ["Urban", "Sci-fi"], cover: "./seg_p2/book-200h.png", popularity: 69, trending: 77, lastUpdated: '2022-09-09', url: "./not-found"}
];

const Browseco = ({ heading }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortMethod, setSortMethod] = useState('popular');
  const [filteredNovels, setFilteredNovels] = useState(novels);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let results = novels.filter(novel => selectedGenres.every(genre => novel.genres.includes(genre)));
    switch (sortMethod) {
      case 'popular':
        results.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'trending':
        results.sort((a, b) => b.trending - a.trending);
        break;
      case 'updated':
        results.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
        break;
    }
    setFilteredNovels(results);
  }, [selectedGenres, sortMethod]);

  return (
      <div className="browseco-container">
        <div className="sidebar">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="toggle-sidebar">
            Genres <span className="arrow">{isSidebarOpen ? '↑' : '↓'}</span>
          </button>
          <div className={isSidebarOpen ? 'genres-list' : 'hidden'}>
            {genres.map(genre => (
                <button key={genre}
                        className={`genre-button ${selectedGenres.includes(genre) ? 'active' : ''}`}
                        onClick={() => setSelectedGenres(selectedGenres.includes(genre) ? selectedGenres.filter(g => g !== genre) : selectedGenres.length < 2 ? [...selectedGenres, genre] : selectedGenres)}>
                  {genre}
                </button>
            ))}
          </div>
        </div>
        <div className="content">
          <h2>{heading}</h2>
          <div className="sort-options">
            {['popular', 'trending', 'updated'].map(method => (
                <button key={method}
                        className={`sort-button ${sortMethod === method ? 'active-sort' : ''}`}
                        onClick={() => setSortMethod(method)}>
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </button>
            ))}
          </div>
          <div className="novel-list">
            {filteredNovels.map(novel => (
                <div key={novel.title} className="novel-item">
                  <a href={novel.url} className="novel-link">
                    <img src={novel.cover} alt={novel.title} className="novel-cover"/>
                    <h3 className="novel-title">{novel.title}</h3>
                  </a>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

Browseco.propTypes = {
  heading: PropTypes.string,
};

Browseco.defaultProps = {
  heading: 'Order',
};

export default Browseco;


