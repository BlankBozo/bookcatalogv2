import './App.css'
import BookCard from './components/BookCard'
import booksData from '../data/books.json'

function App() {
  const books = booksData

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">Donald's Book Catalog</h1>
      </header>

      <main className="content">
        <div className="book-grid">
          {books.map((b) => (
            <BookCard
              key={b.detailsUrl}
              imageSrc={b.imageSrc}
              title={b.title}
              authors={b.authors}
              detailsUrl={b.detailsUrl}
            />
          ))}
          <button className="book-card add-card" aria-label="Add a new book">
            <span className="add-symbol">+</span>
            <span className="add-text">Add</span>
          </button>
        </div>
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} Donald's Book Catalog. No rights reserved.</small>
      </footer>
    </div>
  )
}

export default App
