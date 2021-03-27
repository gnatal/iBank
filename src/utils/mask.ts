export const maskCPF = (cpfValue: string) => {
  const maskParts = []

  //000.000.000-00 => 14 chars 11 numbers 2 dots 1 hifen
  // ceil(14/3) => 4

  const numberOfParts = Math.ceil(cpfValue.length / 3)

  //get the parts of the cpf
  for (let i = 0; i < numberOfParts; i++) {
    maskParts.push(cpfValue.slice(3 * i, 3 * i + 3))
  }

  const mask = `${maskParts.slice(0, 3).join('.')}${
    maskParts.slice(3).length === 0 ? '' : `-${maskParts.slice(3).join('')}`
  }`

  return mask
}

export const removeMaskCPF = (mask: string) => {
  return mask
    .split('')
    .filter((char) => !isNaN(Number(char)))
    .join('')
}
