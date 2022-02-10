import './FilterItem.scss'

const FilterItem = ({title, removable, dispatch}) => {
  return (
    <li onClick={removable ? () => dispatch({type: 'ADD_CATEGORY', category: title}) : null} className="filter__item">
      <span>{title}</span>
      {removable ?
        null : (
        <button onClick={() => dispatch({type: 'REMOVE_CATEGORY', category: title})} className='filter__item__button'>
          <img src="/images/icon-remove.svg" alt="Remove Filter"/>
        </button>
      )}
    </li>
  );
}
 
export default FilterItem;