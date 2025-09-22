import './App.css'
import BookCard from './components/BookCard'
import frameworkImg from './assets/images/Framework.png'
import pythonImg from './assets/images/Python.png'

function App() {
  const books = [
    {
      imageSrc: frameworkImg,
      title: 'Build Your Own Test Framework',
      authors: 'Daniel Irvine',
      detailsUrl: 'https://itbook.store/books/9781484292464',
    },
    {
      imageSrc: pythonImg,
      title: "Beginner's Guide to Streamlit with Python",
      authors: 'Sujay Raghavendra',
      detailsUrl: 'https://itbook.store/books/9781484289822',
    },
  ]

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
