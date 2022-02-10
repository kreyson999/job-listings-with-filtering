export const initialState = {
  fetchedJobs: [],
  categories: [],
  jobs: []
}

export function jobsReducer(state, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      const categories = [...state.categories]
      if (!categories.includes(action.category)) {
        categories.push(action.category)
      }
      const filteredJobs = state.fetchedJobs.filter((job) => {
        let isValidate = true;
        categories.forEach((category) => {
          if (!(job.languages.includes(category) || job.tools.includes(category))) {
            isValidate = false
          }
        })
        return isValidate
      })
      return {
        ...state,
        jobs: filteredJobs,
        categories: categories,
      }
    case 'REMOVE_CATEGORY':
      const currentCategories = state.categories.filter((category) => {
        if (category === action.category) {
          return false
        } else {
          return true
        }
      })
      const filteredJobs2 = state.fetchedJobs.filter((job) => {
        let isValidate = true;
        currentCategories.forEach((category) => {
          if (!(job.languages.includes(category) || job.tools.includes(category))) {
            isValidate = false
          }
        })
        return isValidate
      })

      return {
        ...state,
        jobs: filteredJobs2,
        categories: currentCategories,
      }
    case 'LOAD_JOBS':
      return {
        ...state,
        fetchedJobs: action.jobs,
        jobs: action.jobs
      }
    case 'CLEAR_ALL':
      return {
        ...state,
        categories: [],
        jobs: state.fetchedJobs
      }
    default:
      throw new Error('Error with state managment')
  }
}
