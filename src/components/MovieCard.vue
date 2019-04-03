<template>
  <div id = "movie-card">
    <div class="card">
      <div class = "card-image">
        <figure class="image is-square">
          <img :src="movie.img">
        </figure>
      </div>
      <div class = "card-content">
        <h2> {{ movie.title }} </h2>
        <p> {{ movie.rated }} </p>
        <p> {{ movie.rating }} </p> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // movie prop that is being passed from the MovieList
  props: {
    movie: {}
  }
}
</script>


<style lang="scss" scoped>

#movie-card {
  margin:auto;
  margin-top: 50px;
  width: 50%;
}

</style>
