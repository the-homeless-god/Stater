<script>
  export let segment

  import { onMount } from 'svelte'

  import { dictionary } from '../stores/store.ts'
  import CommonTool from 'node-crud-kit/lib/tools/common.tool'
  import Language from './Language.svelte'
  import Theme from './Theme.svelte'
  import Count from './Count.svelte'
  import VisitNow from './visit/Now.svelte'
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    font-weight: 300;
    width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  /* clearfix */
  ul::after {
    content: '';
    clear: both;
  }

  @media (max-width: 420px) {
    li {
      justify-content: center;
    }
  }

  @media (min-width: 421px) {
    li {
      justify-content: space-between;
    }
  }

  li {
    display: block;
    float: left;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0px 15px;
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

      <span class="full-flex option-picker">
        <VisitNow />
        <Count />
        <Language />
        <Theme />
      </span>
    </li>

  </ul>
</nav>
