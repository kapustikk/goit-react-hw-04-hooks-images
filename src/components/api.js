import axios from 'axios';

const fetchImg = (query = '', page = 1) => {
  const apiKey = '19054641-bf36a8a09cd65ed4eb613a5e0';
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12
`,
    )
    .then(res => res.data.hits);
};

const api = { fetchImg };
export default api;
