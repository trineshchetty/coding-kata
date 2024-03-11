import { IDestination, ISource } from "./interfaces"

export class Copier {
  constructor(private source: ISource, private destination: IDestination) {}

  copy() {

    let chars = this.source.readChars(1024); // Attempt to read a large chunk of characters

    while (chars.length > 0) {

      const newlineIndex = chars.indexOf('\n');

      if (newlineIndex !== -1) {
        // If a newline is found, write characters up to the newline

        this.destination.writeChars(chars.slice(0, newlineIndex));

        break; // Stop copying after newline
      } else {
        // If no newline, write all read characters
        this.destination.writeChars(chars);
      }
      chars = this.source.readChars(1024); // Attempt to read the next chunk
    }
  }
}
