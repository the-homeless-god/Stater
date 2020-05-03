<script>
  import StatList from '../components/stat/List.svelte'
  import StatTotal from '../components/stat/Total.svelte'
  import { dictionary, stats } from '../stores/store.ts'
  import Spinner from 'svelte-spinner'

  const endpoint =
    'https://grafana.notify.wtf/d/czwO3F6Wz/max-cases?orgId=1&from=1588322834886&to=1588409234886&kiosk&fullscreen&panelId='
  const panels = [
    {
      id: 12,
      title: 'Compare',
    },
    {
      id: 2,
      title: 'Maximum country',
    },
    {
      id: 7,
      title: 'Count of countries',
    },
    {
      id: 4,
      title: 'Minimum country',
    },
    {
      id: 8,
      title: 'Count of cases',
    },
    {
      id: 10,
      title: 'Count of recoveries',
    },
    {
      id: 9,
      title: 'Count of deaths',
    },
  ]
</script>

<svelte:head>
  <title>{$dictionary.title}</title>
</svelte:head>

{#each panels as panel}
  <iframe
    src={`${endpoint}${panel.id}`}
    width="650"
    height="300"
    title={panel.title}
    frameborder="0" />
{/each}
