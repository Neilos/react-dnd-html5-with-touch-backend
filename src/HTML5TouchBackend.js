export default class HTML5TouchBackend {
  constructor(manager) {
    // Store bindings to prototype functions
    this._addEventListeners = this.addEventListeners.bind(this)
    this._removeEventListeners = this.removeEventListeners.bind(this)
    this._connectDragSource = this.connectDragSource.bind(this)
    this._connectDropTarget = this.connectDropTarget.bind(this)
    this._connectDragPreview = this.connectDragPreview.bind(this)

    // Bind to overridden versions of prototype functions
    this.addEventListeners = addEventListeners.bind(this)
    this.removeEventListeners = removeEventListeners.bind(this)
    this.connectDragSource = connectDragSource.bind(this)
    this.connectDropTarget = connectDropTarget.bind(this)
    this.connectDragPreview = connectDragPreview.bind(this)
  }
}

var addEventListeners = function (target) {
  this.addCustomEventListeners(target)
}

var removeEventListeners = function (target) {
  this.removeCustomEventListeners(target)
}

var connectDragPreview = function (sourceId, node, options) {
  this._connectDragPreview(sourceId, node, options)
}

var connectDragSource = function (sourceId, node, options) {
  let _superReturn = this._connectDragSource(sourceId, node, options)

  return () => {
    _superReturn()
  }
}

var connectDropTarget = function (targetId, node) {
  let _superReturn = this._connectDropTarget(targetId, node)

  return () => {
    _superReturn()
  }
}

