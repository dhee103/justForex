//add "AceEditorComponent" to your modules list
import { AceEditorComponent } from 'ng2-ace-editor';
import {Component, ViewChild} from '@angular/core';

//to use theme eclipse
//with angular-cli add "../node_modules/ace-builds/src-min/ace.js"
//and "../node_modules/ace-builds/src-min/theme-eclipse.js" to "scripts" var into the file angular-cli.json

@Component({
    template: `
      <ace-editor
       [(text)]="text"
        #editor style="height:150px;"></ace-editor>
  `
})

export class EditorComponent {
    @ViewChild('editor') editor;
    text: string = "";

    ngAfterViewInit() {
        this.editor.setTheme("eclipse");

        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });

        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {

            }
        })
    }
}
