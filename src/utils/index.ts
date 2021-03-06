import { iSetVar,iSetColor, iRGB } from "src/interfaces"

const setVar = ({ propertyName, value, el }: iSetVar) => {
  if (!el) {
    document.documentElement.style.setProperty(`--k-${propertyName}`, value)
  } else {
    el.style.setProperty(`--k-${propertyName}`, value)
  }
}

const setColor = ({ colorName, color, el } : iSetColor) => {
  function hexToRgb(hex: string) : iRGB | null {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b
    })

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  let isRGB = /^(rgb|rgba)/.test(color)
  let isHEX = /^(#)/.test(color)
  let newColor

  if (isRGB) {
    let arrayColor = color.replace(/[rgba()]/g, '').split(',')

    newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`
    setVar({ propertyName: colorName, value: newColor, el })
  } else if (isHEX) {
    let rgb = hexToRgb(color)

    if (rgb) {
      newColor = `${rgb.r},${rgb.g},${rgb.b}`
      setVar({ propertyName: colorName, value: newColor, el })
    }
  }
}

export { setColor }
