<template>
    <PulseLoader
            v-if="loading"
            :loading="loading"
            :color="color"
            :class="{'my-3': margin}"
            :size="size"></PulseLoader>
</template>

<script>
  export default {
    name: 'Loader',
    props: {
      margin: {
        type: Boolean,
        default: true
      },
      loading: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: '#ffc107',
      },
      size: {
        type: Number,
        default: 12,
      },
    },
  };
</script>
