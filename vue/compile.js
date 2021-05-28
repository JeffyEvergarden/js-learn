import { baseCompile } from '@vue/compiler-core'

let app = document.getElementById('suyan-app')

let ret = baseCompile(app.innerHTML)

console.log(ret)
