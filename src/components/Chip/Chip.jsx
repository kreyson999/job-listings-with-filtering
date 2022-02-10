import './Chip.scss'

const Chip = ({text, isFeatured}) => {
  return (
    <div 
    style={{
      backgroundColor: isFeatured ? 'var(--very--dark-grayish-cyan)' : 'var(--desaturated-dark-cyan)'
    }}
    className="chip">
      {text}
    </div>
  );
}
 
export default Chip;