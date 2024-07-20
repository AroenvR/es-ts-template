import { IContainerDecorator } from "../ioc/IContainerDecorator";
import { IServerConfig } from "./IServerConfig";

export class Server {
    private readonly name = 'Server';
    private config: IServerConfig;
    private container: IContainerDecorator;

    constructor(config: IServerConfig, container: IContainerDecorator) {
        this.config = config;
        this.container = container;
    }

    public start(): void {
        const timer = performance.now();
        console.log(`${this.name}: Starting the server...`);
        console.debug(`${this.name}: Server configuration: ${JSON.stringify(this.config)}`);

        this.container.initContainer();

        console.info(`${this.name}: Server started in ${performance.now() - timer}ms`);
    }
}