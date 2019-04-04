<template>
  <div class="home">
    <p>Count: {{ $store.state.count }}</p>
    <p>
      <button @click="$store.commit('increment')">+</button>
      <button @click="$store.commit('decrement')">-</button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>
