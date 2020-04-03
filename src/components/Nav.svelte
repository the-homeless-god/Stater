<script>
  export let segment

  import { onMount } from 'svelte'
  import StatStore from '../stores/stat.store.ts'

  import CommonTool from 'node-crud-kit/lib/tools/common.tool'

  onMount(async () => {
    await StatStore.fetchStats()
  })
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
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

  .nav-list a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: flex;
    align-items: center;
  }
</style>

<nav>
  <ul class="nav-list">
    <li>
      <a class="icon-info" class:selected={segment === undefined} href=".">
        Main
      </a>
    </li>

    <li>
      <a
        class:selected={segment === 'stat'}
        href="stat"
        rel="prefetch"
        class="icon-statusnet">
        Contry stat
      </a>
    </li>

  </ul>
</nav>
