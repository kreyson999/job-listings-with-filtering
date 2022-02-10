import '../styles/App.scss'

import { FilterItem, JobItem } from "../components";
import { useEffect, useReducer } from 'react';
import { jobsReducer, initialState } from '../reducers/JobsReducer';

function App() {
  const [state, dispatch] = useReducer(jobsReducer, initialState)

  useEffect(() => {
    fetch('/data.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {        
      dispatch({type: 'LOAD_JOBS', jobs: data})
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className="filters">
        {state.categories.length > 0 && <div className="filters__container">
          <ul className="filters__container__list">
            {state.categories.map((category, index) => (
              <FilterItem dispatch={dispatch} title={category} key={index}/>
            ))}
          </ul>
          <button onClick={() => dispatch({type: 'CLEAR_ALL'})} className="filters__container__button">Clear</button>
        </div>}
      </div>
      <ul className="jobs">
        {state && state.jobs.map((job) => (
          <JobItem dispatch={dispatch} job={job} key={job.id}/> 
        ))}

        {/* {isLoading ? <Loader/> : 
        apiError !== '' ? 
        <ErrorModal error={apiError}/> :

        data.map((job) => (
          <JobItem job={job} key={job.id}/>
        ))} */}
      </ul>
    </>
  );
}

export default App;
