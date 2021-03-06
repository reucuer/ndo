import React from 'react';
import loadable from 'react-loadable';

const LoadingComponent = () => <div>please wait...</div>;
const TextEditorPromise = () =>
  import(/* webpackChunkName: 'texteditor' */ './TextEditor.js');

export default loadable({
  loader: TextEditorPromise,
  loading: LoadingComponent,
});
