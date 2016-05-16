Constants = require 'constants'
Keyboard  = require 'keyboard'

# Begin page
Screen.backgroundColor = Constants.Colors.Green

# Create ScrollComponent
scroll = new ScrollComponent
  width: Constants.Metrics.ScreenWidth
  height: Constants.Metrics.ScreenHeight
  x: Align.center
  y: Align.center
  scrollHorizontal: false

# Add inset to the ScrollComponent
scroll.contentInset = 
  top: Constants.Defaults.SmallMargin * 2
  bottom: Constants.Defaults.SmallMargin * 2

# Create your layers in a loop
for i in [0..4]
  layer = new Layer
    parent: scroll.content
    name: "Row #{i}"
    width: Constants.Defaults.CardWidth - (Constants.Metrics.SmallMargin * 2)
    height: Constants.Defaults.CardHeight
    x: Constants.Defaults.SmallMargin * 2
    y: (Constants.Defaults.CardHeight + Constants.Metrics.SmallMargin * 2) * i
    backgroundColor: Constants.Colors.White
    borderRadius: Constants.Defaults.BorderRadius

    input = new Keyboard.Input
      parent: layer
      virtualKeyboard: true
      placeholder: "Username"
      placeholderColor: Constants.Colors.Gray
      type: "text"
      y: 240
      x: 90
      width: 500
      height: 80
      goButton: true
      borderColor: Constants.Colors.Gray
      borderWidth: 2
      borderRadius: Constants.Defaults.BorderRadius
    
