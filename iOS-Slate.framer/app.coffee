
# Constants
Metrics =
  screenWidth: 740
  screenHeight: 1340
  smallMargin: 14

Colors =
  white: '#fff'
  green: '#2dd7aa'

Defaults =
  cardWidth: Metrics.screenWidth - (Metrics.smallMargin * 2)
  cardHeight: 460
  smallMargin: Metrics.smallMargin
  borderRadius: 8

# Set background color
Screen.backgroundColor = Colors.green

# Create ScrollComponent
scroll = new ScrollComponent
  width: Metrics.screenWidth
  height: Metrics.screenHeight
  x: Align.center
  y: Align.center
  backgroundColor: "rgba(255, 255, 255, 0.2)"
  scrollHorizontal: false
  borderRadius: Defaults.borderRadius

# Add inset to the ScrollComponent
scroll.contentInset = 
  top: Defaults.smallMargin * 2
  bottom: Defaults.smallMargin * 2

# Create six layers in a loop
for i in [0..4]
  layer = new Layer
    parent: scroll.content
    name: "Row #{i}"
    width: Defaults.cardWidth - (Metrics.smallMargin * 2)
    height: Defaults.cardHeight
    x: Defaults.smallMargin * 2
    y: (Defaults.cardHeight + Metrics.smallMargin * 2) * i
    backgroundColor: Colors.white
    borderRadius: Metrics.borderRadius - 2
    