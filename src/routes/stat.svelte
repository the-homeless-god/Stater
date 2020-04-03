<script>
  import StatList from '../components/stat/List.svelte'
  import StatTotal from '../components/stat/Total.svelte'
</script>

<svelte:head>
  <title>Calendar</title>
</svelte:head>

<h1 class="icon-calendar">Statistic for countries (sync each 15 minutes)</h1>
<StatTotal />
<StatList />
