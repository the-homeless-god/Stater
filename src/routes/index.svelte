<script>
  import StatList from '../components/stat/List.svelte'
  import StatTotal from '../components/stat/Total.svelte'
</script>

<svelte:head>
  <title>COVID-19</title>
</svelte:head>

<h1 class="full-width flex-center icon-calendar">Statistic for countries</h1>
<StatTotal />
<StatList />
