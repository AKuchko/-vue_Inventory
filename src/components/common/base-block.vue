<template>
    <div class="base-block">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'BaseBlock'
}
</script>

<style lang="scss">
.base-block {
    background: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 12px;
}
</style>
