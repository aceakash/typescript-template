export function sayHello(name?: string): string {
    if (name == null) {
        name = 'world'
    }
    return `Hello, ${name}!`
}
