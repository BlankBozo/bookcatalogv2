import PropTypes from 'prop-types'

function BookCard({ imageSrc, title, authors, detailsUrl }) {
  return (
    <div className="book-card">
      <a href={detailsUrl} target="_blank" rel="noopener noreferrer" className="book-link" aria-label={`Open details for ${title}`}>
        <img src={imageSrc} alt={title} className="book-image" />
      </a>
      <div className="book-info">
        <div className="book-title" title={title}>{title}</div>
        <div className="book-authors" title={authors}>{authors}</div>
        <a href={detailsUrl} target="_blank" rel="noopener noreferrer" className="book-details-anchor">View details</a>
      </div>
    </div>
  )
}

BookCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  detailsUrl: PropTypes.string.isRequired,
}

export default BookCard


