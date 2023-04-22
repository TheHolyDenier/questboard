import Editor from '@toast-ui/editor';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      markdown: Editor,
      viewer: Viewer
    }
  };
});
