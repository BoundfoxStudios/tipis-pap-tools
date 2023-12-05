import { initFlowbite } from 'flowbite';

export function flowbiteAppInitializer(): Promise<void> {
    return new Promise(resolve => {
        initFlowbite();
       resolve();
    });
}
