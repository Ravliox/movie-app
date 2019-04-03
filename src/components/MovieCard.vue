<template>
  <div id = "movie-card">
    <div class="card">
      <div class = "card-image">
        <figure class="image is-4by3">
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
  props: {
    movie: {}
  }
}
</script>

<style lang="scss" scoped>

</style>
