<template>
    <button class="base-button" :type="type">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: { type: String, default: '' },
    type: { type: String, default: 'button' }
  }
}
</script>

<style scoped lang="scss">
.base-button {
    display: block;
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #323232;
}
</style>
