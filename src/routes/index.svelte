<script>
  import StatList from '../components/stat/List.svelte'
  import StatTotal from '../components/stat/Total.svelte'
  import { dictionary } from '../stores/store.ts'
</script>

<style>
  .icon-crown:before {
    padding-top: 7px;
    width: 100%;
  }

  .main-title {
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
  <title>{$dictionary.title}</title>
</svelte:head>

<h1 class="main-title icon-crown">{$dictionary.subtitle}</h1>
<StatTotal />
<StatList />
