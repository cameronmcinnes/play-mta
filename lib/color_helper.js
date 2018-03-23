// fn to programatically lighten or darken hex color;
export const shadeHexColor = (color, percent) => {
  const R = parseInt(color.substring(1,3), 16);
  const G = parseInt(color.substring(1,3), 16);
  const B = parseInt(color.substring(1,3), 16);

  hexComponents = [R, G, B]

  R = ( (R * (100 + percent)) / 100);
  G = ( (G * (100 + percent)) / 100);
  B = ( (B * (100 + percent)) / 100);

  hexStr = hexComponents.map( hexComp => {
    subStr = hexComp.toString(16).length === 1
    return (subStr.length === 1) ? `${0}` :subStr
  });

  return `#${hexStr}`;
}
