export const isValidPassword = (password: string) => {
  const reg = /(?=.*\d{1,50})(?=.*[~`!@#$%\\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/
  return reg.test(password)
}
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

export const isValidUsername = (str: string) => ['admin', 'editor'].indexOf(str.trim()) >= 0
