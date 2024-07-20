import { Container } from "inversify";
import { IServerConfig } from "../server/IServerConfig";
import { IContainerDecorator } from "./IContainerDecorator";

/**
 * The Inversify ContainerDecorator.
 * @implements The {@link IContainerDecorator} interface.
 * 
 * @example Dependency Injection  
 * ```javascript
 * // Creating an injectable  
 * \@injectable() // (ignoring the slash. Formatting issue.)  
 * export class Foo extends IFoo { ... }
 * // Then add it to the TYPES object in this directory.
 * // And then bind it in this decorator.
 * 
 * // Consuming the injectable  
 * export class Bar extends IBar {  
 *    constructor(@inject(TYPES.Foo) foo: IFoo) { ... }  
 * }
 * ```
 * 
 * Check out https://github.com/inversify/InversifyJS?tab=readme-ov-file for more information.
 */
export class ContainerDecorator implements IContainerDecorator {
    private readonly name = 'ContainerDecorator';
    private container: Container;
    private config: IServerConfig; // Unused in this template.

    constructor(config: IServerConfig) {
        this.config = config;
        this.container = new Container();
    }

    /**
     *
     */
    public getContainer(): Container {
        if (!this.container) {
            throw new Error(`${this.name}: Container is not initialized`);
        }

        return this.container;
    }

    /**
     * 
     */
    public initContainer(): void {
        const timer = performance.now();
        console.log(`${this.name}: Initializing the container...`);

        // this.container.bind<IServerConfig>(TYPES.IServerConfig).toConstantValue(this.config);

        console.info(`${this.name}: Container initialized in ${performance.now() - timer}ms`);
    }
}