const letter = '[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÇç0-9]'

export const nameRegex = new RegExp(`${letter}+(( ${letter}+)+)?`)
