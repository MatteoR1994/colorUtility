## Functions

<dl>
<dt><a href="#setOpacity">setOpacity(hexColor, opacity)</a></dt>
<dd><p>Set the opacity of a hex color</p>
</dd>
<dt><a href="#fromColorStringToRGBA">fromColorStringToRGBA(colorString)</a></dt>
<dd><p>Converts a color string to an rgba string</p>
</dd>
<dt><a href="#getContrastingColor">getContrastingColor(hexColor)</a></dt>
<dd><p>Given a hex color, return the color that would be visible against the background</p>
</dd>
</dl>

<a name="setOpacity"></a>

## setOpacity(hexColor, opacity)
Set the opacity of a hex color

**Kind**: global function  
**Returns**: The hex color with the opacity applied.  

| Param | Description |
| --- | --- |
| hexColor | the hex color code with the # sign. |
| opacity | The opacity of the color. |

<a name="fromColorStringToRGBA"></a>

## fromColorStringToRGBA(colorString)
Converts a color string to an rgba string

**Kind**: global function  
**Returns**: a string that represents the color in the format of rgb(r, g, b, a).  

| Param | Description |
| --- | --- |
| colorString | The color string to convert to an RGBA string. |

<a name="getContrastingColor"></a>

## getContrastingColor(hexColor)
Given a hex color, return the color that would be visible against the background

**Kind**: global function  
**Returns**: a hex color code that is either black or white.  

| Param | Description |
| --- | --- |
| hexColor | The hex color code to convert. |

