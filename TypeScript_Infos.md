# TypeScript

## Was kann TypeScript?

> https://github.com/Microsoft/TypeScript  
> https://en.wikipedia.org/wiki/TypeScript

- fügt JavaScript Features hinzu wie optionale Typen und Interfaces und vor allem statische Typen
    - hat also alle Features, die JavaScript auch hat
    - Typ-Annotationen sorgen dafür, dass man (hoffentlich) weniger Runtime-Fehler fixen muss
- transpiliert zu menschenlesbarem JavaScript (Code in TypeScript -> Code in JavaScript)
    - menschenlesbar -> noch nicht optimal -> noch mit Webpack oder einem anderen Tool komprimieren
    - das JavaScript-Ergebnis ist in allen Browsern ausführbar und backwards-kompatibel

## Installation

> https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

- Voraussetzung: node.js
- `npm install -g typescript`
    - installiert TypeScript global auf dem Rechner (unabhängig vom Projekt benutzbar)

## Nutzung

> https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
> https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- ein File kompilieren: `tsc <filename.ts>`
    - Output: `<filename>.js`
- komplexere Setups möglich z.B. via `tsconfig.json`-Datei
- im Browser ausprobieren: [TypeScript Playground](https://www.typescriptlang.org/play/)
    - hier kann man schön sehen, zu welchem JavaScript-Code der TypeScript-Code wird

## Typannotationen

> https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

- nicht verpflichtend, nur optional (denn alles valide JavaScript ist auch valides TypesScript)

```ts
function add(x: number, y: number){
    return x+y;
}
add(2,4); // 6
add(2, "vier");
```

- in JavaScript an sich: kein Problem, Rückgabewert `2vier`
- in TypeScript: Kompilierfehler `Argument of type '"vier"' is not assignable to parameter of type 'number'.`

### Typen in TypeScript

> https://www.typescriptlang.org/docs/handbook/basic-types.html

einige der Typen:

- Boolean: `let imBool: boolean = false;`
- Number: `let imNumber: number = 42;`
- String: `let imString: string = "something";`
- Array: `imNumberArray: number[] = [1, 15, 27];`
- Tupel: `let imTuple: [string, number] = "[zweiundvierzig, 42];`

#### Enum

> https://www.typescriptlang.org/docs/handbook/enums.html

- erlauben es auf einfache Weise benannte Konstanten zu nutzen

```ts
enum Season {Spring, Summer, Autumn, Winter};
let currentSeason: Season = Season.Autumn;
```

## Klassen

> https://www.typescriptlang.org/docs/handbook/classes.html

- sehr ähnlich wie die vorgestellten Standard-JS-Klassen, haben allerdings ein paar zusätzliche Features
- hier werden jetzt nur die neuen Features gegenüber den Standard-Klassen erklärt und auch davon nur ausgewählte
- generell: macht JavaScript-Klassen ähnlicher zu Java-Klassen

### Attribute (vereinfachte Syntax)

- geht natürlich alternativ auch mit "normalem" JavaScript und Closures

```ts
class SomeClass {
    myAttribute: string;
    constructor(){
        this.myAttribute = "foo";
    }
}
```

### Public, private und protected Modifier

- funktionieren wie in Java

```ts
class Box {
    private secret: string;
    constructor(){
        this.secret = "bling";
    }
}
new Box().secret; 
```

- gibt einen Compile-Fehler: `Property 'secret' is private and only accessible within class 'Box'.`

## Interfaces

### für Parameter

```ts
interface Book {
    title: string;
}

function whoWrote(b: Book){
    return b.title;
}

let someBook = {
    title: "some title"
}
let somethingElse = {
    weight: 10
}
whoWrote(someBook); // "some title"
whoWrote(somethingElse);
```

- Transpilieren erzeugt einen Fehler: `Argument of type '{ weight: number; }' is not assignable to parameter of type 'Book'. Property 'title' is missing in type '{ weight: number; }'.`
- `someBook` implementiert das Interface, einfach weil es die richtigen Eigenschaften hat, das muss nicht explizit sein

### für Klassen

> https://www.typescriptlang.org/docs/handbook/interfaces.html

```ts
interface Animal {
    weight: number;
}

class Tiger implements Animal {
    weight: number;
    constructor(weight: number){
        this.weight = weight;
    }
}

class Stone implements Animal {
    color: string
    constructor(color: string){
        this.color = color;
    }
}
```

- Transpilieren erzeugt einen Fehler: `Class 'Stone' incorrectly implements interface 'Animal'. Property 'weight' is missing in type 'Stone'.`

## Generics

> https://www.typescriptlang.org/docs/handbook/generics.html

### generische Funktionen

```ts
function toArray<T>(elem: T): Array<T> {
    return [elem];
}
```

### generische Klassen

```ts
class Box<T>{
    content: T;
    constructor(content: T){
        this.content = content;
    }
}

let myBox = new Box<string>("yay");
let myOtherBox = new Box<number>(7);
```