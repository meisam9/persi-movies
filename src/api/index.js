import {create} from 'apisauce';

export const api = create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        'content-type': 'application/json'
    }
})
api.addAsyncResponseTransform(async (response) => {
  
    if (await response.status >= 400 || !response.ok) {
      const error = new Error(response.status || response.problem);
  
      error.status = response.status;
      error.response = response;
      console.log(error)
      throw error;
    }
  });