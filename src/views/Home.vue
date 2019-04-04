<template>
  <div class="home">
    <p>Count: {{ count }}</p>
    <p>
      <button @click="increment()">+</button>
      <button @click="decrement()">-</button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import {sync, call} from 'vuex-pathify';

export default {
  name: 'home',
  computed: sync('*'),
  methods: call('*')
}

console.log({
  name: 'home',
  computed: sync('*'),
  methods: call('*')
});

</script>
