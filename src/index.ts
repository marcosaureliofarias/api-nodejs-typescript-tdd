class Person {
    speak(name?: string): string {
        return `Olá ${name?.toLocaleUpperCase() ?? "Fulano"} !!!`;
    }
}
const p = new Person();
p.speak("rodrigo");
p.speak();
