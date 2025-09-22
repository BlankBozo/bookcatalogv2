
function BookCard({ imageSrc, title, price, detailsUrl }) {
  return (
    <div className="book-card">
      <img src={imageSrc} alt={title} className="book-image" />
      <div className="book-info">
        <div className="book-title" title={title}>{title}</div>
        <div className="book-price" title={price}>{price}</div>
        <a href={detailsUrl} target="_blank" rel="noopener noreferrer" className="book-details-anchor">Learn more</a>
      </div>
    </div>
  )
}

export default BookCard


