import { g } from '../assets/scripts/utils';

export function show(what) {

    g('.js-'+what+'Modal').classList.add('a-modal-show');
    g('.js-'+what+'Backdrop').classList.add('a-backdrop-show');

    if (g('.js-'+what+'Modal').classList.contains('a-modal-hide')) {
        g('.js-'+what+'Modal').classList.remove('a-modal-hide');
        g('.js-'+what+'Backdrop').classList.remove('a-backdrop-hide');
    }
}

export function hide(what) {

    g('.js-'+what+'Modal').classList.add('a-modal-hide');
    g('.js-'+what+'Backdrop').classList.add('a-backdrop-hide');
    g('.js-'+what+'Modal').classList.remove('a-modal-show');
    g('.js-'+what+'Backdrop').classList.remove('a-backdrop-show');

    setTimeout(() => {
        g('.js-'+what+'Modal').classList.remove('a-modal-hide');
        g('.js-'+what+'Backdrop').classList.remove('a-backdrop-hide');
    }, 1000);
}