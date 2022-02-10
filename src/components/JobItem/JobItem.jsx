import { Chip, FilterItem } from '..';
import './JobItem.scss'

const JobItem = ({job, dispatch}) => {
  return (
    <li 
    style={{
      borderLeft: job.featured ? '5px solid var(--desaturated-dark-cyan)' : '5px solid white'
    }}
    className='job__item'>
      <div className='job__item__avatar'>
        <img src={job.logo} alt={job.company} />
      </div>
      <div>
        
        <div className='job__item__top'>
          <p className="job__item__top__company">
            {job.company}
          </p>
          {job.new && <Chip text={'New!'} isFeatured={false}/>}
          {job.featured && <Chip text={'Featured'} isFeatured={true}/>}
        </div>
        <h2>{job.position}</h2>
        <div className='job__item__features'>
          <p>{job.postedAt}</p>
          <div className='job__item__features__circle'></div>
          <p>{job.contract}</p>
          <div className='job__item__features__circle'></div>
          <p>{job.location}</p>
        </div>
      </div>
      <ul className='job__item__categories'>
        {job.languages.map((category, index) => (
          <FilterItem dispatch={dispatch} title={category} removable={true} key={index}/>
        ))}
        {job.tools.map((category, index) => (
          <FilterItem dispatch={dispatch} title={category} removable={true} key={index}/>
        ))}
      </ul>
    </li>
  );
}
 
export default JobItem;