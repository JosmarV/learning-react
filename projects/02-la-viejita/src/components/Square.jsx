export const Square = ({ children, isSelected, updateBoard, index, turn}) => {
    const className = `square ${turn} ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index)  
    }
  
    return ( 
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
}