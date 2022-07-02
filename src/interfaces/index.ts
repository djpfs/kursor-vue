
export interface iRGB {
  r: number,
  g: number,
  b: number
}

export interface iSetColor {
  colorName: string,
  color: string,
  el: HTMLElement
}

export interface iSetVar {
    propertyName: string
    value: string | null
    el: HTMLElement 
}
