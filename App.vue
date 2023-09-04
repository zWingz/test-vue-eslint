<template>
  <div>1</div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue'
  const test = 1;
    const b = 2;
      const test = defineComponent({
        props: {
          test: String,
        },
        render() {
          return <div>test</div>
        }
      })
</script>
