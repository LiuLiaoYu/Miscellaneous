const regex1 = /{([^{}]*)}/g
const regex2 = /<([^<>]*)>/g

export function wrap(fmt: string, data: any, return_str = "") {
  let flag = true
  let res = fmt.replace(regex1, (x, token) => {
    if (data[token]) return data[token]
    flag = false
    return return_str
  })
  return flag ? res : ""
}

export function wrapFormat(fmt: string, data: any) {
  let flag = true
  while (flag) {
    flag = false
    fmt = fmt.replace(regex2, (x, token) => {
      flag = true; return wrap(token, data)
    })
  }
  return wrap(fmt, data)
}
