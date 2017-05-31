//add "AceEditorComponent" to your modules list
import {Component, ViewChild} from '@angular/core';
import { AceEditorComponent} from 'ng2-ace-editor';

//to use theme eclipse
//with angular-cli add "../node_modules/ace-builds/src-min/ace.js"
//and "../node_modules/ace-builds/src-min/theme-eclipse.js" to "scripts" var into the file angular-cli.json

@Component({
    template: `
      <ace-editor
       [(text)]="text"
        #editor></ace-editor>
  `,
    styleUrls: ['./css/editor.component.css']
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
