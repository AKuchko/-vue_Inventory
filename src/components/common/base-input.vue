<template>
    <label class="base-input">
        {{ label }}
        <select v-if="(type === 'select')" class="base-input__input" @change="setModel">
            <option v-for="(option, key) in options" :key="key" :value="option">{{ option }}</option>
        </select>
        <input v-else :type="type" class="base-input__input" @input="setModel">
    </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: { type: String, default: 'Base Label' },
    type: { type: String, default: 'text' },
    options: { type: Object },
    id: { type: String, default: '' }
  },
  mounted () {
    if (this.type === 'select') this.inputModel = 'blue'
  },
  data () {
    return {
      inputModel: ''
    }
  },
  methods: {
    setModel (e) {
      this.inputModel = e.target.value
      console.log(e.target.value)
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
