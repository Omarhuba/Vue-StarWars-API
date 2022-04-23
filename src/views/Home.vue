<template>
  <div class="home">
    <header>
      <h1>Star Wars Catalog</h1>
    </header>
    <section class="character-list">
      <ul>
        <li></li>
      </ul>
      <span>
        <button>&lt;</button>
        <p>1 / 9</p>
        <button>&gt;</button>
      </span>
    </section>
    <section class="character-info"></section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>


//  1 timme 16 minuter
<style>

html,body{
  margin: 0;
  height: 100%;
}
h1{
  font-family: 'Ropa Sans', sans-serif;
  color: #FFD600;
  font-size: 5rem;
  width: 380px;
  margin: 2rem;
}
header{
  background-image: url('../assets/header2.png');
  background-size: cover;
  height: 30vh;
}
.home{
  background-color: #535556;
  display: grid;
  grid-template-columns: 1fr 1fr;  
  gap: 8rem;
}
span{
  display: flex;
  color: #FFF;
}
</style>
