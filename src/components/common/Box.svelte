<script>
  export let classList = ''
</script>

<style>
  .box {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
    margin: 20px;
    padding: 20px;
    max-width: 700px;
    height: fit-content;
  }
</style>

<div class={`box full-flex ${classList}`}>
  <slot />
</div>
