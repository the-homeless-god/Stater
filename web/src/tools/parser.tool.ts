//@ts-nocheck
export const parser = () => {
  //@ts-ignore
  let tableBody = []

  let table = document.querySelector('#covid19-container > table')

  if (table && table.tHead) {
    let getNumberText = item => {
      return parseInt(item.replace(/[^\d]/g, ''))
    }

    Array.from(table.tBodies[0].rows).forEach(row => {
      let item = {
        country: '',
        icon: '',
        case: 0,
        death: 0,
        recov: 0,
      }

      //@ts-ignore
      Array.from(row.cells).forEach((cell, index) => {
        switch (index) {
          case 0:
            //@ts-ignore
            let img = cell.querySelector('img')
            if (img) {
              item.icon = img.src
            }
            break
          case 1:
            //@ts-ignore
            let a = cell.querySelector('a')
            if (a && a.firstChild) {
              if (a.firstChild.textContent) {
                item.country = a.firstChild.textContent.replace('(', '').trim()
              }
            }
            break
          case 2:
            //@ts-ignore
            item.case = getNumberText(cell.innerText)
            break
          case 3:
            //@ts-ignore
            item.death = getNumberText(cell.innerText)
            break
          case 4:
            //@ts-ignore
            item.recov = getNumberText(cell.innerText)
            break
        }
      })

      if (item.country !== '') {
        tableBody.push(item)
      }
    })
  }

  return tableBody
}
