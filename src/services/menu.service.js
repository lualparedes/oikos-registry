import { g } from '../assets/scripts/utils';

export function showMenu() {
    g('.js-Menu').classList.add('Menu--open');
    g('.js-Main').classList.add('maskMain');
}

export function hideMenu() {
    g('.js-Menu').classList.remove('Menu--open');
    g('.js-Main').classList.remove('maskMain');
}