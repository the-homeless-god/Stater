<script>
  import Select from 'svelte-select'
  import { onMount } from 'svelte'
  import { dictionary } from '../stores/store.ts'
  import EnglishLocale from '../locales/english.locale.ts'
  import RussianLocale from '../locales/russian.locale.ts'
  import CommonTool from 'node-crud-kit/lib/tools/common.tool'

  let locales = [new EnglishLocale(), new RussianLocale()]

  let items = locales.map(locale => {
    return { value: locale.short, label: locale.prefix }
  })

  let selectedValue = undefined

  const getLanguagePreset = () => {
    let output = locales[0]

    let language = localStorage.getItem('language')
    if (CommonTool.isNonEmpty(language)) {
      locales.map(local => {
        if (local.short === language) {
          output = local
        }
      })
    }

    return output
  }

  const updateLanguagePreset = () => {
    let preset = getLanguagePreset()
    dictionary.set(preset)
    selectedValue = items.find(item => item.value === preset.short)
  }

  const handleSelect = event => {
    localStorage.setItem('language', event.detail.value)
    updateLanguagePreset()
  }

  onMount(updateLanguagePreset)
</script>

<Select
  containerStyles="min-width: 50px; margin-right: 10px;"
  placeholder={$dictionary.language.change}
  {items}
  isClearable={false}
  on:select={handleSelect}
  bind:selectedValue />
