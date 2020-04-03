<script>
  import { createEventDispatcher, onDestroy } from 'svelte'
  const dispatch = createEventDispatcher()
  const close = () => dispatch('close')
  const handle_keydown = e => {
    if (e.key === 'Escape') {
      close()
      return
    }
    if (e.key === 'Tab') {
      // trap focus
      const nodes = modal.querySelectorAll('*')
      const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0)
      let index = tabbable.indexOf(document.activeElement)
      if (index === -1 && e.shiftKey) index = 0
      index += tabbable.length + (e.shiftKey ? -1 : 1)
      index %= tabbable.length
      tabbable[index].focus()
      e.preventDefault()
    }
  }
  const previously_focused =
    typeof document !== 'undefined' && document.activeElement
  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus()
    })
  }
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  .modal {
    position: relative;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    padding: 1em;
    border-radius: 0.2em;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    z-index: 1;
  }
</style>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} />

<div class="modal" role="dialog" aria-modal="true">
  <slot />
</div>
