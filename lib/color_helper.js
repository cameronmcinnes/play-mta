// fn to programatically lighten or darken hex color;
export const shadeHexColor = (color, percent) => {
  let R = parseInt(color.substring(1,3), 16);
  let G = parseInt(color.substring(3,5), 16);
  let B = parseInt(color.substring(5,7), 16);

  R = parseInt( (R * (100 + percent)) / 100);
  G = parseInt( (G * (100 + percent)) / 100);
  B = parseInt( (B * (100 + percent)) / 100);

  const hexComponents = [R, G, B]

  const hexStr = hexComponents.map( hexComp => {
    if (hexComp > 256) { return '00' }
    const subStr = hexComp.toString(16);
    return (subStr.length === 1) ? `0${subStr}` : subStr;
  });

  debugger;
  return `#${hexStr}`;
}
