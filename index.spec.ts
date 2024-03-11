import { ISource, IDestination } from "./interfaces"
import { Copier } from "./index"

describe('Copier', () => {
    it('should copy characters from source to destination until newline, using multi-char methods', () => {
        const sourceMock: ISource = {
            readChar: jest.fn().mockReturnValueOnce('\n'), // Not expected to be called in this test
            readChars: jest.fn().mockReturnValueOnce(['H', 'i', '\n']),
        };

        const destinationMock: IDestination = {
            writeChar: jest.fn(),
            writeChars: jest.fn(),
        };

        const copier = new Copier(sourceMock, destinationMock);
        copier.copy();

        // Verify readChars was called correctly
        expect(sourceMock.readChars).toHaveBeenCalledTimes(1);
        expect(sourceMock.readChars).toHaveBeenCalledWith(expect.any(Number)); 
        
        // Verify writeChars was called correctly with 'Hi'
        expect(destinationMock.writeChars).toHaveBeenCalledTimes(1);
        expect(destinationMock.writeChars).toHaveBeenCalledWith(['H', 'i']);
    });
});
