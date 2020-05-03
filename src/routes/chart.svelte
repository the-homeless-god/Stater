<script>
  import StatList from '../components/stat/List.svelte'
  import StatTotal from '../components/stat/Total.svelte'
  import { dictionary, stats } from '../stores/store.ts'
  import Spinner from 'svelte-spinner'
</script>

<svelte:head>
  <title>{$dictionary.title}</title>
</svelte:head>

<iframe
  src="https://grafana.notify.wtf/d/czwO3F6Wz/max-cases?orgId=1&from=1588322834886&to=1588409234886&allow_embedding=true"
  width="650"
  height="300"
  title="Grafana"
  frameborder="0" />
