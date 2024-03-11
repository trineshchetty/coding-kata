export interface ISource {
    readChar(): string;
    readChars(count: number): string[];
}
  
export interface IDestination {
    writeChar(c: string): void;
    writeChars(values: string[]): void;
}