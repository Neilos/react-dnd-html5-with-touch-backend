import getEmptyImage from 'react-dnd-html5-backend';
import NativeTypes from 'react-dnd-html5-backend';
import HTML5Backend from 'react-dnd-html5-backend';

export { NativeTypes, getEmptyImage };

export default function createHTML5TouchBackend(manager) {
  return new HTML5Backend(manager);
}
