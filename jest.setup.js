const React = require('react')
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.React = React;

class FileReaderMock {
  constructor() {
    this.onload = null;
  }

  readAsDataURL(file) {
    if (this.onload) {
      this.result = 'data:image/png;base64,mockbase64data';
      this.onload();
    }
  }
}

global.FileReader = FileReaderMock;
