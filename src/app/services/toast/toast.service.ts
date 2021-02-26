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

    /**
     * Inserisce un nuovo toast.
     * 
     * @param props Le proprietà del toast.
     */
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

    /**
     * Inserisce un nuovo toast con icona laterale sul lato sinistro.
     * 
     * @param icon L'icona da inserire (vedi IonIcons).
     * @param props Le proprietà del toast.
     */
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

    /**
     * Inserisce un toast in seguito ad un'azione andata a buon fine.
     * 
     * @param props Le proprietà del toast.
     */
    presentSuccessToast(props?: ToastProps) {
        this.presentToastWithIcon('checkmark-circle', {
            ...props,
            color: 'unisa-success-dark-green'
        });
    }

    /**
     * Inserisce un toast in seguito ad un'azione non andata a buon fine.
     * 
     * @param props Le proprietà del toast.
     */
    presentFailureToast(props?: ToastProps) {
        this.presentToastWithIcon('close-circle', {
            ...props,
            color: 'unisa-danger-dark-red'
        });
    }

    /**
     * Inserisce un toast informativo.
     * 
     * @param props Le proprietà del toast.
     */
    presentInfoToast(props?: ToastProps) {
        this.presentToastWithIcon('information-circle', {
            ...props,
            color: 'unisa-info-blue'
        });
    }

    /**
     * Inserisce un toast di avvertimento.
     * 
     * @param props Le proprietà del toast.
     */
    presentWarningToast(props?: ToastProps) {
        this.presentToastWithIcon('alert-circle', {
            ...props,
            color: 'unisa-warning-yellow'
        });
    }
}
