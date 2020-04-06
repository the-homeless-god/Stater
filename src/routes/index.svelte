<script>
  import StatList from '../components/stat/List.svelte'
  import StatTotal from '../components/stat/Total.svelte'
  import { dictionary, stats } from '../stores/store.ts'
  import Spinner from 'svelte-spinner'
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
    margin-top: 0;
  }
</style>

<svelte:head>
  <title>{$dictionary.title}</title>
</svelte:head>

<h1 class="main-title icon-crown">{$dictionary.subtitle}</h1>
{#if $stats && $stats.length > 0}
  <StatTotal />
  <StatList />
{:else}
  <Spinner size="100" speed="750" color="#A82124" thickness="2" gap="40" />
{/if}
