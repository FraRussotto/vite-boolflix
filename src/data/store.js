import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams: {
    api_key: 'e5c6fcdaa18cd280c36d84fffcd4b807',
    language: 'it-IT',
    query: '',
    tipology: '',
  },
  movie: [],
  tv: [],
})