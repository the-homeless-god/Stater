import { Writable } from 'svelte/store'

export default class StoreTool<T> {
  public addOrUpdate = (store: Writable<T>, isUpdate: boolean, value: T): void => {
    store.set(value)
  }
}
