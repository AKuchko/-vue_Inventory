<template>
    <label class="base-input">
        {{ label }}
        <input :type="type" class="base-input__input" @input="setModel">
    </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: { type: String, default: 'Base Label' },
    type: { type: String, default: 'text' },
    id: { type: String, default: '' }
  },
  data () {
    return {
      inputModel: ''
    }
  },
  methods: {
    setModel (e) {
      this.inputModel = e.target.value
    }
  }
}
</script>

<style scoped lang="scss">
.base-input {
    display: block;
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #323232;

    &__input {
        margin-left: 10px;
        background: transparent;
    }
}
</style>
