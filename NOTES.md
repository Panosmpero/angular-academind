# Selector element or attribute or class

selector: "app-servers"

```
<app-servers></app-servers>
```

selector: "[app-servers]"

```
<div app-servers></div>
```

selector: ".app-servers"

```
<div class="app-servers"></div>
```

> NOTE: Select by id or CSS pseudo selectors won't work!

---

# Databinding

### OUTPUT

String Interpolation

```
{{ data }}
```

(Only ternary expressions, no block)

Property Binding

```
[property]="data"
```

### INPUT

Event Binding

```
(event)="expression"
```

### BOTH

Two-way Binding

```
[(ngModel)]="data"
```

---

---

# CLI

`ng generate component <componentName>` |
`ng g c <componentName>`

`ng g c <componentName> --skip-tests`

`ng g c <folder>/<componentName>`

`ng generate directive <directiveName>` |
`ng g d <directiveName>`

---

# Custom property and event Binding

## parent ==> child

We need to add a decorator to child component
(just like passing down React props to children)

```
  @Input(<property alias>) element;
```

and at the parent component we pass down the value

```
  <app-child
    [<element or property alias>]="<variable>"
  ></app-child>
```

## child ==> parent

At child element:

```
  @Output(<alias>) <event name> = new EventEmitter()

  method x() {
    this.<event name>.emit(<data>)
  }
```

and at the parent component:

```
  <app-child
    (<custom event>)="method($event)"
  ></app-child>
```

and we add the method to parent

---

# CSS Encapsulation

```
@Component({
...,
encapsulation: ViewEncapsulation.Emulated | None | ShadowDom
})
```

- Emulated(default): CSS apply to component Only
- None: CSS global
- ShadowDom: like Emulated only in supported browsers

## Local Reference

```
<input #<ref name>></input>

<div (click)="function(<ref name>)"></div>
```

> NOTE: We can use only in HTML file, not in TS file

---

We can select the local ref with:

`@ViewChild`

```
@ViewChild(<ref name>: string | <component>) <name>: ElementRef
```

### Example:

```
@ViewChild("serverContentInput", { static: true }) serverContentInput: ElementRef;

method() {
  newInput: this.serverContentInput.nativeElement.value
}
```

---

Everything placed between opening and closing tags of your components will be lost. There is a special directives component

```
<ng-content></ng-content>
```

Same goes with `@ContentChild` but it gets populated at `ngAfterContentInit`

```
<div #<ref name>></div>

@ContentChild(<ref name>: string | <component>) <name>: ElementRef
```

---

# Lifecycle

- `ngOnChanges` Called after a bound input property has changed and once at start (called before `ngOnInit`)
- `ngOnInit` Called once when component initialized (ComponentDidMount) and run after the constructor
- `ngDoCheck` Called during every change detection run (+1 at the end when in development mode)
- `ngAfterContentInit` Called after content (ng-content) has been projected into view
- `ngAfterContentChecked` Called every time the projected content has been checked
- `ngAfterViewInit` Called after the compoenent's view (and child views) has been initialized
- `ngAfterViewChecked` Called every time the view (and child views) has been checked
- `ngOnDestroy` Called once the component is about to be destroyed (eg. ngIf)

> NOTE: Implementing those methods at the top of class component is a good practice, although you can just call them inside of it

---

# Directives

> filename.directive.ts

```
import { Directive } from '@angular/core';

@Directive({
  selector: ...
})
export class DirectiveName {
  ...
}
```

and then we import to our main app

> app.module.ts

```
@NgModule({
  declarations: [AppComponent, ..., DirectiveName],
  ...
})
```

**OR**

`ng g d <directiveName>`

---

`HostListener()`

Listen to host events

`HostBinding()`

Bind to host props

## Structural Directive

```
export class <className> {
  @Input() set <name>() {    /* name must be the same as the selector  */
    ...toDo
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
```

`constructor(what to do, where to do)`

---

# Services

create a file

> serviceName.service.ts

eg. logging service

```
export class LoggingService {
  logStatusChange(status: string) {
    console.log(`A server status changed, new status: ${status}`);
  }
}
```

Now inside the component we call it in the provider, then the constructor
and finally we use it.

```
@Component({
  ...,
  providers: [LoggingService],
})

export class AccountComponent {
  ...

  constructor(private loggingService: LoggingService) {}

  onSetTo(status: string) {
    ...
    this.loggingService.logStatusChange(status);
  }
}
```

> CAREFUL: If the service is in many selectors you may need to chose only 1 otherwise you will create many instances of the same service that will lead into bugs.

---

## Injecting Services

Highest level is the app.module to place the service in the providers where we can use the service in the entire App and even inject other services.

Add before class declaration in service you want to inject:

```
@Injectable()
```

**OR**

You can do this instead:

```
@Injectable({ providedIn: "root" })
export class MyService {
  ....
}
```
