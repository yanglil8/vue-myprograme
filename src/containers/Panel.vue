<template>
  <div class="Panel">
    <div class="Panel-header">
      <slot name="header" />
    </div>
    <div class="Panel-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.Panel{
  .Panel-header{
    background-color: #f1f1f1;
    padding: 1rem;
    border-radius: 0.3rem 0.3rem 0 0;
  }
  .Panel-content{
    background-color: #fff;
    padding: 1rem;
    border-radius:  0 0 0.3rem 0.3rem;
    min-height: 20rem;

  }
}
</style>