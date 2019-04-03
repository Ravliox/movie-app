<template>
  <div id = "movie-list">
    <h1> Movie list </h1>
    <!-- when typing in the input call the search method -->
    <input class="input" type="text" @keyup="search()" v-model="searchWord">

    <!-- if movieObject is not null, pass it down to the MovieCard component -->
    <MovieCard :movie="movieObject" v-if="movieObject"></MovieCard>
    <h1 v-else> There are no search results! </h1>
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
    // method that calls the api
    search() {
      this.movieObject = null;    // reset the movieObject variable at each call
      console.log(this.searchWord);
      this.$http.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&t=${this.searchWord}`).then(data => {
        //extract the data we need from the response object
        this.movieObject = {
          title: data.body.Title,
          img: data.body.Poster,
          rated: data.body.Rated,
          rating: data.body.imdbRating
        };
        console.log(this.movieObject);
        //if the result returns no movie(there is no title) set the movieObject to null
        if (!this.movieObject.title) {
          this.movieObject = null;
        }
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
