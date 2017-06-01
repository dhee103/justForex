//add "AceEditorComponent" to your modules list
import { Component } from '@angular/core';
import { EditorService } from './services/editor.service';
import { AceEditorDirective } from 'ng2-ace-editor';

//to use theme eclipse
//with angular-cli add "../node_modules/ace-builds/src-min/ace.js"
//and "../node_modules/ace-builds/src-min/theme-eclipse.js" to "scripts" var into the file angular-cli.json

@Component({
    templateUrl: './views/editor.component.html',
    styleUrls: [
      './css/editor.component.css',
      '../../node_modules/font-awesome/css/font-awesome.min.css']
})

export class EditorComponent {
  options:any = {minLines: 31, maxLines:1000, printMargin: false};
  tasks: string[];
  title: string;
  text: string = "";
  lang: string = "JavaScript";

    constructor(private editorService:EditorService){
        this.editorService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            });
    }

    addTask(event){
        event.preventDefault();
        var t = {
          text: this.text
        }

        this.editorService.addTask(t)
            .subscribe(task => {
                this.tasks.push(t.text);
                this.title = '';
            });
    }

    changeLanguage(lang:string) {

    }

    updateStatus(task){
        var _task = {
            _id:task._id,
            title: task.title,
            isDone: !task.isDone
        };

        this.editorService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }
}
