import { Container } from "inversify";
import { IServerConfig } from "../../server/IServerConfig";
import { IContainerDecorator } from "../../ioc/IContainerDecorator";
import { ContainerDecorator } from "../../ioc/ContainerDecorator";

describe("ContainerDecorator", () => {
    let serverConfig: IServerConfig;
    let decorator: IContainerDecorator;

    beforeAll(() => {
        decorator = new ContainerDecorator(serverConfig);
    });

    test("Returns a valid Inversify container", () => {
        const container = decorator.getContainer();

        expect(container).toBeTruthy;
        expect(container instanceof Container).toBe(true);
    });

});