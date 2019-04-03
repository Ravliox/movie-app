<template>
  <div id = "movie-list">
    <h1> Movie list </h1>
    <input class="input" type="text" @keyup="search()" v-model="searchWord">
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard' 

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      searchWord: '',
      apiKey: 'ed5ac044',
      movieObject: null
    }
  },
  methods: {
    search() {
      this.movieObject = null;
      console.log(this.searchWord);
      this.$http.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&t=${this.searchWord}`).then(data => {
        
        this.movieObject = {
          title: data.body.Title,
          img: data.body.Poster,
          rated: data.body.Rated,
          rating: data.body.imdbRating
        };
        console.log(this.movieObject);
      })
    }
  }
}
</script>

<style lang="scss" scoped>

#movie-list {
  width: 50%;
  margin: auto;
}

</style>
