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
    color?: String | undefined,
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
        color: 'dark',
        cssClass: 'app-toast',
        duration: 2000,
        mode: 'ios'
    } as ToastProps;

    constructor(
        private toastController: ToastController
    ) {
    }

    async presentToast(props?: ToastProps) {
        console.log(props);
        const toast = await this.toastController.create({
            ...this.toastProps,
            ...props,
            ...(props.cssClass &&
                { cssClass: [].concat(this.toastProps.cssClass, props.cssClass) })
        } as any);

        await toast.present();
    }

    presentToastWithIcon(icon: String, props?: ToastProps) {
        this.presentToast({
            ...props,
            buttons: [
                {
                    handler: () => false,
                    icon: icon,
                    side: 'start'
                }
            ],
            message: props.message
        });
    }

    presentSuccessToast(props?: ToastProps) {
        this.presentToastWithIcon('checkmark-circle', {
            ...props,
            color: 'unisa-success-dark-green'
        });
    }

    presentFailureToast(props?: ToastProps) {
        this.presentToastWithIcon('close-circle', {
            ...props,
            color: 'unisa-danger-dark-red'
        });
    }

    presentInfoToast(props?: ToastProps) {
        this.presentToastWithIcon('information-circle', {
            ...props,
            color: 'unisa-info-blue'
        });
    }

    presentWarningToast(props?: ToastProps) {
        this.presentToastWithIcon('alert-circle', {
            ...props,
            color: 'unisa-warning-yellow'
        });
    }
}
