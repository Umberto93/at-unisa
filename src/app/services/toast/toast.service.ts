import { Injectable } from '@angular/core';
import { ToastShowOptions, Toast } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

interface ToastBtn {
    handler?: () => boolean | void | Promise<boolean | void>
    icon?: String,
    side?: 'start' | 'end',
    text?: String
}

interface ToastProps {
    buttons?: ToastBtn[],
    color?: 'unisa-success-dark-green' |
    'unisa-danger-dark-red' |
    'unisa-info-blue' |
    'unisa-warning-yellow' |
    undefined,
    cssClass?: String | String[],
    duration?: number,
    header?: String,
    message?: String,
    mode?: 'ios' | 'md',
    position?: 'bottom' | 'middle' | 'top'
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    private readonly toastProps = {
        cssClass: 'app-toast',
        duration: 2000,
        mode: 'ios'
    } as ToastProps;

    constructor(
        private toastController: ToastController
    ) {
    }

    async presentToast(props?: ToastProps) {
        const toast = await this.toastController.create({
            ...this.toastProps,
            ...props,
            ...(props.cssClass &&
                { cssClass: [].concat(this.toastProps.cssClass, props.cssClass) })
        } as any);

        await toast.present();
    }

    presentSuccessToast(message: string) {
        this.presentToast({
            buttons: [
                {
                    handler: () => false,
                    icon: 'checkmark-circle',
                    side: 'start'
                }
            ],
            color: 'unisa-success-dark-green',
            message: message
        });
    }

    presentFailureToast(message: string) {
        this.presentToast({
            buttons: [
                {
                    handler: () => false,
                    icon: 'close-circle',
                    side: 'start'
                }
            ],
            color: 'unisa-danger-dark-red',
            message: message
        });
    }

    presentInfoToast(message: string) {
        this.presentToast({
            buttons: [
                {
                    handler: () => false,
                    icon: 'information-circle',
                    side: 'start'
                }
            ],
            color: 'unisa-info-blue',
            message: message
        });
    }

    presentWarningToast(message: string) {
        this.presentToast({
            buttons: [
                {
                    handler: () => false,
                    icon: 'alert-circle',
                    side: 'start'
                }
            ],
            color: 'unisa-warning-yellow',
            message: message
        });
    }
}
