import { Injectable } from '@angular/core';
import { confirm as tauriConfirm, save, message as tauriMessage } from '@tauri-apps/api/dialog';
import { saveAs } from 'file-saver';
import { writeBinaryFile } from '@tauri-apps/api/fs';

@Injectable()
export abstract class TauriService {
    abstract save(blob: Blob, filename: string): Promise<void>;

    abstract confirm(message: string): Promise<boolean>;

    abstract message(message: string): Promise<void>;
}

@Injectable()
class BrowserTauriService extends TauriService {
    message(message: string): Promise<void> {
        alert(message);
        return Promise.resolve();
    }

    save(blob: Blob, filename: string): Promise<void> {
        saveAs(blob, filename);
        return Promise.resolve();
    }

    confirm(message: string): Promise<boolean> {
        const result = confirm(message);
        return Promise.resolve(result);
    }
}

@Injectable()
class RealTauriService extends TauriService {
    async save(blob: Blob, filename: string): Promise<void> {
        const filePath = await save({ defaultPath: filename });

        if (!filePath) {
            return;
        }

        await writeBinaryFile(filePath, await blob.arrayBuffer());
    }

    confirm(message: string): Promise<boolean> {
        return tauriConfirm(message);
    }

    async message(message: string) {
        await tauriMessage(message);
    }
}

export const tauriServiceFactory = (): TauriService => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any
    const isTauriAvailable = !!(window as any).__TAURI__;

    return isTauriAvailable ? new RealTauriService() : new BrowserTauriService();
};
