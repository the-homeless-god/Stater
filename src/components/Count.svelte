<script>
  import Select from 'svelte-select'
  import { onMount } from 'svelte'
  import { dictionary, stats, itemCount } from '../stores/store.ts'
  import EnglishLocale from '../locales/english.locale.ts'
  import RussianLocale from '../locales/russian.locale.ts'
  import CommonTool from 'node-crud-kit/lib/tools/common.tool'

  let elements = []
  let items = []

  let selectedValue = undefined

  const getPreset = storeItem => {
    let output = null

    if (CommonTool.isNonEmpty(storeItem)) {
      let founded = false
      elements.map(element => {
        if (element === parseInt(storeItem)) {
          output = element
          founded = true
        }
      })

      if (!founded) {
        output = storeItem
      }
    } else {
      output = elements[0]
    }

    return output
  }

  const updatePreset = storeItem => {
    let preset = getPreset(storeItem)
    itemCount.set(preset)
    selectedValue = items.find(item => item.value === preset)
  }

  const handleSelect = event => {
    localStorage.setItem('item_count', event.detail.value)
    updatePreset(localStorage.getItem('item_count'))
  }

  const updateElements = () => {
    elements = Array.from(Array($stats.length + 1).keys())

    items = elements.reduce((acc, element) => {
      if (element !== 0) {
        let text = CommonTool.convertNumberStr(
          element,
          $dictionary.item.count.forms,
        )
        let elementValue = CommonTool.numberWithSpaces(element)

        let textValue = `${elementValue} ${text}`

        acc.push({ value: element, label: textValue })
      }
      return acc
    }, [])
  }

  const updateValueByStore = () => {
    updateElements()
    let preset = getPreset($itemCount)
    selectedValue = items.find(item => item.value === preset)
  }

  dictionary.subscribe(value => {
    updateValueByStore()
  })

  stats.subscribe(value => {
    updateValueByStore()
  })

  onMount(() => {
    updatePreset(localStorage.getItem('item_count'))
  })
</script>

<Select
  containerStyles="min-width: 120px; margin: 10px; justify-content: center;"
  placeholder={$dictionary.item.count.change}
  {items}
  on:select={handleSelect}
  isClearable={false}
  bind:selectedValue />
