<script>
  console.log('Started:', new Date())
</script>

<style>
  h1,
  figure {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>COVID-19 stat</title>
</svelte:head>

<h1 class="full-width">Full stat about COVID-19</h1>

<figure class="full-width">
  <img
    alt="World"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/COVID-19_Outbreak_World_Map_per_Capita.svg/2880px-COVID-19_Outbreak_World_Map_per_Capita.svg.png" />
</figure>
