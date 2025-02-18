import { useState } from 'react'


const Bookshelf = () => {


const initialState = {
  title: '',
  author: ''
}

 const [books, setbooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
])
 const [newBooks, setFormData] = useState(initialState)


 const handleInputChange = (e) => {
  setFormData({...newBooks, [e.target.name]: e.target.value})
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  setbooks([...books, newBooks])
  setFormData(initialState)
}

  return (
  <>

    <div className="bookshelfDiv">
    <div className="formDiv">
    <h3>Add a Book</h3>
    

   <form onSubmit={handleSubmit}>

    <label>BOOK TITLE : </label>
    <input 
    type="text"
    value={newBooks.title} 
    onChange={handleInputChange}
    name='title'
    />


    <label>AUTHOR :</label>
   <input 
   type="text"
  value={newBooks.author} 
   onChange={handleInputChange}
  name="author"
  />
 
 
 <button type="submit">Submit</button>
  </form>
  </div>

  
  <div className="bookCardsDiv">
  {books.map((book) => ( 
    <div>
    <h4>BOOK CARD</h4>
     <h4>Book name : {book.title}</h4>
     <p>Author :  {book.author}</p>
     </div>
     ))}
  
    </div>

  </div>

</>
    
)}
export default Bookshelf
