<script>
  export let segment

  import { onMount } from 'svelte'
  import StatStore from '../stores/stat.store.ts'

  import { dictionary } from '../stores/store.ts'
  import CommonTool from 'node-crud-kit/lib/tools/common.tool'
  import Language from './Language.svelte'

  onMount(async () => {
    await StatStore.fetchStats()
  })
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  /* clearfix */
  ul::after {
    content: '';
    clear: both;
  }

  li {
    display: block;
    float: left;
    cursor: pointer;
  }

  .selected {
    position: relative;
    display: flex;
    align-items: center;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: #04a49c;
    display: block;
    bottom: -1px;
  }

  .nav-link {
    text-decoration: none;
    padding: 1em 0.5em;
    display: flex;
    align-items: center;
  }

  .nav-button {
    padding: 3px;
  }
</style>

<nav>
  <ul class="nav-list">

    <li>
      <span
        class:selected={segment === undefined}
        href="."
        rel="prefetch"
        class="nav-link icon-statusnet">
        <span
          on:click={() => {
            window.open($dictionary.author.link, '_blank')
          }}
          class="nav-button">
          <b>{$dictionary.author.name}</b>
        </span>
      </span>
    </li>

    <li>
      <Language />
    </li>

  </ul>
</nav>
