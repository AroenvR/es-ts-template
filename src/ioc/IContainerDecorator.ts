import { Container } from "inversify";

/**
 * The Inversify ContainerDecorator's interface.
 */
export interface IContainerDecorator {
    /**
     * Get the Inversify container.
     */
    getContainer(): Container;

    /**
     * Initialize the Inversify container.
     */
    initContainer(): void;
}