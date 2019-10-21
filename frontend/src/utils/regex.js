const letter = '[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÇç]'


export const nameRegex = new RegExp(`${letter}+ ${letter}+( ${letter}+)?`)
