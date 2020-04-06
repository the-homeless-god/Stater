<script>
  import io from 'socket.io-client'
  import { fade } from 'svelte/transition'
  import Select from 'svelte-select'
  import Box from '../common/Box.svelte'
  import { dictionary, stats } from '../../stores/store.ts'

  const socket = io()

  let userCount = 0
  let totalCount = 0

  const updateCounts = socketMessage => {
    userCount = socketMessage.userCount
    totalCount = socketMessage.totalCount
  }

  const updateStats = socketMessage => {
    stats.set(socketMessage.stats)
  }

  socket.on('message', updateCounts)
  socket.on('user joined', updateCounts)
  socket.on('user left', updateCounts)
  socket.on('stats updated', updateStats)
</script>

<style>
  span {
    margin: 10px;
  }
</style>

<span transition:fade class="btn full-width icon-user">
  {$dictionary.visit.now} {userCount}
</span>

<span transition:fade class="btn full-width icon-user">
  {$dictionary.visit.total} {totalCount}
</span>
